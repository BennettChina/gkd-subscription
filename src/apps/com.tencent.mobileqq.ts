import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.tencent.mobileqq',
  name: 'QQ',
  groups: [
    {
      key: 0,
      name: '局部广告-悬浮广告',
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
    {
      key: 1,
      name: '局部广告-频道帖子夹杂的广告',
      activityIds:
        'com.tencent.mobileqq.guild.base.QPublicFragmentActivityForMainWebActivity',
      rules: [
        {
          key: 0,
          name: '频道帖子夹杂广告',
          fastQuery: true,
          matches: '[id="com.tencent.mobileqq:id/nz1"][text="广告"]',
          snapshotUrls: ['https://i.gkd.li/i/23558759'],
        },
        {
          preKeys: 0,
          key: 1,
          name: '选择关闭广告',
          fastQuery: true,
          matches: 'TextView[text="关闭此条广告"]',
          snapshotUrls: ['https://i.gkd.li/i/23569591'],
        },
      ],
    },
  ],
});
