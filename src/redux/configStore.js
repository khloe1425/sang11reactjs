// store lưu trữ chung các giá trị cần truyền giữa các component
// createStore: sử dụng cho class component
import { combineReducers, createStore } from "redux";

const rootReducer = combineReducers({
    //reducers: các state sẽ được lưu ở đây

})

export const store = createStore(rootReducer)
