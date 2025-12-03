import { useEffect } from "react"
import useGetUserInfo from "./useGetUserInfo"
import { isLoginOrRegister, isRequireUserInfo, LOGIN_PATHNAME, MANAGE_LIST_PATHNAME } from "../router"
import { useLocation, useNavigate } from "react-router-dom"

// 路由授权守卫 用于 MainLayout 和 SurveyLayout
function useAuthGuard(waitingUserData:boolean){
  const {username} = useGetUserInfo()
  const {pathname} = useLocation()
  const nav = useNavigate()
  useEffect(()=>{
    if(waitingUserData)return // 登录状态未知
    if(username){ // 已登录状态下，访问登录页和注册页导向 问卷列表页
      if(isLoginOrRegister(pathname)){
        nav(MANAGE_LIST_PATHNAME)
      }
      return
    }else{ // 未登录状态下，访问需要用户信息的页面导向 登录页
      if(isRequireUserInfo(pathname)){
        nav(LOGIN_PATHNAME)
      }
      return
    }
  },[username,waitingUserData,pathname,nav])
}

export default useAuthGuard