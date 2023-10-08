import { ReducersMapObject, configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "entities/Counter";
import { userReducer } from "entities/User";
import { StateSchema } from "./StateSchema";

export const createReduxStore = (initialState?: StateSchema) => {
  const rootReduser: ReducersMapObject<StateSchema> = {
    counter: counterReducer,
    user: userReducer,
  };

  return configureStore<StateSchema>({
    reducer: rootReduser,
    devTools: __IS_DEV__,
    preloadedState: initialState,
  });
};
