import { BlockOutlined, CopyOutlined, DeleteOutlined, DownOutlined, EyeOutlined, RedoOutlined, UndoOutlined, UnlockOutlined, UpOutlined } from '@ant-design/icons'
import { Button, message, Space, Tooltip } from 'antd'
import React, { type FC } from 'react'
import { useDispatch } from 'react-redux'
import { deleteSelectedComponent, toggleComponentDisplay, type ComponentInfoType } from '../../../store/componentsSlice'
import useGetComponentsInfo from '../../../hooks/useGetComponentsInfo'

const EditToolBar:FC = () => {
  const dispatch = useDispatch()
  const {selectedId,selectedComponentInfo} = useGetComponentsInfo()
  // 删除、然后选中上一个
  function handleDelete(){
    dispatch(deleteSelectedComponent())
  }
  function toggleDisplay(){
    if(selectedId === ''){
      console.log('没有选中组件');
      message.error('未选中组件')
    }else{
      const {isHidden} = selectedComponentInfo as ComponentInfoType
      dispatch(toggleComponentDisplay({
        fe_id: selectedId, // 工具栏控制 display 的目标是选中组件，左侧栏不同
        isHidden:isHidden
      }))
    }
  }
  return (
    <Space>
      <Tooltip title="删除">
        <Button shape="circle" icon={<DeleteOutlined />} onClick={handleDelete}/>
      </Tooltip>

      <Tooltip title="隐藏/显示">
        <Button shape="circle" icon={<EyeOutlined />} onClick={()=>toggleDisplay()}/>
        {/* :<EyeInvisibleOutlined /> */}
      </Tooltip>

      <Tooltip title="锁定/解锁">
        <Button shape="circle" icon={<UnlockOutlined />} />
        {/* <LockFilled />  锁定时要填充的 */}
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