import React,{type FC} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { LOGIN_PATHNAME } from '../router'
import { useRequest } from 'ahooks'
import { getUserInfoService } from '../services/user'
import { UserOutlined } from '@ant-design/icons'
import { Button, message } from 'antd'
import { removeToken } from '../utils/user-token'

const UserInfo: FC = () => {
  // 自 动的 useRequest
  const {data} = useRequest(getUserInfoService)
  const { username, nickname } = data || {}
  const nav = useNavigate()
  function logout(){
    removeToken()
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
      // 根据获取的用户信息来显示
      {username? CurrentUser: NoneUser}      
    </>
  )
}

export default UserInfo