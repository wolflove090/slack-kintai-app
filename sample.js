var Calendar = require('node-google-calendar'),
    config   = require('./calendar-config'),
    calId    = config.calendarId.myCal;
var cal = new Calendar(config);

// イベントの登録
var event = {
  'start': {
    'dateTime': '2023-01-23T10:00:00+09:00',
    'timeZone': 'Asia/Tokyo',
  },
  'end'  : {
    'dateTime': '2023-01-23T11:00:00+09:00',
    'timeZone': 'Asia/Tokyo',
  },
  // ------------
  // 終日イベントの場合
  // 'start': {'date': '2019-08-30'},
  // 'end'  : {'date': '2019-08-30'},
  // ------------
  'summary': 'カレンダーイベントのタイトル',
  'description': 'カレンダーイベントの説明欄に表示する文章',
  // カレンダーで表示するイベントの色
  'colorId': 3, 
  // 1:ラベンダ(薄紫)
  // 2:セージ(薄緑)
  // 3:ブドウ(濃紫)
  // 4:フラミンゴ(ピンク)
  // 5:バナナ
  // 6:みかん
  // 7:ピーコック(水色)
  // 8:グラファイト(灰色)
  // 9:ブルーベリー(濃青)
  // 10:バジル(濃緑)
  // 11:トマト
};
cal.Events.insert(calId, event)
.then(resp => {
  console.log(resp);
})
.catch(err => {
  console.log(err.message);
});