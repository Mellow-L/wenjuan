import React, { type FC } from 'react'
import { componentConfigGroups, type ComponentConfigType } from '../../../components/SurveyComponents'
import { Typography } from 'antd'
import styles from './ComponentLib.module.scss'
import { useDispatch } from 'react-redux'
import { addComponent } from '../../../store/componentsSlice'
import { nanoid } from '@reduxjs/toolkit'
const {Title} = Typography

// LeftPanel 中的 组件分组显示
const ComponentLib:FC = () => {
  
  const dispatch = useDispatch()

  function add(c:ComponentConfigType){
    console.log('函数调用：添加组件');
    
    const {type,title,defaultProps} = c
    dispatch(addComponent({
      fe_id: nanoid(),
      type, 
      title,
      props: defaultProps,
      isHidden:false,
      isLocked:false
    }))
  }

  function showComponents(components:Array<ComponentConfigType>){
    console.log('函数调用：组件库显示 group 中组件');
    
    if(components.length === 0){
      console.log('此 group 无 components');
      return null
    }
    // 内部回调返回后 外部还要返回
    return components.map(c => {
      const {title,type,Component,defaultProps} = c

      return (
        <div title={title} key={type} className={styles['component-wrapper']} onClick={()=>add(c)}>
          <div  className={styles.component}>
            <Component {...defaultProps}/>
          </div>
        </div>
      )
    })
  }
  return (
    <>
    {componentConfigGroups.map((g, index) => {
      const { groupId,groupName,components } = g
      return (
				<div key={groupId}>
					<Title level={5} style={{ marginTop: index === 0 ? "0" : "" }}>
						{groupName}
					</Title>
          {showComponents(components ||[])}
				</div>
			);
    })}
    </>
  )
}

export default ComponentLib