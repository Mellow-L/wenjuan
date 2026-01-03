import { ControlOutlined, SettingOutlined } from '@ant-design/icons'
import { Tabs, type TabsProps } from 'antd'
import React, { type FC } from 'react'
import PropSetting from './PropSetting'
import PageSetting from './PageSetting'
import useGetComponentsInfo from '../../../hooks/useGetComponentsInfo'

const RightPanel:FC = () => {
  // const [activeKey,setActiveKey] = useState('prop')
  const {selectedId} = useGetComponentsInfo()
  // useEffect(()=>{
  //   setActiveKey('prop')
  //   if(selectedId)setActiveKey('prop')
  //   else setActiveKey('setting')
  // },[selectedId])
  const items:TabsProps['items'] = [
    {
      key:'prop',
      label:(<><ControlOutlined /> 组件属性</>),
      children:<PropSetting/>,
    },
    {
      key:'setting',
      label:(<><SettingOutlined /> 问卷设置</>),
      children:<PageSetting/>
    }
  ]
  return (
    <Tabs
      defaultActiveKey='prop'
      // activeKey={activeKey}
      centered
      items={items}
    />
  )
}

export default RightPanel