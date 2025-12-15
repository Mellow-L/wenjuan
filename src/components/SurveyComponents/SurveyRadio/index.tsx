import React, { type FC } from 'react'
import { SurveySelectRadioDefaultProps, type SurveySelectRadioPropsType } from './interface'
import { Radio, Space, Typography } from 'antd'
const {Paragraph} = Typography

const SurveySelectRadio:FC<SurveySelectRadioPropsType> = (props:SurveySelectRadioPropsType) => {
  const {title,isVertical = false,options = [],value = ''} = {...SurveySelectRadioDefaultProps,...props}
  return (
    <div>
      <Paragraph strong>{title}</Paragraph>
      <Radio.Group value={value}>
        <Space direction={isVertical? 'vertical':'horizontal'}>
          {options.map(opt => {
            const {value,label} = opt
            return (
              <Radio key={value} value={value}>
                {label}
              </Radio>
            )
          })}
        </Space>
      </Radio.Group>
    </div>
  )
}

export default SurveySelectRadio