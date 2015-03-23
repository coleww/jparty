export function generateGameId() {
  var stuff = 'abcdefghijklmnopqrstuvwxyz0123456789';
  var str = '';
  for(var i = 0;i<8;i++){
    var len = (i) ? stuff.length : 26;
    str += stuff[~~(Math.random() * len)];
  }
  return str;
}

export default generateGameId;
