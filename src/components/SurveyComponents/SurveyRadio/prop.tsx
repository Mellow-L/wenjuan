import React, { useEffect, type FC } from 'react'
import type { SurveySelectRadioPropsType } from './interface'
import { Button, Form, Input, Select, Space } from 'antd'
import { MinusCircleOutlined, PlusCircleOutlined } from '@ant-design/icons'

let itemCounter = 0;
const SurveySelectRadioProp:FC<SurveySelectRadioPropsType> = (props:SurveySelectRadioPropsType) => {
  const {title,isVertical,options,value,onChange} = props
  const [form] = Form.useForm()
  useEffect(()=>{
    form.setFieldsValue({
      title,value,isVertical,options
    })
  },[title,value,isVertical,options,form])
  function handleValuesChange(changedValues:any,allValues:any){
    console.log('changed:',changedValues);
		console.log('all:',allValues);
		if(onChange)onChange(allValues)
  }
  return (
		<Form
			form={form}
			layout="vertical"
			initialValues={{ title, value, isVertical, options }}
			onValuesChange={handleValuesChange}
		>
			<Form.Item
				label="单选标题"
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

			<Form.Item label="选项排列" name="isVertical">
				<Select
					style={{ width: 120 }}
					options={[
						{ value: true, label: "竖向排列" },
						{ value: false, label: "横向排列" },
					]}
				/>
			</Form.Item>

			<Form.Item label="选项内容">
				<Form.List name="options">
					{(fields, { add, remove }) => (
						<>
							{
                fields.map((field)=>{
                const {key,name} = field
                const disabledTag = fields.length <= 2;
                return <Space key={key} style={{display:'flex',marginBottom:'10px'}}>
                  <Form.Item 
                    name={[name,'label']} 
                    rules={[
                      {required:true,message:'请输入选项内容'}
                    ]}
                    noStyle
                  >
                    <Input placeholder='请输入……'/>
                  </Form.Item>
                    {<Button 
                      type='primary'
                      onClick={() => remove(name)}
                      icon={<MinusCircleOutlined />}
                      disabled = {disabledTag}
                    />}
                </Space>
              })
            }

							<Form.Item>
								<Button
									onClick={() => {
                    itemCounter++;
                    add({ 
                      value: `item_${itemCounter}`, // 确保 value 每次都不同
                      label: `新增选项 ${itemCounter}` 
                    });
                  }}
									icon={<PlusCircleOutlined />}
								>
									添加选项
								</Button>
							</Form.Item>
						</>
					)}
				</Form.List>
			</Form.Item>

			<Form.Item label="默认选中" name="value">
				<Select style={{ width: 120 }} options={options} />
			</Form.Item>
		</Form>
	);
}

export default SurveySelectRadioProp