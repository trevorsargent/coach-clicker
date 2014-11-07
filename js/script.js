var numCoaches = 0;
var coachesPerSec = 1;
var clincrement = 1;

function Building(){
  this.price = 0;
  this.increase = 0;
  this.number = 0;
  this.name = ""
}

buildings = [];

buildings[0] = new Building();
buildings[1] = new Building();

buildings[0].name = "Theater";
buildings[0].price = 500;
buildings[0].increase = 25;
buildings[0].number = 5;

buildings[1].name = "Box";
buildings[1].price = 100;
buildings[1].increase = 50;
buildings[1].number = 2;

refresh = function(){
  $("#coach-count").html(Math.floor(numCoaches) + " Coaches");
  $("#coaches-per-sec").html(coachesPerSec + " Coaches per second");
  $("title").html("Coach Clicker: " + Math.floor(numCoaches) + " Coaches")
}

onClick = function(){
    numCoaches += clincrement;
    console.log(numCoaches);
    refresh();
}

setInterval(function(){
  numCoaches += coachesPerSec/100;
  refresh();
}, 10);


$(document).ready(function(){

  $("#head-coach").click(function(){
    onClick();
  });

  $("#head-coach").mousedown(function(){
    $("#head-coach").width(245);
    $("#head-coach").css("margin-top", "54");
  });

  $(document).mouseup(function(){
    $("#head-coach").width(250);
    $("#head-coach").css("margin-top", "50");
  });

  $(".building").click(function(){
    var id = this.id;
    coachesPerSec += buildings[id].increase;
    numCoaches -= buildings[id].price;
  })

});
