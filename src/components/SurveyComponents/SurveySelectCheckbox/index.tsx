import React, { useMemo, type FC } from 'react'
import { SurveySelectCheckboxDefaultProps, type SurveySelectCheckboxPropsType } from './interface'
import { Checkbox, Space, Typography } from 'antd'
const {Paragraph} = Typography
const SurveySelectCheckbox:FC<SurveySelectCheckboxPropsType> = (props:SurveySelectCheckboxPropsType) => {
  const {title,isVertical = false,options = []} = {...SurveySelectCheckboxDefaultProps,...props}
  const initialValue = useMemo(()=>{
    return options.filter(opt=>opt.checked).map(opt=>opt.value)
  },[options])
  return (
    <div>
      <Paragraph strong>{title}</Paragraph>
      <Checkbox.Group defaultValue={initialValue}>
        <Space direction={isVertical? 'vertical':'horizontal'}>
          {options.map(opt => {
            const {value,label} = opt
            return (
              <Checkbox key={value} value={value}>
                {label}
              </Checkbox>
            )
          })}
        </Space>
      </Checkbox.Group>
    </div>
  )
}

export default SurveySelectCheckbox