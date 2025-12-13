import React, { type FC } from 'react'
import useGetComponentsInfo from '../../../hooks/useGetComponentsInfo'
import getComponentConfigByType, { type ComponentsPropsType } from '../../../components/SurveyComponents'
import { changeComponentProps, type ComponentInfoType } from '../../../store/componentsSlice'
import { useDispatch } from 'react-redux'

const NoProp:FC = ()=>{
  return ( 
    <div style={{textAlign:'center'}}>
      未选中组件^^
    </div>
  )
}
const LockProp:FC = ()=>{
  return ( 
    <div style={{textAlign:'center'}}>
      组件已锁定{'><'}
    </div>
  )
}
// 根据 state 中的 selectedId 来显示组件的 Prop.tsx
const PropSetting:FC = () => {
  const dispatch = useDispatch()
  const {selectedComponentInfo} = useGetComponentsInfo() 
  if(JSON.stringify(selectedComponentInfo) === "{}")return <NoProp/>
  // 拿 store 中选中组件的 type 和 props
  const {type,props,fe_id,isLocked} = selectedComponentInfo as ComponentInfoType
  if(isLocked)return <LockProp/>
  // 根据 type 找 config
  const config =  getComponentConfigByType(type)
  if(!config)return <NoProp/>
  // 拿 组件属性 JSX
  const {ComponentProp} = config
  // 属性面板更改 同步至 store
  function changeProps(newProps:ComponentsPropsType){
    if(JSON.stringify(selectedComponentInfo) === "{}")return
    console.log(`fe_id ${fe_id} 组件的 newProps ${JSON.stringify(newProps)}`);
    dispatch(changeComponentProps({fe_id,newProps}))
  }
  return <ComponentProp {...props} onChange={changeProps}/>
}

export default PropSetting