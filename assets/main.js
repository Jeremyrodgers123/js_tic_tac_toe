

// render method

//board object

$(document).ready(function(){
	$('.board').on("click", "div", function(event){
		var selection = $(event.target)
    // get the index of the board position
    var move = board.position(selection);
    if (move === 'no'){return}
    selection.html(move)
    board.checkWinner();
    game.nextTurn();
    event.stopPropagation();
	})

  $('.startButton').on('click', function(){
    game.playAgain();
  })
});

var board = {
  //initialize an empty array of arrays
  values : [[00,01,02],[10,11,12],[20,21,22]],
  
  //create 9 empty boxes filled with the contents of the array 
  newRows : function(numRows){
  	for(var j = 0; j < numRows; j++){
  	$(".board").append("<div class = 'gridRow"+j+"'></div>")

  	for( var i = 0; i < 3; i++){
  	  $(".gridRow"+j).append("<div class = 'square"+i+" fontstyle'>"+board.values[j][i]+"</div>")
    }}
  },
  render : function(){
    this.newRows(3); 
  },
  position : function(selection){
    var x = selection.parent().index()-2;
    var y = selection.index();
    console.log(typeof board.values[x][y])
    var result= typeof board.values[x][y] 
    if (result !== "string"){
    board.values[x][y] = game.currentSymbol;
    //console.log ('attention')
    console.log ("x " + x)
    console.log ("y " + y)
    console.log ("board values" + board.values);
    return board.values[x][y]
  } else {
    return 'no'
  }

  },
  checkWinner : function(){ 
    console.log(board.values)
      for (var i = 0; i < 3; i++){
         var a = board.values[0][i];
         var b = board.values[1][i];
         var c = board.values[2][i];
         var d = board.values[i][0];
         var e = board.values[i][1];
         var f = board.values[i][2];
        if ( a === game.currentSymbol &&
             b === game.currentSymbol &&
             c === game.currentSymbol
          ){
          alert("horizontal win")
          game.playAgain();
        }else if (
            d === game.currentSymbol &&
            e === game.currentSymbol &&
            f === game.currentSymbol
          ){
          alert("vertical win")
          game.playAgain();
        }else if (
            board.values[0][0] === game.currentSymbol &&
            board.values[1][1] === game.currentSymbol &&
            board.values[2][2] === game.currentSymbol ||
            board.values[2][0] === game.currentSymbol &&
            board.values[1][1] === game.currentSymbol &&
            board.values[0][2] === game.currentSymbol 
          ){
          alert("diaginal win")
          game.playAgain();
          return
        }
      }
  },
}

//game object

var game = {
  //play game by initalizing the board
  initalize: function(){
    board.render();
    this.createPlayers();
    console.log(this.currentSymbol)
  },
  createPlayers: function(){
    firstPlayer = new Player(1);
    firstPlayer.initalize();
    secondPlayer = new Player(2);
    secondPlayer.initalize();
  },
  currentTurn: 1,
  currentSymbol: "X",
  //Turn method that has different turns
  nextTurn: function(){
    if (this.currentTurn === 1) {
      this.currentTurn = 2;
      this.currentSymbol = "O"
    }else if (this.currentTurn ===2){
      this.currentTurn = 1;
      this.currentSymbol = "X";
    }
    //console.log(this.currentTurn)
  },
  playAgain : function(){
    var play = confirm("Play Again?")
    if (play === true){
      board.values = [[00,01,02],[10,11,12],[20,21,22]];
      console.log(board.values)
      $("*[class^='gridRow']").remove();
      game.initalize();
    }
  }
}


//Player object
function Player(playerNumber) {
  this.number = playerNumber;
  this.symbol = ""
}

Player.prototype = {
  constructor: Player,
  getName: function(){
    this.name = prompt("Player " + this.number + " Please enter your name:", "Jeremy Rodgers");
  },
  createSymbol: function(){
    if (this.number === 1){
      this.symbol = "X";
    }else if (this.number ===2){
       this.symbol = "O";
    }
  },
  initalize: function(){
    this.getName();
    this.createSymbol();
    console.log(this.name)
    console.log(this.number)
    console.log(this.symbol)
  }
}


game.initalize();

/** 
has X or O

**/