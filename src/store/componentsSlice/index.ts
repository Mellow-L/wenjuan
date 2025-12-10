import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { ComponentsPropsType } from "../../components/SurveyComponents";

export type ComponentInfoType = {
  fe_id:string // TODO：
  type:string // 组件类型
  title:string //组件标题
  props:ComponentsPropsType // 组件内部 props
}
// 这个 slice 的 state type
export type ComponentsStateType = {
  componentList: Array<ComponentInfoType>
}
const INIT_STATE: ComponentsStateType = {
  componentList:[]
}
export const componentsSlice = createSlice({
  name:'components', 
  initialState: INIT_STATE,
  reducers:{
    // 重置所有组件（设置 state 为 payload）
    resetComponents:(state: ComponentsStateType, action: PayloadAction<ComponentsStateType>)=>{
      return action.payload
    } 
  }
})

export const { resetComponents } = componentsSlice.actions