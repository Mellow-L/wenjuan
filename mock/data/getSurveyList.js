const Mock = require('mockjs')
const Random = Mock.Random

function getSurveyList(opt = {}){
  const {pageSize = 10,isStar = false,isDeleted = false} = opt
  const list = []
  for(let i = 0;i < pageSize;i ++){
    list.push({
      _id: Random.id(),
      title: Random.ctitle(),
      isPublished: Random.boolean(),
      isStar,
      answerCount: Random.natural(50,100),
      createdAt: Random.datetime(),
      isDeleted,
    })
  }
  return list
}

module.exports = getSurveyList