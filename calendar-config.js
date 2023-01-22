/*************************
  calendar-config.js
 *************************/
// ----------------------
// サービスアカウントキーのプロパティ
// ----------------------
const KEY = require('./service-account-key.json').private_key;
const SERVICE_ACCT_ID = require('./service-account-key.json').client_id;
// ----------------------
// カレンダーID
// ----------------------
const CALENDAR_ID = {
  'myCal' : 'bronzelevel3@gmail.com', // ここだけ登録すれば大丈夫なはず
};
// ----------------------
// ④ タイムゾーン（日本）
// ----------------------
const TIMEZONE = 'Asia/Tokyo';
module.exports.serviceAcctId = SERVICE_ACCT_ID;
module.exports.calendarId = CALENDAR_ID;
module.exports.key = KEY;
module.exports.timezone = TIMEZONE;