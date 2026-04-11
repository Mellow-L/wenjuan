const Mock = require("mockjs")
module.exports = [
  {
    url: "/api/answer",
    method: "post",
    response() {
      return {
        errno: 0
      }
    }
  }
]
