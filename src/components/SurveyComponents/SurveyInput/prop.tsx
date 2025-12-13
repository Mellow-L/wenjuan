import React, { useEffect, type FC } from 'react'
import type { SurveyInputPropsType } from './interface'
import { Form, Input } from 'antd'

const SurveyInputProp:FC<SurveyInputPropsType> = (props:SurveyInputPropsType) => {
  const { title, placeholder, onChange} = props
  const [form] = Form.useForm()
  useEffect(()=>{
    form.setFieldsValue({
      title,
      placeholder,
    })
  },[title,placeholder,form])
	function handleValuesChange(changedValues:any,allValues:any){ 
		// console.log(form.getFieldsValue());
		console.log('changed:',changedValues);
		console.log('all:',allValues);
		if(onChange)onChange(allValues)
	} 
  return (  
		<Form 
			form={form}
			layout="vertical"
			initialValues={{ title, placeholder }}
			onValuesChange={handleValuesChange}
		>
			<Form.Item
				label="输入框标题"
				name="title"
				rules={[
					{
						required: true,
						message: "请输入……",
					},
				]}
			>
				<Input />
			</Form.Item>

			<Form.Item label="Placeholder" name="placeholder">
				<Input />
			</Form.Item>
		</Form>
	); 
}

export default SurveyInputProp 
