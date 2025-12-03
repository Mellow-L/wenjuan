import React,{useEffect, useState, type FC} from "react";
import {Typography,Space } from 'antd'
import { FormOutlined} from "@ant-design/icons";
import styles from './Logo.module.scss'
import { Link } from "react-router-dom";
import { LOGIN_PATHNAME, MANAGE_LIST_PATHNAME } from "../router";
import useGetUserInfo from "../hooks/useGetUserInfo";

const {Title} = Typography
const Logo : FC = () => {
  const {username} = useGetUserInfo() // 从 store 中拿，不在这里发请求
  const [pathname,setPathname] = useState(LOGIN_PATHNAME) // 默认（非登录）Link导向 登录页
  useEffect(()=>{
    if(username){
      setPathname(MANAGE_LIST_PATHNAME) // 登录状态下Link导向 问卷列表页
    }
  },[username])
  return (<>
    <Link to={pathname} >
      <Space className={styles.container}>
        <Title>
          <FormOutlined />
        </Title>
        <Title>
          问卷调查工具
        </Title>
      </Space>
    </Link>
    
  </>)
}

export default Logo