import React, { useEffect, type FC } from 'react'
import useGetSurveyInfo from '../../../hooks/useGetSurveyInfo'
import { Form, Input } from 'antd'
import { useDispatch } from 'react-redux'
import { resetSurveyInfo } from '../../../store/surveyInfoSlice'
const {TextArea} = Input
const PageSetting:FC = () => {
  const surveyInfo = useGetSurveyInfo()
  const [form] = Form.useForm()
  const dispatch = useDispatch()
  useEffect(()=>{
    form.setFieldsValue(surveyInfo)
  },[surveyInfo,form])
  function handleValuesChange(changedValues:any,allValues:any){ 
		console.log('changed:',changedValues);
		console.log('all:',allValues);
    dispatch(resetSurveyInfo(form.getFieldsValue()))
	} 
  return (
    <Form
      layout='vertical'
      initialValues={surveyInfo}
      onValuesChange={handleValuesChange}
      form={form}
    >
      <Form.Item 
        label="问卷标题"
        name="title"
        rules={[
          {required:true,message:'请输入标题'}
        ]}
      >
        <Input placeholder='请输入标题'/>
      </Form.Item>

      <Form.Item 
        label="问卷描述"
        name="desc"
      >
        <TextArea placeholder='请输入问卷描述'/>
      </Form.Item>

      <Form.Item 
        label="脚本代码"
        name="js"
      >
        <TextArea rows={6} placeholder='请输入 js 代码'/>
      </Form.Item>
      <Form.Item 
        label="样式代码"
        name="css"
      >
        <TextArea rows={6} placeholder='请输入 css 代码'/>
      </Form.Item>
    </Form>
  )
}

export default PageSetting