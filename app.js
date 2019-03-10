'use strict';
const koa = require('koa')
const path = require('path')
const render = require('koa-ejs')
const koaRouter = require('koa-router')
const serve = require('koa-static');


const app = new koa()
const router = new koaRouter()
app.use(serve('public'));

render(app, {
  root: path.join(__dirname, 'views'),
  layout: false,
  viewExt: 'ejs',
  cache: false,
  debug: false
})

router.get('main','/', (ctx, next) => {
  return ctx.render('landing')
})


app.use(router.routes())
  .use(router.allowedMethods())


app.listen(process.env.PORT, process.env.IP, () => console.log('Portfolio is live'));