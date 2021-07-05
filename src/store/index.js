import { combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import moviesReducer from "../reducers/moviesReducer";
import pagesReducer from "../reducers/pagesReducer";

const rootReducer = combineReducers({
  moviesReducer,
  pagesReducer,
});

const store = createStore(rootReducer, composeWithDevTools());

export default store;
