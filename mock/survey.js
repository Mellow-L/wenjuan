const Mock = require('mockjs')
const getSurveyList = require('./data/getSurveyList')
const Random = Mock.Random
module.exports = [
  {
    url:'/api/survey/:id',// 获取某单份问卷信息
    method:'get',
    response(){
      return {
        errno:0,
        data:{
          id: Random.id(),
          title: Random.ctitle(),
          componentsList:[
            {
              fe_id:Random.id(), // 组件唯一标识 用作前端的列表渲染
              type:'SurveyTitle', // 组件类型，前后端约定 type
              title:'标题', // 组件名称用于左右侧栏显示
              props:{ // 组件具体属性
                text:'个人信息收集',
                level:1,
                isCenter:true
              }
            },
            {
              fe_id:Random.id(),
              type:'SurveyInput',
              title:'输入框',
              props:{
                title:'姓名',
                placeholder:'请输入你的姓名' 
              }
            },
            {
              fe_id:Random.id(),
              type:'SurveyInput',
              title:'输入框2',
              props:{
                title:'手机号',
                placeholder:'请输入你的手机号' 
              }
            },
          ]
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
    url:'/api/survey/:id', // 更新某份问卷信息
    method: 'patch',
    response(){
      return{
        errno:0
      }
    }
  },
  {
    url:'/api/survey/duplicate/:id', // 复制某份问卷
    method:'post',
    response(){
      return {
        errno:0,
        data:{
          id:Random.id()
        }
      }
    }
  }
]