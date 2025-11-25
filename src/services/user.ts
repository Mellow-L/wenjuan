import type { ResDataType } from "./ajax";
import myAxios from "./ajax";

// 获取用户信息
export async function getUserInfoService():Promise<ResDataType>{
  const url = '/api/user/info'
  const data = (await myAxios.get(url)) as ResDataType
  return data
}

// 注册用户
export async function registerService(
  username:string,
  nickname:string,
  password:string
):Promise<ResDataType>{
  const url = '/api/user/register'
  const body = {
    username,
    nickname: nickname || username,
    password,
  }
  const data = (await myAxios.post(url,body)) as ResDataType
  return data
}

// 登录用户
export async function loginService(
  username:string,
  password:string
):Promise<ResDataType>{
  const url = '/api/user/login'
  const body = {
    username,
    password
  }
  const data = (await myAxios.post(url,body)) as ResDataType
  return data
}