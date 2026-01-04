import React, { useState, type ChangeEvent, type FC } from 'react'
import useGetComponentsInfo from '../../../hooks/useGetComponentsInfo'
import { useDispatch } from 'react-redux'
import styles from './Layer.module.scss'
import classNames from 'classnames'
import { Button, Input, message, Space } from 'antd'
import { changeComponentTitle, changeSelectedId, moveComponent, toggleComponentDisplay, toggleComponentLock } from '../../../store/componentsSlice'
import { EyeInvisibleOutlined, EyeOutlined, LockFilled, UnlockOutlined } from '@ant-design/icons'
import SortableContainer from '../../../components/DragSortable/SortableContainer'
import SortableItem from '../../../components/DragSortable/SortableItem'
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
  const componentsListWithId = componentsList.map(c=>{
    return {...c,id:c.fe_id} // container的 items 每一项都需要一个 id
  })
  function handleDragEnd(oldIndex:number,newIndex:number){
    // console.log('old and new index',oldIndex,newIndex);
    dispatch(moveComponent({oldIndex,newIndex}))
  }
  return (
    <SortableContainer items={componentsListWithId} onDragEnd={handleDragEnd}>
      {componentsList.map(c=>{
        const {fe_id,title,isHidden,isLocked} = c
        const titleDefaultClassName = styles.title
        const selectedClassName= styles.selected
        const titleClassName = classNames({
          [titleDefaultClassName]:true,
          [selectedClassName]:fe_id === selectedId
        })
        const typeofLock = isLocked? 'primary':'default'
        const typeofHidden = isHidden? 'primary':'default'
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
          <SortableItem key={fe_id} id={fe_id}>
            <div className={styles.wrapper}>
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
                    type={typeofHidden}
                    icon={!isHidden ?  <EyeOutlined />: <EyeInvisibleOutlined />}
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
          </SortableItem>	
        );
      })}
    </SortableContainer>    
  )
}
 
export default Layer