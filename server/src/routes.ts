import Router from '@koa/router';
import { $, chalk } from 'zx';

const router = new Router();

router.get('/', runLint);

export default router;

async function runLint() {
  await $`mkdir test && cd test && touch audit.txt`;
  console.log(chalk.blue('hello world'));
}
