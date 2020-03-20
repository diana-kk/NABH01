var SVG = Snap('#my-svg');

// 최상위 그룹
var Paper = SVG.g();

//이미지
var bi = Paper.image('img/bi.jpg', 0, 0, 260, 38).toDefs();
var start = Paper.image('img/start.png', 0, 0, 170, 210).toDefs();
var song = Paper.image('img/song.png', 0, 0, 35, 35).toDefs();

// SVG 외곽선
Paper.rect(0, 0, 360, 640, 6).attr({
  'stroke': 'gray',
  'fill': 'none'
});

// 상단
var topArea = Paper.g();

bi.use().transform('t50, 40').appendTo(topArea);

topArea.text(160, 145, '히라가나 오십음도').attr({
  'font-size': 30,
  'text-anchor': 'middle'
});

start.use().transform('t95, 200').appendTo(topArea);

song.use().transform('t280, 117').click(playSong).appendTo(topArea).attr({
  'cursor': 'pointer'
});

function playSong() {
  var audSong = new Audio('aud/song.wav');
  audSong.play();
}

var r1 = topArea.rect(50, 480, 260, 50, 5).attr({
  'fill': '#ffe2c5'
});
var t1 = topArea.text(180, 515, '시 작').attr({
  'font-size': 25,
  'text-anchor': 'middle',
  'font-weight': 'bold'
});

var rt1 = topArea.g(r1, t1).click(handler01).attr({
  'cursor': 'pointer'
});

function handler01() {
  location.replace('h_03_aa.html');
}
