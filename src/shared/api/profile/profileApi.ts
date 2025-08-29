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
    const response = await fetch(`${apiUrl}/profile`, {
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

    const data: ApiResponse<UpdateProfileResponse> = await response.json();

    if (!data.success || !data.data) {
      throw new Error(data.error?.message || 'Ошибка обновления профиля');
    }

    return data.data.user;
  } catch (error) {
    if (error instanceof Error) {
      throw error;
    }
    throw new Error('Произошла неожиданная ошибка при обновлении профиля');
  }
}

// Смена пароля (для будущего использования)
export async function changePassword(
  token: string,
  passwordData: ChangePasswordRequest
): Promise<ChangePasswordResponse> {
  try {
    const apiUrl = await getApiUrl();
    const response = await fetch(`${apiUrl}/profile/change-password`, {
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

    const data: ApiResponse<ChangePasswordResponse> = await response.json();

    if (!data.success || !data.data) {
      throw new Error(data.error?.message || 'Ошибка смены пароля');
    }

    return data.data;
  } catch (error) {
    if (error instanceof Error) {
      throw error;
    }
    throw new Error('Произошла неожиданная ошибка при смене пароля');
  }
}





// Удаление аккаунта
export async function deleteAccount(
  token: string,
  deleteData: DeleteAccountRequest
): Promise<DeleteAccountResponse> {
  try {
    const apiUrl = await getApiUrl();
    const response = await fetch(`${apiUrl}/profile/delete-account`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify(deleteData),
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
