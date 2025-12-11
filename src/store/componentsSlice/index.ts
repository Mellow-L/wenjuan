import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { ComponentsPropsType } from "../../components/SurveyComponents";

export type ComponentInfoType = {
  fe_id:string // 后端返回给前端列表渲染用
  type:string // 组件类型
  title:string //组件标题
  props:ComponentsPropsType // 组件内部 props
}
// 这个 slice 的 state type
export type ComponentsStateType = {
  componentsList: Array<ComponentInfoType>
}
const INIT_STATE: ComponentsStateType = {
  componentsList:[]
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