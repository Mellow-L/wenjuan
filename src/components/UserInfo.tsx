import React,{type FC} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { LOGIN_PATHNAME } from '../router'
import { UserOutlined } from '@ant-design/icons'
import { Button, message } from 'antd'
import { removeToken } from '../utils/user-token'
import useGetUserInfo from '../hooks/useGetUserInfo'
import { useDispatch } from 'react-redux'
import { logoutReducer } from '../store/userSlice'

const UserInfo: FC = () => {
  const dispatch = useDispatch()
  const {username, nickname} = useGetUserInfo() //只从 store 中拿，不在这里发请求

  const nav = useNavigate()
  function logout(){
    dispatch(logoutReducer()) //  清理用户的 store
    removeToken() // 清理服务端返回的 token
    message.success('退出成功')
    nav(LOGIN_PATHNAME)
  }
  const CurrentUser = (<>
    <span style={{color:'#b58181ff'}}>
      <UserOutlined/>
      {nickname}
    </span>
    <Button type='link' onClick={logout}>退出</Button>
  </>)

  const NoneUser = (
    <Link to={LOGIN_PATHNAME}>登录</Link>
  )
  return (
    <>
      {username? CurrentUser: NoneUser}      
    </>
  )
}

export default UserInfo