const fs = require('fs');
let code = fs.readFileSync('/Users/mellow/Desktop/wenjuan/wenjuan-fe/src/pages/Login.tsx', 'utf-8');

code = code.replace(
  `import { loginService } from "../services/user";`,
  `import { loginService, getUserInfoService } from "../services/user";\nimport { useDispatch } from "react-redux";\nimport { loginReducer } from "../store/userSlice";`
);

code = code.replace(
  `const nav = useNavigate()`,
  `const nav = useNavigate();\n\tconst dispatch = useDispatch();`
);

code = code.replace(
`			onSuccess(result){
				const { token = ''} = result
				// JWT
				setToken(token)
				message.success('登录成功')
				nav(MANAGE_LIST_PATHNAME)
			}`,
`			async onSuccess(result){
				const { token = ''} = result
				// JWT
				setToken(token)
				const userInfo = await getUserInfoService();
				dispatch(loginReducer({username: userInfo.username, nickname: userInfo.nickname}));
				message.success('登录成功')
				nav(MANAGE_LIST_PATHNAME)
			}`
);

fs.writeFileSync('/Users/mellow/Desktop/wenjuan/wenjuan-fe/src/pages/Login.tsx', code);
