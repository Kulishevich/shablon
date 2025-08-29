import { getApiUrl } from '../base';
import {
  LoginRequest,
  LoginResponse,
  RegisterRequest,
  RegisterResponse,
  ForgotPasswordRequest,
  ForgotPasswordResponse,
  ResetPasswordRequest,
  ResetPasswordResponse,
  RefreshTokenRequest,
  RefreshTokenResponse,
  ApiResponse,
} from './types';

// Авторизация пользователя
export async function loginUser(credentials: LoginRequest): Promise<LoginResponse> {
  try {
    const apiUrl = await getApiUrl();
    const response = await fetch(`${apiUrl}/v1/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'accept': 'application/json',
      },
      body: JSON.stringify(credentials),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Ошибка авторизации');
    }

    const data: LoginResponse = await response.json();


    return data;
  } catch (error) {
    if (error instanceof Error) {
      throw error;
    }
    throw new Error('Произошла неожиданная ошибка при авторизации');
  }
}

// Регистрация пользователя
export async function registerUser(userData: RegisterRequest): Promise<RegisterResponse> {
  try {
    const apiUrl = await getApiUrl();
    const response = await fetch(`${apiUrl}/v1/auth/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'accept': 'application/json',
      },
      body: JSON.stringify({ ...userData, name: `${userData.firstName} ${userData.lastName}` }),
    });


    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Ошибка регистрации');
    }


    const data: ApiResponse<RegisterResponse> = await response.json();

    if (!data.success || !data.data) {
      throw new Error(data.error?.message || 'Ошибка регистрации');
    }

    return data.data;
  } catch (error) {
    if (error instanceof Error) {
      throw error;
    }
    throw new Error('Произошла неожиданная ошибка при регистрации');
  }
}

// Отправка запроса на восстановление пароля
export async function forgotPassword(request: ForgotPasswordRequest): Promise<ForgotPasswordResponse> {
  try {
    const apiUrl = await getApiUrl();
    const response = await fetch(`${apiUrl}/v1/auth/forgot-password`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(request),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Ошибка отправки письма для восстановления пароля');
    }

    const data: ApiResponse<ForgotPasswordResponse> = await response.json();

    if (!data.success || !data.data) {
      throw new Error(data.error?.message || 'Ошибка отправки письма для восстановления пароля');
    }

    return data.data;
  } catch (error) {
    if (error instanceof Error) {
      throw error;
    }
    throw new Error('Произошла неожиданная ошибка при отправке письма для восстановления пароля');
  }
}

// Сброс пароля
export async function resetPassword(request: ResetPasswordRequest): Promise<ResetPasswordResponse> {
  try {
    const apiUrl = await getApiUrl();
    const response = await fetch(`${apiUrl}/v1/auth/reset-password`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(request),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Ошибка сброса пароля');
    }

    const data: ApiResponse<ResetPasswordResponse> = await response.json();

    if (!data.success || !data.data) {
      throw new Error(data.error?.message || 'Ошибка сброса пароля');
    }

    return data.data;
  } catch (error) {
    if (error instanceof Error) {
      throw error;
    }
    throw new Error('Произошла неожиданная ошибка при сбросе пароля');
  }
}

// Обновление токена
export async function refreshToken(request: RefreshTokenRequest): Promise<RefreshTokenResponse> {
  try {
    const apiUrl = await getApiUrl();
    const response = await fetch(`${apiUrl}/v1/auth/refresh`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(request),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Ошибка обновления токена');
    }

    const data: ApiResponse<RefreshTokenResponse> = await response.json();

    if (!data.success || !data.data) {
      throw new Error(data.error?.message || 'Ошибка обновления токена');
    }

    return data.data;
  } catch (error) {
    if (error instanceof Error) {
      throw error;
    }
    throw new Error('Произошла неожиданная ошибка при обновлении токена');
  }
}

// Выход из системы
export async function logoutUser(token: string): Promise<void> {
  try {
    const apiUrl = await getApiUrl();
    const response = await fetch(`${apiUrl}/v1/auth/logout`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Ошибка выхода из системы');
    }
  } catch (error) {
    // Игнорируем ошибки при выходе, так как локальное состояние все равно очищается
    console.warn('Ошибка при выходе из системы:', error);
  }
}

// Проверка валидности токена
export async function validateToken(token: string): Promise<boolean> {
  try {
    const apiUrl = await getApiUrl();
    const response = await fetch(`${apiUrl}/v1/auth/validate`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    });

    return response.ok;
  } catch (error) {
    return false;
  }
}
