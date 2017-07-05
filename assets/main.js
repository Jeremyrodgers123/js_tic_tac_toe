

// render method

//board object

$(document).ready(function(){
	$('h1').on("click", function(){
		console.log("it's working")
		$(this).hide();
	})
});

var board = {
  //initialize an empty array of arrays
  values : [["00","01","02"],["10","11","12"],["20","21","22"]],
  newRows : function(numRows){
  	for(var j = 0; j < numRows; j++){
  	$(".board").append("<div class = 'gridRow"+j+"'></div>")

  	for( var i = 0; i < 3; i++){
  	  $(".gridRow"+j).append("<div class = 'square"+i+"'>"+board.values[j][i]+"</div>")
    }}
  },
  render : function(){
    this.newRows(3);
  
  }
}


console.log(board.values[0][0])
board.render();

/**

create 9 empty boxes filled with the contents of the array 
horizontal lines drawn 
vertical lines drawn
listen for clicks
**/

//game object
/**
play game by initalizing the board
Turn method that has different turns
check for winner method
winning combo cases array
turn number counter

**/

//Player object
/** 
has X or O

**/