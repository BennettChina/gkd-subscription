import { defineGkdSubscription } from '@gkd-kit/define';
import { batchImportApps } from '@gkd-kit/tools';
import categories from './categories';
import globalGroups from './globalGroups';

export default defineGkdSubscription({
  id: 614090852,
  name: 'Bennett的GKD订阅',
  version: 0,
  author: 'BennettChina',
  checkUpdateUrl: './gkd.version.json5',
  supportUri: 'https://github.com/BennettChina/gkd-subscription/issues',
  categories,
  globalGroups,
  apps: await batchImportApps(`${import.meta.dirname}/apps`),
});
