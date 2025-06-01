import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.qidian.QDReader',
  name: '起点读书',
  groups: [
    {
      key: 0,
      name: '通知提示-通知弹窗',
      activityIds: [
        'com.qidian.QDReader.ui.activity.MainGroupActivity',
        'com.qidian.QDReader.ui.activity.new_msg.NewMsgCenterActivity',
      ],
      rules: [
        {
          key: 0,
          name: '通知权限提示',
          fastQuery: true,
          matchTime: 5000,
          anyMatches: [
            'ImageView[vid="closeBtn"][clickable=true]',
            'ImageView[id="com.qidian.QDReader:id/systemNotificationBottomDialogClose"][clickable=true]',
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
      name: '全屏广告-活动弹窗',
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
    {
      key: 2,
      name: '功能类-签到',
      activityIds: 'com.qidian.QDReader.ui.activity.MainGroupActivity',
      rules: [
        {
          key: 0,
          name: '签到',
          fastQuery: true,
          matchDelay: 2000,
          matchTime: 5000,
          matches: [
            'TextView[id="com.qidian.QDReader:id/button_text_id"][text="签到"]',
          ],
          snapshotUrls: [],
        },
      ],
    },
  ],
});
