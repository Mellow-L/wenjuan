import React,{type FC} from "react";
import { useNavigate,Link } from "react-router-dom";
const Register: FC = () => {
  const nav = useNavigate()
  return (<>
    <p>Register</p>
    <button onClick={()=>nav}>返回</button>
    <Link to="/register">注册</Link>
  </>)
}

export default Register