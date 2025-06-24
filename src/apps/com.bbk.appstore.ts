import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.bbk.appstore',
  name: 'vivo 应用商店',
  groups: [
    {
      key: 0,
      name: '全屏广告-开屏广告',
      activityIds: 'com.bbk.appstore.ui.AppStoreTabActivity',
      rules: [
        {
          key: 0,
          name: '应用推荐',
          fastQuery: true,
          matchTime: 5000,
          matches:
            'TextView[id="com.bbk.appstore:id/vbutton_title"][visibleToUser=true]',
        },
      ],
    },
  ],
});
