import React, { type FC } from 'react'
import styles from './Header.module.scss'
import { Button, Space, Tooltip } from 'antd'
import { BlockOutlined, CopyOutlined, DeleteOutlined, DownOutlined, EyeOutlined, LeftOutlined, RedoOutlined, UndoOutlined, UnlockOutlined, UpOutlined } from '@ant-design/icons'
import { useNavigate } from 'react-router-dom'
import {Typography} from 'antd'
import EditToolBar from './EditToolBar'
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
          <EditToolBar/>
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