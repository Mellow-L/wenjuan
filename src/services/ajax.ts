import { message } from "antd";
import axios from "axios";

const myAxios = axios.create({
  timeout:10 * 1000,
})

myAxios.interceptors.response.use(
  response => {
    const res = (response.data || {}) as ResType 
    const {errno, data, msg} = res
    if(errno !== 0){
      if(msg){
        message.error(msg)
      }
      throw new Error(msg)
    }
    return data as any
  }
)

export default myAxios

export type ResType = {
  errno: number,
  data?: ResDataType,
  msg?: string,
}

export type ResDataType = {
  [key:string]:any
}