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
    <button onClick={gotoLogin}>登录</button>
    <button onClick={gotoRegister}>注册</button>
  </>)
}

export default Home