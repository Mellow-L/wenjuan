import { useEffect, useState } from "react"
import useGetUserInfo from "./useGetUserInfo"
import { useRequest } from "ahooks"
import { getUserInfoService } from "../services/user"
import { useDispatch } from "react-redux"
import { loginReducer } from "../store/userSlice"

// 获取用户信息。返回加载用户的状态：用于 MainLayout 和 SurveyLayout 的 Outlet 条件渲染
function useLoadUserData(){
  const dispatch = useDispatch()
  const [waitingUserData,setWaitingUserData] = useState(true)
  const {username} = useGetUserInfo() // 1.先从 store 中找
  const {run} = useRequest(getUserInfoService,{ // 2.没有再去拿
    manual:true,
    onSuccess(result){
      const {username,nickname} = result
      dispatch(loginReducer({username,nickname}))
    },
    onFinally(){
      setWaitingUserData(false) 
    }
  })
  useEffect(()=>{
    if(username){
      setWaitingUserData(false) // 不用 加载直接返回
      return
    }else{
      run()
    }
  },[username,run])
  return {waitingUserData}
}

export default useLoadUserData