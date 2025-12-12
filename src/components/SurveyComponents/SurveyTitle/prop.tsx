import React, { useEffect, type FC } from 'react'
import type { SurveyTitlePropsType } from './interface'
import { Checkbox, Form, Input, Select } from 'antd'

const SurveyTitleProp:FC<SurveyTitlePropsType> = (props:SurveyTitlePropsType) => {
  const {text,level,isCenter} = props
  const [form] = Form.useForm()
  useEffect(()=>{
    form.setFieldsValue({
      text,level,isCenter
    })
  },[text,level,isCenter,form])
  return (
		<Form layout="vertical" initialValues={{ text,level,isCenter }}>

			<Form.Item
				label="标题内容"
				name="text"
				rules={[
					{
						required: true,
						message: "请输入……",
					},
				]}
			>
				<Input />
			</Form.Item>

      <Form.Item
				label="标题级别"
				name="level"
			>
				<Select
          // defaultValue="lucy"
          style={{ width: 120 }}
          // onChange={()=>{}}
          options={[
            { value: 1, label: '一级标题' },
            { value: 2, label: '二级标题' },
            { value: 3, label: '三级标题' },
            { value: 4, label: '四级标题' },
            { value: 5, label: '五级标题' },
          ]}
        />
			</Form.Item>

			<Form.Item
				label="是否居中"
				name="isCenter"
        valuePropName='checked'
			>
				<Checkbox>居中</Checkbox>
			</Form.Item> 
		</Form>
	); 
}

export default SurveyTitleProp