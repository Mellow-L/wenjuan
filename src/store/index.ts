import { configureStore } from "@reduxjs/toolkit";
import { userSlice, type UserStateType } from "./userSlice";
import { componentsSlice } from "./componentsSlice";

export type StateType = {
  user:UserStateType
}
export default configureStore({
  reducer:{
    // 用户信息
    user:userSlice.reducer ,
    // 问卷信息

    // 组件列表
    components:componentsSlice.reducer
  }
})