const test = require('./test')
const survey = require('./survey')
const user = require('./user')
const stat = require('./stat')
// mock配置列表
const mockList = [
  ...test,
  ...survey,
  ...user,
  ...stat
]

module.exports = mockList