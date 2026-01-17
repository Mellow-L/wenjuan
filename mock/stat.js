const Mock = require('mockjs')
const getStatList = require('./data/getStatList')
const Random = Mock.Random

module.exports = [
  {
    url:'/api/stat/:surveyId',
    method:'get',
    response(ctx){
      const { query= {} } = ctx
      return {
        errno:0,
        data:{
          total:1000,
          list:getStatList(query.pageSize||null)
        }
      }
    }
  },
  {
    url:'/api/stat/:surveyId/:componentId', // 获取某问卷单个组件的答卷可统计数据
    method:'get',
    response(){
      return {
        errno:0,
        data:{
          stat:[
            {name:'item 1',count:5},
            {name:'item 2',count:10},
            {name:'item 3',count:6},
            {name:'item 4',count:21},
            {name:'item 5',count:14},
            {name:'item 6',count:9},
            {name:'item 7',count:30},
          ]
        }
      }
    }
  }
]