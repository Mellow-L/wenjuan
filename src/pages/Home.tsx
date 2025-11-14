import { Button } from "antd";
import React,{type FC} from "react";
import { useNavigate } from "react-router-dom";
import { LOGIN_PATHNAME, REGISTER_PATHNAME } from "../router";

const Home: FC = () => {
  const nav = useNavigate()
  function gotoLogin(){
    nav(LOGIN_PATHNAME)
  }
  function gotoRegister(){
    nav(REGISTER_PATHNAME)
  }
  return (<>
    <p>Home</p>
    <Button onClick={gotoLogin}>登录</Button>
    <Button onClick={gotoRegister}>注册</Button>
  </>)
}

export default Home