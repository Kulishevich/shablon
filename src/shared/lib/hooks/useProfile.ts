import { useSelector, useDispatch } from 'react-redux';
import { useCallback } from 'react';
import { AppDispatch } from '../redux/store';
import {
  loginUser,
  registerUser,
  forgotPassword,
  fetchUserProfile,
  updateUserProfile,
  logout,
  clearError,
} from '../redux/slices/profileSlice';
import {
  selectIsAuthenticated,
  selectAuthLoading,
  selectAuthError,
  selectUser,
  selectUserProfile,
  selectProfileLoading,
  selectProfileError,
  selectUserName,
  selectUserEmail,
  selectUserPhone,
  selectUserInitials,

  selectIsProfileComplete,
  selectAuthStatus,
  selectProfileStatus,
  selectHasValidToken,
} from '../redux/selectors/ProfileSelectors';
import {
  LoginRequest,
  RegisterRequest,
  ForgotPasswordRequest,
  UpdateProfileRequest,
} from '../../api/profile/types';

// Основной хук для работы с профилем
export const useProfile = () => {
  const dispatch = useDispatch<AppDispatch>();

  // Селекторы состояния
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const authLoading = useSelector(selectAuthLoading);
  const authError = useSelector(selectAuthError);
  const user = useSelector(selectUser);
  const profileLoading = useSelector(selectProfileLoading);
  const profileError = useSelector(selectProfileError);

  // Дополнительные селекторы
  const userName = useSelector(selectUserName);
  const userEmail = useSelector(selectUserEmail);
  const userPhone = useSelector(selectUserPhone);
  const userInitials = useSelector(selectUserInitials);

  const isProfileComplete = useSelector(selectIsProfileComplete);
  const hasValidToken = useSelector(selectHasValidToken);

  // Действия
  const login = useCallback((credentials: LoginRequest) => {
    return dispatch(loginUser(credentials));
  }, [dispatch]);

  const register = useCallback((userData: RegisterRequest) => {
    return dispatch(registerUser(userData));
  }, [dispatch]);

  const resetPassword = useCallback((request: ForgotPasswordRequest) => {
    return dispatch(forgotPassword(request));
  }, [dispatch]);

  const getProfile = useCallback(() => {
    return dispatch(fetchUserProfile());
  }, [dispatch]);

  const updateProfile = useCallback((updateData: UpdateProfileRequest) => {
    return dispatch(updateUserProfile(updateData));
  }, [dispatch]);

  const signOut = useCallback(() => {
    dispatch(logout());
  }, [dispatch]);

  const clearErrors = useCallback(() => {
    dispatch(clearError());
  }, [dispatch]);

  return {
    // Состояние
    isAuthenticated,
    authLoading,
    authError,
    user,
    profileLoading,
    profileError,
    userName,
    userEmail,
    userPhone,
    userInitials,

    isProfileComplete,
    hasValidToken,

    // Действия
    login,
    register,
    resetPassword,
    getProfile,
    updateProfile,
    signOut,
    clearErrors,
  };
};

// Хук для работы с аутентификацией
export const useAuth = () => {
  const dispatch = useDispatch<AppDispatch>();

  const authStatus = useSelector(selectAuthStatus);

  const login = useCallback((credentials: LoginRequest) => {
    return dispatch(loginUser(credentials));
  }, [dispatch]);

  const register = useCallback((userData: RegisterRequest) => {
    return dispatch(registerUser(userData));
  }, [dispatch]);

  const resetPassword = useCallback((request: ForgotPasswordRequest) => {
    return dispatch(forgotPassword(request));
  }, [dispatch]);

  const signOut = useCallback(() => {
    dispatch(logout());
  }, [dispatch]);

  const clearErrors = useCallback(() => {
    dispatch(clearError());
  }, [dispatch]);

  return {
    ...authStatus,
    login,
    register,
    resetPassword,
    signOut,
    clearErrors,
  };
};

// Хук для работы с данными профиля
export const useUserProfile = () => {
  const dispatch = useDispatch<AppDispatch>();

  const profileStatus = useSelector(selectProfileStatus);
  const userName = useSelector(selectUserName);
  const userInitials = useSelector(selectUserInitials);

  const isProfileComplete = useSelector(selectIsProfileComplete);

  const getProfile = useCallback(() => {
    return dispatch(fetchUserProfile());
  }, [dispatch]);

  const updateProfile = useCallback((updateData: UpdateProfileRequest) => {
    return dispatch(updateUserProfile(updateData));
  }, [dispatch]);

  const clearErrors = useCallback(() => {
    dispatch(clearError());
  }, [dispatch]);

  return {
    ...profileStatus,
    userName,
    userInitials,

    isProfileComplete,
    getProfile,
    updateProfile,
    clearErrors,
  };
};

// Хук для проверки прав доступа
export const useAuthGuard = () => {
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const hasValidToken = useSelector(selectHasValidToken);
  const authLoading = useSelector(selectAuthLoading);

  const isAuthorized = isAuthenticated && hasValidToken;
  const isLoading = authLoading;
  const needsAuth = !isAuthorized && !isLoading;

  return {
    isAuthorized,
    isLoading,
    needsAuth,
    isAuthenticated,
    hasValidToken,
  };
};
