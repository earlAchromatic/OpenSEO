import Koa from 'koa';
import router from './routes.js';

const port = process.env.PRODUCTION || 3000;

const app = new Koa();

app.use(router.routes());

app.listen(port);
console.log(`app listening on port: ${port}`);
