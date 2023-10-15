import { createAsyncThunk } from "@reduxjs/toolkit";
import { User, userActions } from "entities/User";
import { USER_LOCALSTORAGE_KEY } from "shared/const/localstorage";
import { ThunkConfig } from "app/providers/StoreProvider";

interface LoginByUsernameArg {
  username: string;
  password: string;
}

export const loginByUsername = createAsyncThunk<User, LoginByUsernameArg, ThunkConfig<string>>(
  "login/loginByUsername",
  async (data, thunkAPI) => {
    const { dispatch, rejectWithValue, extra } = thunkAPI;
    const { api, navigate } = extra;

    try {
      const response = await api.post<User>("/login", data);

      if (!response.data) {
        throw new Error();
      }

      localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data));
      dispatch(userActions.setAuthData(response.data));
      navigate("/about");

      return response.data;
    } catch (e) {
      return rejectWithValue("incorrectLoginOrPassword");
    }
  },
);
