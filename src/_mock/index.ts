import Mock from 'mockjs'

Mock.mock('/api/test','get',()=>{
  return {
    error:0,
    data:{
      name:`现在的时间是${Date.now()}`
    }
  }
})