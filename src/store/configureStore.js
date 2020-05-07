import { createStore, combineReducers, applyMiddleware } from "redux";
import profilesReducer from "../reducers/profilesReducer";
import thunk from "redux-thunk";
const configureStore = () => {
  const store = createStore(
    combineReducers({
      profiles: profilesReducer,
    }),
    applyMiddleware(thunk)
  );
  return store;
};
export default configureStore;
