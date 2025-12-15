import React, { useEffect, useMemo, type FC } from 'react'
import type { SurveySelectCheckboxPropsType } from './interface'
import { Button, Checkbox, Form, Input, Select, Space } from 'antd';
import { MinusCircleOutlined, PlusCircleOutlined } from '@ant-design/icons';

let itemCounter = 0;
const SurveySelectCheckboxProp:FC<SurveySelectCheckboxPropsType> = (props:SurveySelectCheckboxPropsType) => {
const {title,isVertical,options = [],onChange} = props
  const [form] = Form.useForm()

  useEffect(()=>{
    form.setFieldsValue({
      title,isVertical,options
    })
  },[title,isVertical,options,form])

  function handleValuesChange(changedValues:any,allValues:any){
    console.log('changed:',changedValues);
		console.log('all:',allValues);
		if(onChange)onChange(allValues)
  }

  return (
		<Form
			form={form}
			layout="vertical"
			initialValues={{ title, isVertical, options }}
			onValuesChange={handleValuesChange}
		>
			<Form.Item
				label="多选标题"
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
                const {key,name} = field // key 用于列表渲染  name 用于内容索引
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
                      value: `item_${itemCounter}`, 
                      label: `新增选项 ${itemCounter}`,
                      checked: false,
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
		</Form>
	);
}

export default SurveySelectCheckboxProp