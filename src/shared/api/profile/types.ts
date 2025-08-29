// Основные типы для API профиля
export interface UserProfile {
  id: number;
  name: string;
  firstName?: string;
  lastName?: string;
  phone: string;
  email: string;
  created_at: string;
  updated_at: string;
}

// Типы для запросов аутентификации
export interface LoginRequest {
  phone: string;
  password: string;
}

export interface LoginResponse {
  client: UserProfile;
  token: string;
}

export interface RegisterRequest {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  password: string;
}

export interface RegisterResponse {
  token: string;
  client: UserProfile;
}

// Типы для восстановления пароля
export interface ForgotPasswordRequest {
  email: string;
}

export interface ForgotPasswordResponse {
  message: string;
  resetToken?: string; // Для тестирования, в продакшене не должен возвращаться
}

export interface ResetPasswordRequest {
  token: string;
  password: string;
  confirmPassword: string;
}

export interface ResetPasswordResponse {
  message: string;
}

// Типы для работы с профилем
export interface UpdateProfileRequest {
  firstName?: string;
  lastName?: string;
  phone?: string;
  email?: string;
}

export interface UpdateProfileResponse {
  user: UserProfile;
  message: string;
}

// Типы для смены пароля (для будущего использования)
export interface ChangePasswordRequest {
  currentPassword: string;
  newPassword: string;
  confirmNewPassword: string;
}

export interface ChangePasswordResponse {
  message: string;
}



// Типы для обновления токена
export interface RefreshTokenRequest {
  refreshToken: string;
}

export interface RefreshTokenResponse {
  token: string;
  refreshToken: string;
  expiresIn: number;
}



// Типы для удаления аккаунта
export interface DeleteAccountRequest {
  password: string;
  confirmDeletion: boolean;
}

export interface DeleteAccountResponse {
  message: string;
}

// Общие типы ответов
export interface ApiError {
  message: string;
  code: string;
  details?: Record<string, any>;
}

export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  error?: ApiError;
  timestamp: string;
}

// Типы для истории заказов (заглушка для будущего функционала)
export interface OrderHistoryItem {
  id: number;
  orderNumber: string;
  date: string;
  status: string;
  total: number;
  items: Array<{
    id: number;
    name: string;
    quantity: number;
    price: number;
  }>;
}

export interface OrderHistoryResponse {
  orders: OrderHistoryItem[];
  total: number;
  page: number;
  limit: number;
}
