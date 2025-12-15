import React, { useEffect, type FC } from 'react'
import type { SurveyParagraphPropsType } from './interface'
import { Checkbox, Form } from 'antd'
import TextArea from 'antd/es/input/TextArea'

const SurveyParagraphProp:FC<SurveyParagraphPropsType> = (props:SurveyParagraphPropsType) => {
  const {text = '',isCenter = false,onChange} = props
  const [form] = Form.useForm()
  useEffect(()=>{
    form.setFieldsValue({
      text,isCenter
    })
  },[text,isCenter,form])
  function handleValuesChange(changedValues:any,allValues:any){
    console.log('changed:',changedValues);
		console.log('all:',allValues);
		if(onChange)onChange(allValues)
  }
  return (
    <Form
      form={form}
      layout='vertical'
      initialValues={{text,isCenter}}
      onValuesChange={handleValuesChange}
    >
      <Form.Item
        label="段落内容"
        name='text'
        rules={[
          {
            required:true,
            message:'请输入……'
          }
        ]}
      >
        <TextArea rows={6}/>
      </Form.Item>
      <Form.Item
        label="是否居中"
        name='isCenter'
        valuePropName='checked'
      >
        <Checkbox>居中对齐</Checkbox>
      </Form.Item>
    </Form>
  )
}

export default SurveyParagraphProp