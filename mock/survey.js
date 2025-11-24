const Mock = require('mockjs')
const getSurveyList = require('./data/getSurveyList')
const Random = Mock.Random
module.exports = [
  {
    url:'/api/survey/:id',// 获取单个问卷信息
    method:'get',
    response(){
      return {
        errno:0,
        data:{
          id: Random.id(),
          title: Random.ctitle()
        } 
        // errno:400,
        // msg:' 用户未登录'
      }
    }
  },
  {
    url:'/api/survey',// 新建问卷
    method:'post',
    response(){
      return {
        errno:0,
        data:{
          id:Random.id() 
        }
      }
    }
  },
  {
    url:'/api/survey',// 获取或查询问卷
    method:'get',
    response(ctx){
      const { url = '',query = {} } = ctx
      const isDeleted = url.indexOf('isDeleted=true') >= 0
      const isStar = url.indexOf('isStar=true') >= 0
      const pageSize = parseInt(query.pageSize)
      const opt = {pageSize,isDeleted,isStar}
      return {
        errno:0,
        data:{
          list:getSurveyList(opt),
          total:100 // 用于前端分页组件处理
        }
      }
    }
  },
  {
    url:'/api/survey', // 批量删除
    method:'delete',
    response(){
      return{
        errno: 0,
      }
    }
  },
  {
    url:'/api/survey/:id', // 更新问卷信息
    method: 'patch',
    response(){
      return{
        errno:0
      }
    }
  }
]