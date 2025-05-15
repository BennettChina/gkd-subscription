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
          matches: [
            'ImageView[vid="closeBtn"][clickable=true]',
            'ImageView[vid="systemNotificationBottomDialogClose"][clickable=true]',
          ],
          snapshotUrls: [
            'https://i.gkd.li/i/20230064',
            'https://i.gkd.li/i/20230076',
          ],
        },
      ],
    },
    {
      key: 1,
      name: '活动弹窗',
      activityIds: 'com.qidian.QDReader.ui.activity.SplashImageActivity',
      rules: [
        {
          key: 0,
          name: '活动弹窗',
          fastQuery: true,
          matchTime: 5000,
          matches: [
            'ImageView[id="com.qidian.QDReader:id/imgClose"][clickable=true]',
          ],
          snapshotUrls: ['https://i.gkd.li/i/20230072'],
        },
      ],
    },
  ],
});
