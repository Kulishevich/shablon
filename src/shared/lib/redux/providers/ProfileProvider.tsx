'use client';

import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../store';
import { hydrateProfile, fetchUserProfile } from '../slices/profileSlice';
import {
  selectIsAuthenticated,
  selectToken,
  selectNeedsProfileUpdate,
} from '../selectors/ProfileSelectors';

interface ProfileProviderProps {
  children: React.ReactNode;
}

const PROFILE_STORAGE_KEY = 'profile_shablon';

export function ProfileProvider({ children }: ProfileProviderProps) {
  const dispatch = useDispatch<AppDispatch>();
  const profile = useSelector((state: RootState) => state.profile);
  const needsProfileUpdate = useSelector(selectNeedsProfileUpdate);
  const [isHydrated, setIsHydrated] = useState(false);

  // Гидрация из localStorage при инициализации
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const profileData = localStorage.getItem(PROFILE_STORAGE_KEY);
      if (profileData) {
        try {
          const parsedProfile = JSON.parse(profileData);
          dispatch(hydrateProfile(parsedProfile));
        } catch (error) {
          console.error('Ошибка при парсинге данных профиля из localStorage:', error);
          localStorage.removeItem(PROFILE_STORAGE_KEY);
        }
      }
      setIsHydrated(true);
    }
  }, [dispatch]);

  // Сохранение в localStorage при изменении состояния профиля
  useEffect(() => {
    if (isHydrated && typeof window !== 'undefined') {
      // Исключаем временные состояния загрузки из сохранения
      const profileToSave = {
        ...profile,
        isLoading: false,
        isProfileLoading: false,
        error: null,
        profileError: null,
      };
      localStorage.setItem(PROFILE_STORAGE_KEY, JSON.stringify(profileToSave));
    }
  }, [profile, isHydrated]);

  // Синхронизация между вкладками
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const handleStorage = (event: StorageEvent) => {
        if (event.key === PROFILE_STORAGE_KEY && event.newValue) {
          try {
            const parsedProfile = JSON.parse(event.newValue);
            dispatch(hydrateProfile(parsedProfile));
          } catch (error) {
            console.error('Ошибка при синхронизации профиля между вкладками:', error);
          }
        }
      };

      window.addEventListener('storage', handleStorage);
      return () => {
        window.removeEventListener('storage', handleStorage);
      };
    }
  }, [dispatch]);

  // Загрузка профиля пользователя при необходимости
  useEffect(() => {
    if (needsProfileUpdate && profile.token && isHydrated) {
      dispatch(fetchUserProfile());
    }
  }, [dispatch, needsProfileUpdate, profile.token, isHydrated]);

  // Предотвращаем рендеринг до гидрации
  if (!isHydrated) return null;

  return <>{children}</>;
}

export const useProfileManager = () => {
  const saveProfile = (profileData: any) => {
    if (typeof window !== 'undefined') {
      localStorage.setItem(PROFILE_STORAGE_KEY, JSON.stringify(profileData));
    }
  };

  const clearProfile = () => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem(PROFILE_STORAGE_KEY);
    }
  };

  const getStoredProfile = () => {
    if (typeof window !== 'undefined') {
      const profileData = localStorage.getItem(PROFILE_STORAGE_KEY);
      if (profileData) {
        try {
          return JSON.parse(profileData);
        } catch (error) {
          console.error('Ошибка при парсинге данных профиля:', error);
          return null;
        }
      }
    }
    return null;
  };

  return {
    saveProfile,
    clearProfile,
    getStoredProfile,
  };
};
