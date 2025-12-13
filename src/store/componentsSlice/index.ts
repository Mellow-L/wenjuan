import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { ComponentsPropsType } from "../../components/SurveyComponents";

export type ComponentInfoType = {
  fe_id:string // 后端 MongoDb生成_id，前端生成 fe_id
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
    },
    // 添加component
    addComponent:(state:ComponentsStateType,action:PayloadAction<ComponentInfoType>)=>{
      const {selectedId,componentsList} = state
      const newComponent = action.payload
      const selectedIndex = componentsList.findIndex(c => c.fe_id === selectedId)
      if(selectedIndex < 0){
        // 没有选中，添加在末尾
        componentsList.push(newComponent)
      }else{
        componentsList.splice(selectedIndex + 1,0,newComponent) // splice新增时 i+1
      }     
      state.selectedId = newComponent.fe_id
      // changeSelectedId(newComponent.fe_id) 
      // return state
    },
    // 修改组件属性
    changeComponentProps:(state:ComponentsStateType,action:PayloadAction< {fe_id: string, newProps:ComponentsPropsType} >)=>{
      const {fe_id, newProps} = action.payload
      const targetComponent = state.componentsList.find(c =>  c.fe_id === fe_id )
      if(targetComponent){
        targetComponent.props = {
          ...targetComponent.props,
          ...newProps
        }
      }
    }
  }
})

export const { resetComponents,changeSelectedId,addComponent,changeComponentProps } = componentsSlice.actions