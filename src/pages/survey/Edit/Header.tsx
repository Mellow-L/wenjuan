import React, { type FC } from 'react'
import styles from './Header.module.scss'
import { Button, Space, Tooltip } from 'antd'
import { BlockOutlined, CopyOutlined, DeleteOutlined, DownOutlined, EyeOutlined, LeftOutlined, RedoOutlined, UndoOutlined, UnlockOutlined, UpOutlined } from '@ant-design/icons'
import { useNavigate } from 'react-router-dom'
import {Typography} from 'antd'
const {Title} = Typography
const Header:FC = () => {
  const nav = useNavigate()
  return (
    <div className={styles['header-wrapper']}>
      <div className={styles.header}>
        <div className={styles.left}>
          <Space>
            <Button type='link' icon={<LeftOutlined />} onClick={()=>nav(-1)} style={{padding:'0 12px'}}>返回</Button>
            <Title level={5}>问卷标题</Title>
          </Space>
        </div>
        <div className={styles.main}>
          <Space>
            <Tooltip title="删除">
              <Button shape="circle" icon={<DeleteOutlined />} />
            </Tooltip>

            <Tooltip title="隐藏/显示">
              <Button shape="circle" icon={<EyeOutlined />} />
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
        </div>
        <div className={styles.right}>
          <Space style={{padding:'0 12px'}}>
            <Button type='default'>保存</Button>
            <Button type='primary'>发布</Button>
          </Space>
        </div>
      </div>
    </div>
  )
}

export default Header