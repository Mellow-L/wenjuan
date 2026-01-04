import React, { useState, type ChangeEvent, type FC } from 'react'
import styles from './Header.module.scss'
import { Button, Input, Space } from 'antd'
import { EditOutlined, LeftOutlined} from '@ant-design/icons'
import { useNavigate } from 'react-router-dom'
import {Typography} from 'antd'
import EditToolBar from './EditToolBar'
import useGetSurveyInfo from '../../../hooks/useGetSurveyInfo'
import { useDispatch } from 'react-redux'
import { changeSurveyTitle } from '../../../store/surveyInfoSlice'
const {Title} = Typography

const TitleElem:FC = () => {
  const {title} = useGetSurveyInfo()
  const [editState,setEditState] = useState(false)
  const dispatch = useDispatch()
  function handleChange(e:ChangeEvent<HTMLInputElement>){
    const newTitle = e.target.value.trim()
    if(!newTitle)return
    dispatch(changeSurveyTitle(newTitle))
  }
  if(editState){
    return (
			<Input
				value={title}
        onChange={handleChange}
				onPressEnter={() => setEditState(false)}
				onBlur={() => setEditState(false)}
			/>
		);
  }
  return <Space>
    <Title level={5}>{title}</Title>
    <Button icon={<EditOutlined/>} type='text'onClick={()=>setEditState(true)}/>
  </Space>
}
const Header:FC = () => {
  const nav = useNavigate()
  return (
    <div className={styles['header-wrapper']}>
      <div className={styles.header}>
        <div className={styles.left}>
          <Space>
            <Button type='link' icon={<LeftOutlined />} onClick={()=>nav(-1)} style={{padding:'0 12px'}}>返回</Button>
            <TitleElem/>
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