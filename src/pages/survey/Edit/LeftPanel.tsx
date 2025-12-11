import { BuildOutlined, ProfileOutlined } from '@ant-design/icons'
import { Tabs, type TabsProps } from 'antd'
import React, { type FC } from 'react'
import ComponentLib from './ComponentLib'

const LeftPanel:FC = () => {
  const items:TabsProps['items'] = [
    {
      key:'1',
      label:(<><BuildOutlined /> 组件库</>),
      children:<ComponentLib />,
    },
    {
      key:'2',
      label:(<><ProfileOutlined /> 图层</>),
      children:<div>显示图层</div>,
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

export default LeftPanel