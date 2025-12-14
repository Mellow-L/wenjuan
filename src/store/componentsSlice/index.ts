import { createSlice, nanoid, type PayloadAction } from "@reduxjs/toolkit";
import type { ComponentsPropsType } from "../../components/SurveyComponents";
import { getNextSelectedId } from "./utils";
import cloneDeep from 'lodash.clonedeep'
export type ComponentInfoType = {
  fe_id:string // 后端 MongoDb生成_id，前端生成 fe_id
  type:string // 组件类型  
  title:string //组件标题
  props:ComponentsPropsType // 组件内部 props
  isHidden:boolean // 组件是否被隐藏
  isLocked:boolean // 组件是否被锁定
}

// 这个 slice 的 state type
export type ComponentsStateType = {
  selectedId:string // 不是后端的返回
  componentsList: Array<ComponentInfoType>
  copiedComponent: ComponentInfoType | null
}

const INIT_STATE: ComponentsStateType = {
  selectedId:'',
  componentsList:[],
  copiedComponent: null
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
      const newComponent = {
        ... action.payload,
        fe_id:nanoid()
      } 
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
    // 修改选中组件属性
    changeComponentProps:(state:ComponentsStateType,action:PayloadAction< {fe_id: string, newProps:ComponentsPropsType} >)=>{
      const {fe_id, newProps} = action.payload
      const targetComponent = state.componentsList.find(c =>  c.fe_id === fe_id )
      if(targetComponent){
        targetComponent.props = {
          ...targetComponent.props,
          ...newProps
        }
      }
    },
    // 删除选中组件
    deleteSelectedComponent:(state:ComponentsStateType)=>{
      const index = state.componentsList.findIndex(c => c.fe_id === state.selectedId)
      state.selectedId = getNextSelectedId(state.selectedId,state.componentsList)
      state.componentsList.splice(index,1)
    },
    // 隐藏 or 显示组件 
    toggleComponentDisplay:(
      state:ComponentsStateType,
      action:PayloadAction<{fe_id:string,isHidden:boolean}>
    )=>{
      const {fe_id,isHidden} = action.payload
      const index = state.componentsList.findIndex(c => c.fe_id === fe_id)
      state.selectedId = getNextSelectedId(fe_id,state.componentsList)
      const targetComponent = state.componentsList[index] 
      targetComponent.isHidden = !isHidden
    },
    // 锁定 or 解锁组件
    toggleComponentLock:(
      state:ComponentsStateType,
      action:PayloadAction<{fe_id:string,isLocked:boolean}>
    )=>{
      const {fe_id,isLocked} = action.payload
      const index = state.componentsList.findIndex(c => c.fe_id === fe_id)
      const targetComponent = state.componentsList[index]
      targetComponent.isLocked = !isLocked
    },
    // copy
    copyComponentInfo:(state:ComponentsStateType)=>{
      const {selectedId,componentsList} = state
      const targetComponent = componentsList.find(c => c.fe_id === selectedId)
      if(!targetComponent)return 
      // state.copiedComponent = JSON.parse(JSON.stringify(targetComponent))
      // state.copiedComponent = structuredClone(targetComponent)
      state.copiedComponent = cloneDeep(targetComponent)
    },
    // paste
    pasteComponentInfo:(state:ComponentsStateType)=>{
      const {selectedId,componentsList,copiedComponent} = state
      if(copiedComponent === null)return
      const newComponent = {
        ... copiedComponent,
        fe_id:nanoid()
      } 
      const selectedIndex = componentsList.findIndex(c => c.fe_id === selectedId)
      if(selectedIndex < 0){
        componentsList.push(newComponent)
      }else{
        componentsList.splice(selectedIndex + 1,0,newComponent)
      }     
      state.selectedId = newComponent.fe_id
    },
    // 选中上一个
    selectPrevComponent:(state:ComponentsStateType)=>{
      const selectedIndex = state.componentsList.findIndex(c => c.fe_id === state.selectedId)
      if(selectedIndex <= 0){
        return
      }else{
        state.selectedId = state.componentsList[selectedIndex - 1].fe_id
      }
    },
    // 选中下一个
    selectFollowingComponent:(state:ComponentsStateType)=>{
      const selectedIndex = state.componentsList.findIndex(c => c.fe_id === state.selectedId)
      if(selectedIndex < 0){
        return
      }else if(selectedIndex === state.componentsList.length - 1){
        return
      }else{
        state.selectedId = state.componentsList[selectedIndex + 1].fe_id
      }
    },
  }
})

export const {
	resetComponents,
	changeSelectedId,
	addComponent,
	changeComponentProps,
	deleteSelectedComponent,
  toggleComponentDisplay,
  toggleComponentLock,
  copyComponentInfo,
  pasteComponentInfo,
  selectPrevComponent,
  selectFollowingComponent
} = componentsSlice.actions;