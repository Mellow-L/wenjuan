import React,{type FC} from "react";
import { Outlet } from "react-router-dom";
import useLoadUserData from "../hooks/useLoadUserData";
import { Spin } from "antd";
import useAuthGuard from "../hooks/useAuthGuard";
const SurveyLayout: FC = () => {
  // 加载状态
  const {waitingUserData} = useLoadUserData()
  // 路由守卫
  useAuthGuard(waitingUserData)
  return (<>
    <div>SurveyLayout</div>
    <div style={{ height:'100vh'}}>
      {waitingUserData ? 
      <Spin tip="Loading" size="large">
        <div style={{ minHeight: 100 }} />
      </Spin> : 
      <Outlet/>}
    </div>
  </>)
}

export default SurveyLayout 