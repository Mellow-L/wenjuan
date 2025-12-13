import { ControlOutlined, SettingOutlined } from '@ant-design/icons'
import { Tabs, type TabsProps } from 'antd'
import React, { type FC } from 'react'
import PropSetting from './PropSetting'

const RightPanel:FC = () => {
  const items:TabsProps['items'] = [
    {
      key:'1',
      label:(<><ControlOutlined /> 组件属性</>),
      children:<PropSetting/>,
    },
    {
      key:'2',
      label:(<><SettingOutlined /> 问卷设置</>),
      children:<div>问卷设置</div>,
    }
  ]
  return (
    <Tabs
      defaultActiveKey='1'
      centered
      items={items}
    />
  )
}

export default RightPanel