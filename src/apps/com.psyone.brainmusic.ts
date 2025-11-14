import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.psyone.brainmusic',
  name: '小睡眠',
  groups: [
    {
      key: 0,
      name: '全屏广告-首页全屏弹窗',
      activityIds: 'com.psyone.brainmusic.ui.activity.SwitchPicActivity',
      rules: [
        {
          key: 0,
          name: '解锁高品质XXX',
          fastQuery: true,
          matchTime: 5000,
          matches:
            'TextView[id="com.psyone.brainmusic:id/itv_close"][clickable=true]',
          snapshotUrls: ['https://i.gkd.li/i/23550849'],
        },
      ],
    },
    {
      key: 1,
      name: '局部广告-播放页跳转广告',
      activityIds: 'com.psyone.brainmusic.view.player.PlayerActivity',
      rules: [
        {
          key: 0,
          name: '播放页跳转广告',
          matchTime: 5000,
          matches: '@View -3 View[index=0] >2 TextView[text="广告"]',
          snapshotUrls: ['https://i.gkd.li/i/23550883'],
        },
        {
          preKeys: [0],
          key: 1,
          name: '点击[不感兴趣]',
          fastQuery: true,
          matches: 'TextView[text="不感兴趣"]',
          snapshotUrls: ['https://i.gkd.li/i/23550897'],
        },
      ],
    },
  ],
});
