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
          isPublished:true,
          desc:'描述xyz',
          js:'hello im js',
          css:'hi im css',
          componentsList:[
            {
              fe_id:'c1', // 组件唯一标识 用作前端的列表渲染
              type:'SurveyTitle', // 组件类型，前后端约定 type
              title:'标题', // 组件名称用于左右侧栏显示
              props:{ // 组件具体属性
                text:'个人信息收集',
                level:1,
                isCenter:true
              },
              isHidden:false,
              isLocked:false,
            },
            {
              fe_id:'c2',
              type:'SurveyParagraph', 
              title:'段落 n', 
              props:{ 
                text:'一个后端返回的段落',
                isCenter:false
              },
              isHidden:false,
              isLocked:false,
            },
            {
              fe_id:'c3',
              type:'SurveyInfo', 
              title:'问卷信息1', 
              props:{ 
                title:'问卷信息 1 的标题',
                description:'这里描述了问卷信息 1'
              },
              isHidden:false,
              isLocked:false,
            },
            {
              fe_id:'c4',
              type:'SurveySelectRadio', 
              title:'单选 1', 
              props:{ 
                title:'单选 1的题干',
                isVertical:true,
                options:[
                  {value:'default item1',label:'选项  m1'},
                  {value:'default item2',label:'选项s 2'},
                  {value:'default item3',label:'选项 3s'},
                ],
                value:'default item1'
              },
              isHidden:false,
              isLocked:false,
            },
            {
              fe_id:'c5',
              type:'SurveySelectCheckbox', 
              title:'多选 1', 
              props:{ 
                title:'多选 1 的题干',
                isVertical:true, 
                options:[
                  {value:'default item1',label:'选项 a1',checked:true}, 
                  {value:'default item2',label:'选项 s2',checked:false},
                  {value:'default item3',label:'选项 v3',checked:true},
                ]
              },
              isHidden:false,
              isLocked:false,
            },
            {
              fe_id:'c6',
              type:'SurveyInput',
              title:'输入框0',
              props:{
                title:'姓名',
                placeholder:'请输入你的姓名' 
              },
              isHidden:false,
              isLocked:false,
            },
            {
              fe_id:'c7',
              type:'SurveyInput',
              title:'输入框1',
              props:{
                title:'姓名nnn',
                placeholder:'请输入你的姓名nnn' 
              },
              isHidden:false,
              isLocked:true,
            },
            {
              fe_id:'c8',
              type:'SurveyInput',
              title:'输入框2',
              props:{
                title:'手机号',
                placeholder:'请输入你的手机号' 
              },
              isHidden:false,
              isLocked:false,
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