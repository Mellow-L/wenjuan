import { useSelector } from "react-redux"
import type { StateType } from "../store"
import type { UserStateType } from "../store/userSlice"

// 从 store 中获取用户信息。 直接用于 Logo、UserInfo（Navbar）
function useGetUserInfo(){
  const userInfo= useSelector<StateType>(state => state.user) as UserStateType
  return userInfo
}

export default useGetUserInfo  