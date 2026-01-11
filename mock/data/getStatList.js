const { Random } = require("mockjs")
const getComponents = require("./getComponents")

// id value的答卷信息列表
module.exports = function getStatList(len = 10){
  const componentsList = getComponents() // 抽离 survey 的 components mock
  const res = []
  for(let i = 0;i < len;i ++){
    const stat = {
      _id:Random.id() // 对应问卷 id
    }
    componentsList.forEach(c=>{
      const {fe_id,type,props} = c
      switch(type){
        case 'SurveyInput':
          stat[fe_id] = Random.ctitle()
          break
        case 'SurveyTextarea':
          stat[fe_id] = Random.ctitle()
          break
        case 'SurveySelectRadio':
          stat[fe_id] = props.options[0].label
          break
        case 'SurveySelectCheckbox':
          stat[fe_id] = `${props.options[0].label},${props.options[1].label}`
          break
      }
    })
    res.push(stat)
  }
  return res
}