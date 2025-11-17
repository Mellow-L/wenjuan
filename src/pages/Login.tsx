import { useTitle } from "ahooks";
import React, { useEffect, type FC } from "react";
import { Link } from "react-router-dom";
import {
	Button,
	Checkbox,
	Form,
	Input,
	Space,
	Typography,
	type FormProps,
} from "antd";
import { UserOutlined } from "@ant-design/icons";
import styles from "../styles/Common.module.scss";
import { REGISTER_PATHNAME } from "../router";
const { Title } = Typography;

const USERNAME_KEY = "USERNAME";
const PASSWORD_KEY = "PASSWORD";

type FieldType = {
	username: string;
	password: string;
	remember: boolean;
};

function storeUser(username: string, password: string) {
	localStorage.setItem(USERNAME_KEY, username);
	localStorage.setItem(PASSWORD_KEY, password);
}

function clearStoredUser() {
	localStorage.removeItem(USERNAME_KEY);
	localStorage.removeItem(PASSWORD_KEY);
}

function getUser() {
	return {
		username: localStorage.getItem(USERNAME_KEY),
		password: localStorage.getItem(PASSWORD_KEY),
	};
}

const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
	console.log("Success:", values);
	if (values.remember) {
		console.log("记住账号密码");
		storeUser(values.username, values.password);
	} else {
		clearStoredUser();
	}
};

const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (errorInfo) => {
	console.log("Failed:", errorInfo);
};

const Login: FC = () => {
	const [form] = Form.useForm();
	useEffect(() => {
		const storedInfo = getUser();
		form.setFieldsValue(storedInfo);
	});
	useTitle("登录");

	return (
		<div className={styles.container}>
			<Space>
				<Title level={1}>
					<UserOutlined />
				</Title>
				<Title level={1}>登录</Title>
			</Space>
			<Form
				name="basic"
				labelCol={{ span: 8 }}
				wrapperCol={{ span: 16 }}
				style={{ maxWidth: 600 }}
				initialValues={{ remember: false }}
				onFinish={onFinish}
				onFinishFailed={onFinishFailed}
				autoComplete="off"
				form={form}
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
					label="密码"
					name="password"
					rules={[{ required: true, message: "请输入密码" }]}
				>
					<Input.Password />
				</Form.Item>

				<Form.Item<FieldType>
					name="remember"
					valuePropName="checked"
					label={null}
				>
					<Checkbox>记住密码</Checkbox>
				</Form.Item>

				<Form.Item label={null}>
					<Space>
						<Button type="primary" htmlType="submit">
							提交登录
						</Button>
						<Link to={REGISTER_PATHNAME}>没有账号？前去注册</Link>
					</Space>
				</Form.Item>
			</Form>
		</div>
	);
};

export default Login;
