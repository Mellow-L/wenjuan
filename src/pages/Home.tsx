import { Button } from "antd";
import React,{type FC} from "react";
import { useNavigate } from "react-router-dom";

const Home: FC = () => {
  const nav = useNavigate()
  function gotoLogin(){
    nav('/login')
  }
  function gotoRegister(){
    nav('/register')
  }
  return (<>
    <p>Home</p>
    <Button onClick={gotoLogin}>登录</Button>
    <Button onClick={gotoRegister}>注册</Button>
  </>)
}

export default Home