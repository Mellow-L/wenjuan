const test = require('./test')
const survey = require('./survey')
const user = require('./user')
const stat = require('./stat')
const answer = require('./answer')
// mock配置列表
const mockList = [
  ...test,
  ...survey,
  ...user,
  ...stat,
  ...answer
]

module.exports = mockList