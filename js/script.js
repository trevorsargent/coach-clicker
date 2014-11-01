var numCoaches = 0;
var coachesPerSec = 10;
var clincrement = 1;

setInterval(function(){
  numCoaches += coachesPerSec/100;
  refresh();
}, 10);

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

});
