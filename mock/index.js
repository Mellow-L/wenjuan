const test = require('./test')
const survey = require('./survey')
const user = require('./user')
// mock配置列表
const mockList = [
  ...test,
  ...survey,
  ...user
]

module.exports = mockList