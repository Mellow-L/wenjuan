const Koa = require('koa')
const Router = require('koa-router')
const mockList = require('./mock/index')

const app = new Koa()
const router = new Router()

async function getRes(fn,ctx){
  return new Promise(resolve => {
    setTimeout(() => {
      const res = fn(ctx)
      resolve(res)
    }, 100);// 1s后返回 fn 调用结果，模拟加载
  })
}
mockList.forEach((mockItem)=>{
  const {url,method,response} = mockItem
  router[method](url,async ctx =>{
    const res = await getRes(response,ctx)
    ctx.body = res
  })
})

app.use(router.routes())
app.listen(3001)
