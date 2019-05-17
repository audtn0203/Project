var p = {
  setColor:function (color){
    var pcolor=document.querySelectorAll('p');
    var i=0;
    while(i<pcolor.length){
      pcolor[i].style.color=color;
      i=i+1;
      }
  }
}
var Body = {
  setColor:function (color){
    document.querySelector('body').style.color=color;
  }, //객체를 구별할 때 ,로 구별해줌
  setBackgroundColor:function (color){
    document.querySelector('body').style.backgroundColor=color;
  }
}
function nightDayHandler(self){
  var target=document.querySelector('body');
  if(self.value === 'night'){
    Body.setBackgroundColor('pink');
    Body.setColor('yellow');
    self.value='day';
    p.setColor('white');
    }
  else{
    Body.setBackgroundColor('powderblue');
    Body.setColor('red');
    self.value='night';
    p.setColor('green');
  }
}
