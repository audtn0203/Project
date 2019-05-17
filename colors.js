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
  if(self.value === 'turn off'){
    Body.setBackgroundColor('black');
    Body.setColor('black');
    self.value='turn on';
    p.setColor('black');
    }
  else{
    Body.setBackgroundColor('white');
    Body.setColor('red');
    self.value='turn off';
    p.setColor('orange');
  }
}
