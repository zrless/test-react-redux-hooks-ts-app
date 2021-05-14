import { createStore, combineReducers, applyMiddleware } from "redux";
//ReduxThunk 处理异步操作
import ReduxThunk from "redux-thunk";
import homeReducer from "../reducers/home";
import homeState from "../state/home";
const allReducers = combineReducers({
  home: homeReducer,
});
const allStates: any = {
  home: homeState,
};
/**
 * 创建store
 *
 * reducers -> methods
 *
 * state
 *
 * applyMiddleware中间件
 * ReduxThunk处理异步程序
 */
const store = createStore(
  allReducers,
  allStates,
  applyMiddleware(ReduxThunk)
);
export default store;
