import { BlockOutlined, CopyOutlined, DeleteOutlined, DownOutlined, EyeInvisibleOutlined, EyeOutlined, LockFilled, RedoOutlined, UndoOutlined, UnlockOutlined, UpOutlined } from '@ant-design/icons'
import { Button, message, Space, Tooltip } from 'antd'
import React, { type FC } from 'react'
import { useDispatch } from 'react-redux'
import { deleteSelectedComponent, toggleComponentDisplay, toggleComponentLock, type ComponentInfoType } from '../../../store/componentsSlice'
import useGetComponentsInfo from '../../../hooks/useGetComponentsInfo'

const EditToolBar:FC = () => {
  const dispatch = useDispatch()
  const {selectedId,selectedComponentInfo} = useGetComponentsInfo()
  const {isHidden = false,isLocked = false} = selectedComponentInfo as ComponentInfoType
  const typeofLock = isLocked? 'primary':'default'
  const titleofLock = isLocked? '解锁':'锁定'
  const titleofDisplay = isHidden? '显示':'隐藏'
  // 删除、然后选中上一个
  function handleDelete(){
    dispatch(deleteSelectedComponent())
  }
  function toggleDisplay(){
    if(selectedId === ''){
      console.log('display 没有选中组件');
      message.error('未选中组件')
    }else{
      dispatch(toggleComponentDisplay({
        fe_id: selectedId, // 工具栏控制 display 的目标是选中组件，左侧栏不同
        isHidden:isHidden
      }))
    }
  }
  function toggleLock(){
    if(selectedId === ''){
      console.log('lock 没有选中组件');
      message.error('未选中组件')
    }else{
      dispatch(toggleComponentLock({
        fe_id: selectedId, // 同理，工具栏控制 lock 的目标是选中组件，左侧栏不同
        isLocked:isLocked
      }))
    }  
  }
  return (
    <Space>
      <Tooltip title="删除">
        <Button shape="circle" icon={<DeleteOutlined />} onClick={handleDelete}/>
      </Tooltip>

      <Tooltip title={titleofDisplay}>
        <Button shape="circle" icon={!isHidden ? <EyeInvisibleOutlined /> : <EyeOutlined /> } onClick={()=>toggleDisplay()}/>
        {/* : */}
      </Tooltip>

      <Tooltip title={titleofLock}>
        <Button shape="circle" type={typeofLock} icon={!isLocked ? <UnlockOutlined /> : <LockFilled />} onClick={toggleLock}/>
      </Tooltip>

      <Tooltip title="复制">
        <Button shape="circle" icon={<CopyOutlined />} />
        {/* 弹窗 */}
      </Tooltip>

      <Tooltip title="粘贴">
        <Button shape="circle" icon={<BlockOutlined />} />
      </Tooltip>

      <Tooltip title="上移">
        <Button shape="circle" icon={<UpOutlined />} />
      </Tooltip>

      <Tooltip title="下移">
        <Button shape="circle" icon={<DownOutlined />} />
      </Tooltip>

      <Tooltip title="撤销">
        <Button shape="circle" icon={<UndoOutlined />} />
      </Tooltip>

      <Tooltip title="重做">
        <Button shape="circle" icon={<RedoOutlined />} />
      </Tooltip>
    </Space> 
  )
}

export default EditToolBar