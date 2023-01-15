const { App } = require('@slack/bolt');
require('dotenv').config(); // .env読み取り用

const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  signingSecret: process.env.SLACK_SIGNING_SECRET,
  socketMode: true,
  appToken: process.env.SLACK_APP_TOKEN,
  // ソケットモードではポートをリッスンしませんが、アプリを OAuth フローに対応させる場合、
  // 何らかのポートをリッスンする必要があります
  port: process.env.PORT || 3000
});

// ==================== カレンダー連携 ==================== //

// メッセージに反応してアクションを発火
app.message('test', async ({ message, say }) => {
  console.log("Start");
  console.log("End");
});


// ==================== アプリの起動 ==================== //

(async () => {
  // アプリを起動します
  await app.start();
  console.log('⚡️ Bolt app is running!');
})();