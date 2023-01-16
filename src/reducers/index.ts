import { combineReducers } from "redux";
import {
  form,
  auth,
  fields,
  list,
  notifications,
  modal,
  router,
  screen,
} from "@steroidsjs/core/reducers";
import currencies from "./currencies";

const projectReducers = combineReducers({
  currencies,
});

export default (asyncReducers) =>
  combineReducers({
    form,
    auth,
    fields,
    list,
    notifications,
    modal,
    screen,
    currencies,
    ...asyncReducers,
    router: (state, action) =>
      router(
        asyncReducers.router ? asyncReducers.router(state, action) : {},
        action
      ),
  });

export type RootState = ReturnType<typeof projectReducers>;
