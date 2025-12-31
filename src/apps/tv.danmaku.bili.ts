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
          anyMatches: [
            'ImageView[id="tv.danmaku.bili.adbiz:id/live_game_card_close"][clickable=true]',
            'ImageView[id="tv.danmaku.bili:id/live_game_card_close"][clickable=true]',
          ],
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
        {
          key: 3,
          name: '直播间-推荐抢购商品',
          fastQuery: true,
          anyMatches: [
            'ImageView[id="tv.danmaku.bili:id/shopping_close"][clickable=true]',
            'ImageView[id="tv.danmaku.bili.liveroom:id/shopping_close"][clickable=true]',
          ],
        },
      ],
    },
    {
      key: 1,
      name: '功能类-直播间天选',
      activityIds: 'com.bilibili.bililive.room.ui.roomv3.LiveRoomActivityV3',
      rules: [
        {
          key: 0,
          name: '直播间-一键参与天选', // 口令+关注主播的天选自动参与
          fastQuery: true,
          matches: [
            '@TextView < View - *[text="弹幕口令："]',
            '@TextView[text="关注主播"] - *[text="限制条件："]',
            '@Image < View <4 View < View < WebView[text="天选时刻"]',
          ],
        },
        {
          key: 1,
          order: 100,
          name: '直播间-关闭天选(30秒后未处理帮忙关闭窗口)',
          actionDelay: 30000, // 等 30 秒，未关闭或者未参与天选说明观众在忙，辅助关闭窗口
          fastQuery: true,
          matches: ['@TextView <2 View < View < WebView[text="天选时刻"]'],
        },
      ],
    },
    {
      key: 2,
      name: '局部广告-视频贴片广告',
      desc: '视频播放页下方的贴片广告',
      rules: [
        {
          key: 0,
          fastQuery: true,
          activityIds:
            'com.bilibili.ship.theseus.detail.UnitedBizDetailsActivity',
          matches:
            '@[id="tv.danmaku.bili.adbiz:id/more_layout"] <<n [id="tv.danmaku.bili.adbiz:id/ad_tint_frame"][desc*="广告"]',
        },

        // copy from https://github.com/AIsouler/GKD_subscription/blob/main/src/apps/tv.danmaku.bili.ts
        {
          preKeys: [0],
          key: 1,
          matches:
            '@[clickable=true] > [text*="不感兴趣" || text="相似内容过多" || text="我不想看"]',
          exampleUrls: 'https://e.gkd.li/23937c2d-379c-4fb5-aaee-7295bcf0afca',
          snapshotUrls: [
            'https://i.gkd.li/i/17676025',
            'https://i.gkd.li/i/17676149',
            'https://i.gkd.li/i/17677147',
            'https://i.gkd.li/i/18296940',
            'https://i.gkd.li/i/18306839',
            'https://i.gkd.li/i/20739391',
            'https://i.gkd.li/i/24015691',
            'https://i.gkd.li/i/24336415',
          ],
        },
        {
          preKeys: [1],
          key: 2,
          matches: '[vid="close_dislike"][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/80514576-3656-4dcc-89f5-5992803c8e77',
          snapshotUrls: 'https://i.gkd.li/i/18587456',
        },
      ],
    },
  ],
});
