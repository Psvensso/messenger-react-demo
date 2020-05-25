import {
  applyMiddleware,
  combineReducers,
  compose,
  createStore,
  Store,
} from "redux";
import thunk from "redux-thunk";
import { messageReducer } from "./messages/messageReducer";

const rootReducers = {
  messages: messageReducer,
};

export type IRootState = {
  [k in keyof typeof rootReducers]: ReturnType<typeof rootReducers[k]>;
};

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      sendTo: "http://localhost:3000",
      actionsBlacklist: ["DNVX_REMOVE_NOTIFICATION_ACTION"],
    })
  : compose;

export const store = createStore(
  combineReducers(rootReducers),
  undefined,
  composeEnhancers(applyMiddleware(thunk))
) as Store<IRootState>;
