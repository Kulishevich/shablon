import { RootState } from '../store';

// Базовые селекторы
export const selectProfileState = (state: RootState) => state.profile;

// Селекторы для аутентификации
export const selectIsAuthenticated = (state: RootState) => state.profile.isAuthenticated;
export const selectAuthLoading = (state: RootState) => state.profile.isLoading;
export const selectAuthError = (state: RootState) => state.profile.error;
export const selectToken = (state: RootState) => state.profile.token;
export const selectRefreshToken = (state: RootState) => state.profile.refreshToken;

// Селекторы для профиля пользователя
export const selectUser = (state: RootState) => state.profile.user;
export const selectUserProfile = (state: RootState) => state.profile.user;
export const selectProfileLoading = (state: RootState) => state.profile.isProfileLoading;
export const selectProfileError = (state: RootState) => state.profile.profileError;

// Селекторы для отдельных полей пользователя
export const selectUserName = (state: RootState) => {
  const user = state.profile.user;
  return user ? `${user.firstName} ${user.lastName}` : null;
};

export const selectUserFirstName = (state: RootState) => state.profile.user?.firstName;
export const selectUserLastName = (state: RootState) => state.profile.user?.lastName;
export const selectUserEmail = (state: RootState) => state.profile.user?.email;
export const selectUserPhone = (state: RootState) => state.profile.user?.phone;

export const selectUserId = (state: RootState) => state.profile.user?.id;



// Селекторы для будущих функций
export const selectPasswordChangeLoading = (state: RootState) => state.profile.passwordChangeLoading;
export const selectOrderHistory = (state: RootState) => state.profile.orderHistory;

// Комбинированные селекторы
export const selectAuthStatus = (state: RootState) => ({
  isAuthenticated: state.profile.isAuthenticated,
  isLoading: state.profile.isLoading,
  error: state.profile.error,
});

export const selectProfileStatus = (state: RootState) => ({
  user: state.profile.user,
  isLoading: state.profile.isProfileLoading,
  error: state.profile.profileError,
});

// Селектор для проверки, есть ли токен
export const selectHasValidToken = (state: RootState) => {
  return Boolean(state.profile.token && state.profile.isAuthenticated);
};

// Селектор для проверки, нужно ли обновить профиль
export const selectNeedsProfileUpdate = (state: RootState) => {
  return state.profile.isAuthenticated && !state.profile.user;
};

// Селектор для получения инициалов пользователя
export const selectUserInitials = (state: RootState) => {
  const user = state.profile.user;
  if (!user) return null;

  const firstInitial = user.firstName?.charAt(0).toUpperCase() || '';
  const lastInitial = user.lastName?.charAt(0).toUpperCase() || '';

  return `${firstInitial}${lastInitial}`;
};

// Селектор для проверки, заполнен ли профиль полностью
export const selectIsProfileComplete = (state: RootState) => {
  const user = state.profile.user;
  if (!user) return false;

  return Boolean(
    user.firstName &&
    user.lastName &&
    user.email &&
    user.phone
  );
};
