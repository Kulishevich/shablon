import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import {
  loginUser as loginUserApi,
  registerUser as registerUserApi,
  forgotPassword as forgotPasswordApi,
  getUserProfile,
  updateUserProfile as updateUserProfileApi,
  changePassword as changePasswordApi,
  deleteAccount as deleteAccountApi,
} from '../../../api/profile';
import type {
  UserProfile,
  LoginRequest,
  RegisterRequest,
  ForgotPasswordRequest,
  UpdateProfileRequest,
  ChangePasswordRequest,
  DeleteAccountRequest,
} from '../../../api/profile/types';
import { showToast } from '@/shared/ui/toast';



// Типы для состояния аутентификации
export interface AuthState {
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
  token: string | null;
  refreshToken: string | null;
}

// Типы для состояния профиля
export interface ProfileState extends AuthState {
  user: UserProfile | null;
  isProfileLoading: boolean;
  profileError: string | null;
  // Расширяемость для будущих функций
  passwordChangeLoading: boolean;
  deleteAccountLoading: boolean;
  orderHistory: any[]; // Заглушка для будущего функционала
}

// Начальное состояние
export const initialState: ProfileState = {
  isAuthenticated: false,
  isLoading: false,
  error: null,
  token: null,
  refreshToken: null,
  user: null,
  isProfileLoading: false,
  profileError: null,
  passwordChangeLoading: false,
  deleteAccountLoading: false,
  orderHistory: [],
};



// Async thunks с реальными API вызовами
export const loginUser = createAsyncThunk(
  'profile/login',
  async (credentials: LoginRequest, { rejectWithValue }) => {
    try {
      const data = await loginUserApi(credentials);
      return data;
    } catch (error) {
      return rejectWithValue(error instanceof Error ? error.message : 'Ошибка входа');
    }
  }
);

export const registerUser = createAsyncThunk(
  'profile/register',
  async (userData: RegisterRequest, { rejectWithValue }) => {
    try {
      const data = await registerUserApi(userData);

      return data;
    } catch (error) {
      return rejectWithValue(error instanceof Error ? error.message : 'Ошибка регистрации');
    }
  }
);

export const forgotPassword = createAsyncThunk(
  'profile/forgotPassword',
  async (request: ForgotPasswordRequest, { rejectWithValue }) => {
    try {
      const data = await forgotPasswordApi(request);
      return data;
    } catch (error) {
      return rejectWithValue(error instanceof Error ? error.message : 'Ошибка восстановления пароля');
    }
  }
);

export const fetchUserProfile = createAsyncThunk(
  'profile/fetchProfile',
  async (_, { rejectWithValue, getState }) => {
    try {
      const state = getState() as { profile: ProfileState };
      const token = state.profile.token;

      if (!token) {
        throw new Error('Токен не найден');
      }

      const data = await getUserProfile(token);
      return data;
    } catch (error) {
      return rejectWithValue(error instanceof Error ? error.message : 'Ошибка получения профиля');
    }
  }
);

export const updateUserProfile = createAsyncThunk(
  'profile/updateProfile',
  async (updateData: UpdateProfileRequest, { rejectWithValue, getState }) => {
    try {
      const state = getState() as { profile: ProfileState };
      const token = state.profile.token;

      if (!token) {
        throw new Error('Токен не найден');
      }

      const data = await updateUserProfileApi(token, updateData);
      return data;
    } catch (error) {
      return rejectWithValue(error instanceof Error ? error.message : 'Ошибка обновления профиля');
    }
  }
);

export const changePassword = createAsyncThunk(
  'profile/changePassword',
  async (passwordData: ChangePasswordRequest, { rejectWithValue, getState }) => {
    try {
      const state = getState() as { profile: ProfileState };
      const token = state.profile.token;

      if (!token) {
        throw new Error('Токен не найден');
      }

      const data = await changePasswordApi(token, passwordData);
      return data;
    } catch (error) {
      return rejectWithValue(error instanceof Error ? error.message : 'Ошибка смены пароля');
    }
  }
);

export const deleteAccount = createAsyncThunk(
  'profile/deleteAccount',
  async (deleteData: DeleteAccountRequest, { rejectWithValue, getState }) => {
    try {
      const state = getState() as { profile: ProfileState };
      const token = state.profile.token;

      if (!token) {
        throw new Error('Токен не найден');
      }

      const data = await deleteAccountApi(token, deleteData);
      return data;
    } catch (error) {
      return rejectWithValue(error instanceof Error ? error.message : 'Ошибка удаления аккаунта');
    }
  }
);

// Slice
export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    // Гидрация профиля из localStorage
    hydrateProfile: (state, action: PayloadAction<Partial<ProfileState>>) => {
      return { ...state, ...action.payload };
    },

    // Очистка ошибок
    clearError: (state) => {
      state.error = null;
      state.profileError = null;
    },

    // Выход из системы
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
      state.token = null;
      state.refreshToken = null;
      state.error = null;
      state.profileError = null;
      state.orderHistory = [];

      showToast({
        variant: 'success',
        title: 'Вы вышли из системы!',
      });

      // Очищаем localStorage при выходе
      if (typeof window !== 'undefined') {
        localStorage.removeItem('profile_shablon');
      }
    },

    // Установка токена (для гидрации из localStorage)
    setToken: (state, action: PayloadAction<{ token: string; refreshToken?: string }>) => {
      state.token = action.payload.token;
      if (action.payload.refreshToken) {
        state.refreshToken = action.payload.refreshToken;
      }
      state.isAuthenticated = true;
    },

    // Обновление данных пользователя локально
    updateUserData: (state, action: PayloadAction<Partial<UserProfile>>) => {
      if (state.user) {
        state.user = { ...state.user, ...action.payload };
      }
    },

    // Заглушки для будущих функций
    setPasswordChangeLoading: (state, action: PayloadAction<boolean>) => {
      state.passwordChangeLoading = action.payload;
    },

    setDeleteAccountLoading: (state, action: PayloadAction<boolean>) => {
      state.deleteAccountLoading = action.payload;
    },

    setOrderHistory: (state, action: PayloadAction<any[]>) => {
      state.orderHistory = action.payload;
    },
  },
  extraReducers: (builder) => {
    // Login
    builder
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isAuthenticated = true;
        state.token = action.payload.token;
        state.user = action.payload.client;
        state.error = null;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
        state.isAuthenticated = false;
      })

      // Register
      .addCase(registerUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isAuthenticated = true;
        state.token = action.payload.token;
        state.user = action.payload.client;
        state.error = null;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      })

      // Forgot Password
      .addCase(forgotPassword.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(forgotPassword.fulfilled, (state) => {
        state.isLoading = false;
        state.error = null;
      })
      .addCase(forgotPassword.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      })

      // Fetch Profile
      .addCase(fetchUserProfile.pending, (state) => {
        state.isProfileLoading = true;
        state.profileError = null;
      })
      .addCase(fetchUserProfile.fulfilled, (state, action) => {
        state.isProfileLoading = false;
        state.user = action.payload;
        state.profileError = null;
      })
      .addCase(fetchUserProfile.rejected, (state, action) => {
        state.isProfileLoading = false;
        state.profileError = action.payload as string;
      })

      // Update Profile
      .addCase(updateUserProfile.pending, (state) => {
        state.isProfileLoading = true;
        state.profileError = null;
      })
      .addCase(updateUserProfile.fulfilled, (state, action) => {
        state.isProfileLoading = false;
        state.user = action.payload;
        state.profileError = null;
      })
      .addCase(updateUserProfile.rejected, (state, action) => {
        state.isProfileLoading = false;
        state.profileError = action.payload as string;
      })

      // Change Password
      .addCase(changePassword.pending, (state) => {
        state.passwordChangeLoading = true;
        state.error = null;
      })
      .addCase(changePassword.fulfilled, (state) => {
        state.passwordChangeLoading = false;
        state.error = null;
      })
      .addCase(changePassword.rejected, (state, action) => {
        state.passwordChangeLoading = false;
        state.error = action.payload as string;
      })

      // Delete Account
      .addCase(deleteAccount.pending, (state) => {
        state.deleteAccountLoading = true;
        state.error = null;
      })
      .addCase(deleteAccount.fulfilled, (state) => {
        // После успешного удаления аккаунта очищаем все данные
        state.isAuthenticated = false;
        state.user = null;
        state.token = null;
        state.refreshToken = null;
        state.deleteAccountLoading = false;
        state.error = null;
        state.profileError = null;
        state.orderHistory = [];

        // Очищаем localStorage
        if (typeof window !== 'undefined') {
          localStorage.removeItem('profile_shablon');
        }
      })
      .addCase(deleteAccount.rejected, (state, action) => {
        state.deleteAccountLoading = false;
        state.error = action.payload as string;
      });
  },
});

export const {
  hydrateProfile,
  clearError,
  logout,
  setToken,
  updateUserData,
  setPasswordChangeLoading,
  setDeleteAccountLoading,
  setOrderHistory,
} = profileSlice.actions;

export default profileSlice.reducer;
