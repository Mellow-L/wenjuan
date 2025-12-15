import React, { useEffect, type FC } from 'react'
import type { SurveyInfoPropsType } from './interface'
import { Form, Input } from 'antd'
import TextArea from 'antd/es/input/TextArea'

const SurveyInfoProp:FC<SurveyInfoPropsType> = (props:SurveyInfoPropsType) => {
  const {title,description,onChange} = props
  const [form] = Form.useForm()
  useEffect(()=>{
    form.setFieldsValue({
      title,description
    })
  },[title,description,form])
  function handleValuesChange(changedValues:any,allValues:any){
    console.log('changed:',changedValues);
		console.log('all:',allValues);
		if(onChange)onChange(allValues)
  }
  return (
    <Form
      form={form}
      layout='vertical'
      initialValues={{title,description}}
      onValuesChange={handleValuesChange}
    >
      <Form.Item
        label="标题内容"
        name='title'
        rules={[
          {
            required:true,
            message:'请输入……'
          }
        ]}
      >
        <Input/>
      </Form.Item>
      <Form.Item
        label="段落内容"
        name='description'
        rules={[
          {
            required:true,
            message:'请输入……'
          }
        ]}
      >
        <TextArea rows={6}/>
      </Form.Item>
    </Form>
  )
}

export default SurveyInfoProp