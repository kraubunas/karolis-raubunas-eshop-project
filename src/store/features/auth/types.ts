import User from '../../../types/user';

export type AuthState = {
  user: User | null,
  error: string | null,
  loading: boolean,
};

export enum AuthActionType {
  AUTH_SUCCESS = 'AUTH_SUCCESS',
  AUTH_FAILURE = 'AUTH_FAILURE',
  AUTH_LOADING = 'AUTH_LOADING',
  AUTH_LOGOUT = 'AUTH_LOGOUT',
  AUTH_CLEAR_ERROR = 'AUTH_CLEAR_ERROR',
}

export type AuthSuccessAction = {
  type: 'AUTH_SUCCESS',
  payload: {
    user: User,
  }
};

export type AuthFailureAction = {
  type: 'AUTH_FAILURE',
  payload: {
    error: string,
  }
};

export type AuthLoadingAction = {
  type: 'AUTH_LOADING',
};

export type AuthLogoutAction = {
  type: 'AUTH_LOGOUT',
};

export type AuthClearErrorAction = {
  type: 'AUTH_CLEAR_ERROR',
};

export type AuthAction = AuthSuccessAction | AuthFailureAction | AuthLoadingAction | AuthLogoutAction | AuthClearErrorAction;
