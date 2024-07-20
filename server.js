const Koa = require('koa');
const { getPgVersion } = require('./dbconnection.js');
require('dotenv').config();

const app = new Koa();

const port = process.env.PORT || 3000;

app.use(async ctx => {
  const psqlVersion = (await getPgVersion())[0].version;
  ctx.body = `Hello World. PSQL version: ${psqlVersion}`;
});

app.listen(port);