import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.tencent.mobileqq',
  name: 'QQ',
  groups: [
    {
      key: 0,
      name: '局部广告',
      activityIds: 'com.tencent.mobileqq.activity.SplashActivity',
      rules: [
        {
          key: 0,
          name: '首页-顶部悬浮广告',
          fastQuery: true,
          matchTime: 5000,
          matches: '[id="com.tencent.mobileqq:id/ywt"][clickable=true]',
          action: 'clickCenter',
          position: {
            top: 90,
            right: 50,
          },
          snapshotUrls: [
            'https://i.gkd.li/i/16739528',
            'https://i.gkd.li/i/16744830',
          ],
        },
      ],
    },
  ],
});
