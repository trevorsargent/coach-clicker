var numCoaches = 0;
var coachesPerSec = 1;
var clincrement = 1;

function Building(name, price, increase){
  this.price = price;
  this.increase = increase;
  this.number = 0;
  this.name = name
}

function setup(){

  buildings = [];
  //new Building("Name", price, per/sec increase);
  buildings[0] = new Building("Box", 10, 1);
  buildings[1] = new Building("Carton", 36, 5);
  buildings[2] = new Building("Green Room", 100, 10);
  buildings[3] = new Building("Campus", 5000, 100);

}

refresh = function(){
  //update titles and headers with proper number of coaches
  $("#coach-count").html(Math.floor(numCoaches) + " Coaches");
  if(Math.floor(numCoaches) == 1){
    $("#coach-count").html(Math.floor(numCoaches) + " Coach");
  }
  $("#coaches-per-sec").html(coachesPerSec + " Coaches per second");
  $("title").html("Coach Clicker: " + Math.floor(numCoaches) + " Coaches");

  //update styling for buildings
  for(i = 0; i < buildings.length; i++){
    building = buildings[i];
    if(building.price > numCoaches){
      $(".building#" + i).addClass("unavailable");
    }else{
      $(".building#" + i).removeClass("unavailable");
    }
  }

  //update price and number for buildings
  for(i = 0; i < buildings.length; i++){
    building = buildings[i];
    $(".building#" + i).find(".price").html(building.price);
    $(".building#" + i).find(".number").html(building.number);
  }
}

coachClick = function(){
    numCoaches += clincrement;
    console.log(numCoaches);
    refresh();
}

setInterval(function(){
  numCoaches += coachesPerSec/100;
  refresh();
}, 10);

addBuilding = function(index){
  $('<div class="building" id="'+ index +'"><h3>' + buildings[index].name + '</h3><p class="price">' + buildings[index].price + '</p><p class="number">' + buildings[index].number + '</p></div>').insertBefore("#buildingPlaceholder");
}


$(document).ready(function(){

  setup();

  for(i = 0; i < buildings.length; i++){
    addBuilding(i);
  }

  $("#head-coach").click(function(){
    coachClick();
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
    var building = buildings[this.id];
    if(building.price < numCoaches){
      coachesPerSec += building.increase;
      numCoaches -= building.price;
      building.price = Math.floor(1.15*building.price);
      building.number++;
    }
    refresh();
  })



});
