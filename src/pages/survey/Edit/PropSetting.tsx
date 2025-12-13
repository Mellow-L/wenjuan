import React, { type FC } from 'react'
import useGetComponentsInfo from '../../../hooks/useGetComponentsInfo'
import getComponentConfigByType from '../../../components/SurveyComponents'
import type { ComponentInfoType } from '../../../store/componentsSlice'

const NoProp:FC = ()=>{
  return ( 
    <div style={{textAlign:'center'}}>
      未选中组件^^
    </div>
  )
}
// 根据 state 中的 selectedId 来显示组件的 Prop.tsx
const PropSetting:FC = () => {
  const {selectedComponentInfo} = useGetComponentsInfo() 
  if(JSON.stringify(selectedComponentInfo) === "{}")return <NoProp/>

  const {type,props} = selectedComponentInfo as ComponentInfoType
  const config =  getComponentConfigByType(type)
  if(!config)return <NoProp/>

  const {ComponentProp} = config
  return <ComponentProp {...props}/>
}

export default PropSetting