var min = 1;
var max = 4;
var img_src = 'img/ads/' + Math.floor(Math.random() * (max - min) + min) + '.jpg';
document.getElementById('side').innerHTML = '<img src=' + img_src + '/>';
