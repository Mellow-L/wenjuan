import React,{type FC} from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button, Form, Input, message, Space, Typography, type FormProps } from "antd";
import { useRequest, useTitle } from "ahooks";
import { UserAddOutlined } from "@ant-design/icons";
import styles from '../styles/Common.module.scss'
import { LOGIN_PATHNAME } from "../router";
import { registerService } from "../services/user";
const {Title} = Typography

type FieldType = {
  username?: string;
  nickname?:string;
  password?: string;
  confirmPassword?:string;
};



const Register: FC = () => {
  useTitle('注册') 
  const nav = useNavigate()

  const { loading:registerLoading, run:registerUser} = useRequest(
    async ( values )=>{
      const { username, nickname, password} = values
      const data = await registerService( username, nickname, password)
      return data
    },
    {
      manual: true,
      onSuccess(){
        message.success('注册成功')
        nav(LOGIN_PATHNAME)
      }
    }
  )
  const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
    registerUser(values) // values 包含 Form 提交的值
  };

  const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  
  return (<div className={styles.container}>
    <Space>
      <Title level={1}><UserAddOutlined /></Title>
      <Title level={1}>注册新用户</Title>
    </Space>
    
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      style={{ maxWidth: 600 }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item<FieldType>
        label="用户名"
        name="username"
        rules={[
          { required: true, message: "请输入用户名" },
          { type:'string', min: 8, max:15,message:'用户名长度在 8～15 之间！'},
          { pattern:/^\w+$/,message:'只能包含字母数字下划线'}
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item<FieldType>
        label="昵称"
        name="nickname"
        rules={[
          { required: false, message: "请输入你的昵称" },
          { type:'string', min: 4, max:10,message:'昵称长度在 4～10 之间！'},
          { pattern:/^\w+$/,message:'只能包含字母数字下划线'}
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item<FieldType>
        label="密码"
        name="password"
        rules={[
          { required: true, message: '请输入密码' },
          { type:'string',min:8,max:15,message:'密码长度在 8～15 之间！'},
          { pattern:/^\w+$/,message:'只能包含字母数字下划线'}
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item<FieldType>
        label="确认密码 "
        name="confirmPassword"
        dependencies={['password']}
        rules={[
          { required: true, message:'请再次输入密码'},
          ({getFieldValue})=>({
            validator(_,value){
              if(!value || value === getFieldValue('password')){
                return Promise.resolve()
              }else{
                return Promise.reject(new Error('前后密码不一致'))
              }
            }
          })
        ]}
       >
        <Input.Password/>
      </Form.Item> 

      <Form.Item label={null}>
        <Space>
          <Button type="primary" htmlType="submit" disabled={registerLoading}>
            提交注册
          </Button>
          <Link to={LOGIN_PATHNAME}>已有账号？前去登录</Link>
        </Space> 
      </Form.Item>
    </Form>
  </div>)
}

export default Register