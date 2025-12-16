import React, { useState, type ChangeEvent, type FC } from 'react'
import useGetComponentsInfo from '../../../hooks/useGetComponentsInfo'
import { useDispatch } from 'react-redux'
import styles from './Layer.module.scss'
import classNames from 'classnames'
import { Button, Input, message, Space } from 'antd'
import { changeComponentTitle, changeSelectedId, toggleComponentDisplay, toggleComponentLock } from '../../../store/componentsSlice'
import { EyeInvisibleOutlined, EyeOutlined, LockFilled, UnlockOutlined } from '@ant-design/icons'
const Layer:FC = () => {
  const {componentsList,selectedId} = useGetComponentsInfo()
  const dispatch = useDispatch()
  // 记录正在修改标题的组件
  const [changingTitleId,setChangingTitleId] = useState('')

  function handleTitleClick(fe_id:string){
    const cur = componentsList.find(c => c.fe_id === fe_id)
    if(cur && cur.isHidden){
      message.info('组件已隐藏 无法选中')
      return
    }
    if(fe_id !== selectedId){
      // 第一遍选中
      dispatch(changeSelectedId(fe_id))
      setChangingTitleId('')
    }else{
      // 第二遍 change
      setChangingTitleId(fe_id)
    }
  }
  
  // 修改标题
  function changeTitle(event: ChangeEvent<HTMLInputElement>) {
    const newTitle = event.target.value.trim()
    if (!newTitle) return 
    if (!selectedId) return
    dispatch(changeComponentTitle({ fe_id: selectedId, title: newTitle }))
  }
  return (
    <>
      {componentsList.map(c=>{
        const {fe_id,title,isHidden,isLocked} = c
        const titleDefaultClassName = styles.title
        const selectedClassName= styles.selected
        const titleClassName = classNames({
          [titleDefaultClassName]:true,
          [selectedClassName]:fe_id === selectedId
        })
        const typeofLock = isLocked? 'primary':'default'
        function toggleDisplay(){
          dispatch(toggleComponentDisplay({
            fe_id,
            isHidden:isHidden
          }))
        }
        function toggleLock(){
          dispatch(toggleComponentLock({
            fe_id,
            isLocked:isLocked
          }))
        }
        return (
					<div key={fe_id} className={styles.wrapper}>
						<div
							className={titleClassName}
							onClick={() => handleTitleClick(fe_id)}
						>
							{changingTitleId === fe_id ? (
								<Input
									value={title}
                  onChange={changeTitle}
									onPressEnter={() => setChangingTitleId("")}
									onBlur={() => setChangingTitleId("")}
								/>
							) : (
								title
							)}
						</div>
						<div className={styles.handler}>
							<Space direction="horizontal">
								<Button
									shape="circle"
									icon={!isHidden ? <EyeInvisibleOutlined /> : <EyeOutlined />}
									onClick={() => toggleDisplay()}
								/>
								<Button
									shape="circle"
									type={typeofLock}
									icon={!isLocked ? <UnlockOutlined /> : <LockFilled />}
									onClick={toggleLock}
								/>
							</Space>
						</div>
					</div>
				);
      })}
    </>
  )
}
 
export default Layer