import Router from '@koa/router';
import { $, chalk } from 'zx';

const router = new Router();

router.get('/audit', () => runLint('./test/', 'dist/seo-lint.config.cjs'));

export default router;

async function runLint(path: string, output: string) {
  await $`seo-lint ${path} -c ${output}`;
  console.log(chalk.red('SEO lint Complete'));
}
