import { getApiUrl } from '../base';
import {
  UserProfile,
  UpdateProfileRequest,
  UpdateProfileResponse,
  ChangePasswordRequest,
  ChangePasswordResponse,


  DeleteAccountRequest,
  DeleteAccountResponse,
  OrderHistoryResponse,
  ApiResponse,
} from './types';

// Получение профиля пользователя
export async function getUserProfile(token: string): Promise<UserProfile> {
  try {
    const apiUrl = await getApiUrl();
    const response = await fetch(`${apiUrl}/v1/auth/me`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Ошибка получения профиля');
    }

    const data: UserProfile = await response.json();


    return data;
  } catch (error) {
    if (error instanceof Error) {
      throw error;
    }
    throw new Error('Произошла неожиданная ошибка при получении профиля');
  }
}

// Обновление профиля пользователя
export async function updateUserProfile(
  token: string,
  updateData: UpdateProfileRequest
): Promise<UserProfile> {
  try {
    const apiUrl = await getApiUrl();
    const response = await fetch(`${apiUrl}/v1/auth/profile`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify(updateData),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Ошибка обновления профиля');
    }

    const data: ApiResponse<UpdateProfileResponse> | UserProfile = await response.json();

    // Если сервер возвращает данные напрямую (без обёртки ApiResponse)
    if ('id' in data && 'email' in data) {
      // Это UserProfile напрямую
      return data as UserProfile;
    }

    // Если данные в обёртке ApiResponse
    const apiResponseData = data as ApiResponse<UpdateProfileResponse>;
    if (!apiResponseData.success || !apiResponseData.data) {
      throw new Error(apiResponseData.error?.message || 'Ошибка обновления профиля');
    }

    return apiResponseData.data.user;
  } catch (error) {
    if (error instanceof Error) {
      throw error;
    }
    throw new Error('Произошла неожиданная ошибка при обновлении профиля');
  }
}

// Смена пароля
export async function changePassword(
  token: string,
  passwordData: ChangePasswordRequest
): Promise<ChangePasswordResponse> {
  try {
    const apiUrl = await getApiUrl();
    const response = await fetch(`${apiUrl}/v1/auth/change-password`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify(passwordData),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Ошибка смены пароля');
    }

    const data: ApiResponse<ChangePasswordResponse> | ChangePasswordResponse = await response.json();

    // Если сервер возвращает данные напрямую (без обёртки ApiResponse)
    if ('message' in data && !('success' in data)) {
      // Это ChangePasswordResponse напрямую
      return data as ChangePasswordResponse;
    }

    // Если данные в обёртке ApiResponse
    const apiResponseData = data as ApiResponse<ChangePasswordResponse>;
    if (!apiResponseData.success || !apiResponseData.data) {
      throw new Error(apiResponseData.error?.message || 'Ошибка смены пароля');
    }

    return apiResponseData.data;
  } catch (error) {
    if (error instanceof Error) {
      throw error;
    }
    throw new Error('Произошла неожиданная ошибка при смене пароля');
  }
}


export async function getOrders(token?: string | null) {
  try {
    const apiUrl = await getApiUrl();
    const response = await fetch(`${apiUrl}/v1/orders/my`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    });
    console.log(response);


    const data = await response.json();

    console.log(data);



  } catch (error) {
    if (error instanceof Error) {
      throw error;
    }
    throw new Error('Произошла неожиданная ошибка при получении истории заказов');
  }
}


// Удаление аккаунта
export async function deleteAccount(
  token: string,
): Promise<DeleteAccountResponse> {
  try {
    const apiUrl = await getApiUrl();
    const response = await fetch(`${apiUrl}/v1/auth/me`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Ошибка удаления аккаунта');
    }

    const data: ApiResponse<DeleteAccountResponse> = await response.json();

    if (!data.success || !data.data) {
      throw new Error(data.error?.message || 'Ошибка удаления аккаунта');
    }

    return data.data;
  } catch (error) {
    if (error instanceof Error) {
      throw error;
    }
    throw new Error('Произошла неожиданная ошибка при удалении аккаунта');
  }
}

// Получение истории заказов (заглушка для будущего функционала)
export async function getOrderHistory(
  token: string,
  page: number = 1,
  limit: number = 10
): Promise<OrderHistoryResponse> {
  try {
    const apiUrl = await getApiUrl();
    const response = await fetch(`${apiUrl}/profile/orders?page=${page}&limit=${limit}`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Ошибка получения истории заказов');
    }

    const data: ApiResponse<OrderHistoryResponse> = await response.json();

    if (!data.success || !data.data) {
      throw new Error(data.error?.message || 'Ошибка получения истории заказов');
    }

    return data.data;
  } catch (error) {
    if (error instanceof Error) {
      throw error;
    }
    throw new Error('Произошла неожиданная ошибка при получении истории заказов');
  }
}
