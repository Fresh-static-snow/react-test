import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { positionAPI } from "../services/PositionsService";
import { userAPI } from "../services/UserService";

const rootReducer = combineReducers({
  [userAPI.reducerPath]: userAPI.reducer,
  [positionAPI.reducerPath]: positionAPI.reducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware()
        .concat(userAPI.middleware)
        .concat(positionAPI.middleware),
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
