import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

export interface IUser {
  isProcessingRequest: boolean;
  userList?: string[];
}
const initialState: IUser = { isProcessingRequest: false };
export const userSlice = createSlice({
  name: 'userList',
  initialState,
  reducers: {
    start: (state) => {
      return {
        ...state,
        isProcessingRequest: true,
      };
    },
    success: (state, action: PayloadAction<any>) => {
      return {
        ...state,
        isProcessingRequest: false,
      };
    },
    error: (state, action: PayloadAction<any>) => {
      return {
        ...state,
        isProcessingRequest: false,
      };
    },
  },
});

export const { start, success, error } = userSlice.actions;
export const userList = (state: RootState) => state.usersList;
export const userReducer = userSlice.reducer;
