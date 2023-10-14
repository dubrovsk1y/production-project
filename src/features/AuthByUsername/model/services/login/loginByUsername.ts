import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { User, userActions } from "entities/User";
import { USER_LOCALSTORAGE_KEY } from "shared/const/localstorage";

interface LoginByUsernameArg {
  username: string;
  password: string;
}

export const loginByUsername = createAsyncThunk<User, LoginByUsernameArg, { rejectValue: string }>(
  "login/loginByUsername",
  async (data, thunkAPI) => {
    try {
      const response = await axios.post<User>("http://localhost:8000/login", data);

      if (!response.data) {
        throw new Error();
      }

      localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data));
      thunkAPI.dispatch(userActions.setAuthData(response.data));

      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue("incorrectLoginOrPassword");
    }
  },
);
