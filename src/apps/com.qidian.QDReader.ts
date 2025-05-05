import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.qidian.QDReader',
  name: '起点读书',
  groups: [
    {
      key: 0,
      name: '通知权限提示',
      activityIds: 'com.qidian.QDReader.ui.activity.MainGroupActivity',
      rules: [
        {
          key: 0,
          name: '通知权限提示',
          fastQuery: true,
          matchTime: 5000,
          matches: 'ImageView[vid="closeBtn"][clickable=true]',
        },
      ],
    },
  ],
});
