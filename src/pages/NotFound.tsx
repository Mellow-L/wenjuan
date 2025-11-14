import React,{type FC} from "react";
import { Button, Result, Space } from 'antd';
import { useNavigate } from "react-router-dom";
import { MANAGE_LIST_PATHNAME } from "../router";
const NotFound: FC = () => {
  const nav = useNavigate()
  return (<>
    <Result
      status="404"
      title="404"
      subTitle="抱歉，您访问的页面不存在"
      extra={
        <Space>
          <Button type="primary" onClick={()=>nav(-1)}>返回</Button>
          <Button type="primary" onClick={()=>nav(MANAGE_LIST_PATHNAME)}>去问卷列表</Button>
        </Space>      
      }
    />
  </>)
}

export default NotFound 