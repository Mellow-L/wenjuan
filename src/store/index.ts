import { configureStore } from "@reduxjs/toolkit";
import { userSlice, type UserStateType } from "./userSlice";
import { componentsSlice, type ComponentsStateType } from "./componentsSlice";
import { surveyInfoSlice, type surveyInfoStateType } from "./surveyInfoSlice";

export type StateType = {
  user:UserStateType
  surveyInfo:surveyInfoStateType
  components:ComponentsStateType
}
export default configureStore({
  reducer:{
    // 用户信息
    user:userSlice.reducer ,
    // 问卷信息
    surveyInfo:surveyInfoSlice.reducer,
    // 组件列表
    components:componentsSlice.reducer
  }
})