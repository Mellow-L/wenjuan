import React, { type FC } from 'react'

import styles from './Canvas.module.scss'
import { Empty, Spin } from 'antd'
import useGetComponentsInfo from '../../../hooks/useGetComponentsInfo'
import getComponentConfigByType from '../../../components/SurveyComponents'
import { changeSelectedId, type ComponentInfoType } from '../../../store/componentsSlice'
import { useDispatch } from 'react-redux'

type PropsType = {
  loading:boolean
}  
function getComponentJSX(componentInfo:ComponentInfoType){
  const {type,props} = componentInfo
  const config = getComponentConfigByType(type)
  if(!config) return null
  const {Component} = config
  return <Component {...props}/>
}
const Canvas:FC<PropsType> = (props:PropsType) => {
  const dispatch = useDispatch()
  const { loading } = props
  const {componentsList,selectedId} = useGetComponentsInfo() // 从 store 中拿
  console.log('componentList, selectedId:',JSON.stringify(componentsList),selectedId);
 
  function handleClick(e:MouseEvent,id:string){
    e.stopPropagation() // 阻止 Canvas 的点击事件冒泡 至 Edit（触发其清除 selectedId）
    console.log('选中组件');
    dispatch(changeSelectedId(id))
  }
  if(loading)return (<div>
    <Spin tip="Loading" size="large">
      <div style={{ minHeight: 100 }} />
    </Spin>
  </div>)

  if(componentsList.length === 0){
    console.log('此问卷没有组件')
    return (<div></div>)
  } 
  return (<div className={styles.canvas}>
    {componentsList.map(c=>{
      console.log('111进入 map');
      
      const {fe_id} = c
      return (
				<div
					key={fe_id}
					className={styles["component-wrapper"]}
					onClick={(e) => handleClick(e,fe_id)}
					style={{ 
            border: fe_id === selectedId ? "solid" : "" ,
            borderColor: fe_id === selectedId ? "#f26ca2ab" : "" ,
          }}
				>
					<div className={styles.component}>{getComponentJSX(c)}</div>
				</div>
			);
    })}
  </div>)
}

export default Canvas