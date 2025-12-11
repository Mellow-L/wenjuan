import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { ComponentsPropsType } from "../../components/SurveyComponents";

export type ComponentInfoType = {
  fe_id:string // 后端返回给前端 列表渲染用,也用于选中样式的标识
  type:string // 组件类型
  title:string //组件标题
  props:ComponentsPropsType // 组件内部 props
}
// 这个 slice 的 state type
export type ComponentsStateType = {
  selectedId:string // 不是后端的返回
  componentsList: Array<ComponentInfoType>
}
const INIT_STATE: ComponentsStateType = {
  selectedId:'',
  componentsList:[]
}
export const componentsSlice = createSlice({
  name:'components', 
  initialState: INIT_STATE,
  reducers:{
    // 重置所有组件（设置 state 为 payload）
    resetComponents:(state: ComponentsStateType, action: PayloadAction<ComponentsStateType>)=>{
      return action.payload
    } ,
    // 表示选中状态：修改 selectedId
    changeSelectedId:(state:ComponentsStateType,action:PayloadAction<string>)=>{
      const selectedId = action.payload
      return {
        ...state,
        selectedId
      }
    }
  }
})

export const { resetComponents,changeSelectedId } = componentsSlice.actions