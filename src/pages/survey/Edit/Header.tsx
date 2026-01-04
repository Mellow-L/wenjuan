import React, { useEffect, useState, type ChangeEvent, type FC } from 'react'
import styles from './Header.module.scss'
import { Button, Input, Space } from 'antd'
import { EditOutlined, LeftOutlined, LoadingOutlined} from '@ant-design/icons'
import { useNavigate, useParams } from 'react-router-dom'
import {Typography} from 'antd'
import EditToolBar from './EditToolBar'
import useGetSurveyInfo from '../../../hooks/useGetSurveyInfo'
import { useDispatch } from 'react-redux'
import { changeSurveyTitle } from '../../../store/surveyInfoSlice'
import useGetComponentsInfo from '../../../hooks/useGetComponentsInfo'
import { useDebounceEffect, useKeyPress, useRequest } from 'ahooks'
import { updateSurveyService } from '../../../services/survey'
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
const SaveButton:FC = () => {
  // 需要保存当前 id,surveyInfo和 componentsList
  const {id} = useParams()
  const surveyInfo = useGetSurveyInfo()
  const {componentsList = []} = useGetComponentsInfo()
  const {loading,run:save} = useRequest(async ()=>{
    if(!id)return
    await updateSurveyService(id,{...surveyInfo,componentsList})
  },{
    manual:true 
  })

  useKeyPress(['ctrl.s','meta.s'],(e:KeyboardEvent)=>{
    e.preventDefault() // 禁用浏览器默认保存
    if(!loading)save() 
  })

  useDebounceEffect(
    ()=>{
      save()
    },
    [componentsList,surveyInfo],
    {
      wait:2000,
    }
  )
  return (
		<Button
      onClick={save}
			type="default"
			disabled={loading}
			icon={loading ? <LoadingOutlined /> : null}
		>
			保存
		</Button>
	);
}
const PublishButton:FC = () => {
  return <Button type='primary'>发布</Button>
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
            <SaveButton/>
            <PublishButton/>
          </Space>
        </div>
      </div>
    </div>
  )
}

export default Header