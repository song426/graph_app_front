import { combineReducers, configureStore } from "@reduxjs/toolkit";
// combineReducers: 여러 리듀서를 하나로 합쳐주는 함수
// configureStore: 스토어를 생성하는 함수
import apisReduser from "./slices/apiSlices";

const store = configureStore({
  reducer: combineReducers({
    apis: apisReduser, //값은 만드는 이름
  }),
});

export default store;
