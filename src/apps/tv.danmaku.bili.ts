import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'tv.danmaku.bili',
  name: '哔哩哔哩',
  groups: [
    {
      key: 0,
      name: '局部广告-直播间悬浮广告',
      activityIds: 'com.bilibili.bililive.room.ui.roomv3.LiveRoomActivityV3',
      rules: [
        {
          key: 0,
          name: '直播间-游戏下载广告',
          fastQuery: true,
          matchTime: 5000,
          matches: 'ImageView[vid="live_game_card_close"][clickable=true]',
          snapshotUrls: ['https://i.gkd.li/i/20230038'],
        },
        {
          key: 1,
          name: '直播间-增送礼物提示',
          fastQuery: true,
          matchTime: 5000,
          matches:
            'ImageView[id="tv.danmaku.bili:id/iv_pop_rank_guide_card_close"][clickable=true]',
          snapshotUrls: ['https://i.gkd.li/i/20230038'],
        },
        {
          key: 2,
          name: '直播间-和主播一起玩',
          fastQuery: true,
          matchTime: 5000,
          matches:
            'ImageView[id="tv.danmaku.bili:id/live_play_together_close"]',
          snapshotUrls: ['https://i.gkd.li/i/20231449'],
        },
      ],
    },
  ],
});
