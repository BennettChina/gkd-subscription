import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.tencent.mm',
  name: '微信',
  groups: [
    {
      key: 1,
      name: '局部广告-文章内嵌广告',
      desc: '文章内嵌、尾部、评论区广告',
      activityIds:
        'com.tencent.mm.plugin.brandservice.ui.timeline.preload.ui.TmplWebViewMMUI',
      rules: [
        {
          key: 1,
          matches:
            '@Image[id="feedbackIcon"] - [id="feedbackTag"][text="广告"]',
          snapshotUrls: [
            'https://i.gkd.li/i/27629927',
            'https://i.gkd.li/i/27630560',
            'https://i.gkd.li/i/27630525',
          ],
        },
        {
          preKeys: [1],
          key: 2,
          anyMatches: [
            '[id="closeBtn"][text="关闭此广告"]',
            '[id="dislike"][text="不感兴趣"]',
          ],
          snapshotUrls: ['https://i.gkd.li/i/27630496'],
        },
      ],
    },
  ],
});
