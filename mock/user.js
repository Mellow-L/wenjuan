const Mock = require('mockjs')
const Random = Mock.Random

module.exports = [
  {
    url:'/api/user/info', // 获取用户信息
    method:'get',
    response(){
      return {
        errno:0,
        data:{
          username:Random.title(),
          nickname:Random.cname()
        }
      }
    }
  },
  {
    url:'/api/user/register', // 注册用户
    method:'post',
    response(){
      return {
        errno:0
      }
    }
  },
  {
    url:'/api/user/login', // 登录用户
    method:'post',
    response(){
      return {
        errno:0,
        data:{
          token:Random.word(20)
        }
      }
    }
  }
]