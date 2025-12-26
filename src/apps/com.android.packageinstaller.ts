import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.android.packageinstaller',
  name: 'vivo 软件包安装程序',
  groups: [
    {
      key: 0,
      name: '功能类-无视风险继续安装',
      desc: '自动勾选「已了解应用的风险检测结果」选择框，无视风险继续安装',
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.android.packageinstaller.PackageInstallerActivity',
          matches:
            '[id="com.android.packageinstaller:id/deleted_file_state_cb"][text="已了解应用的风险检测结果"][checked=false]',
          actionMaximum: 1,
        },
      ],
    },
  ],
});
