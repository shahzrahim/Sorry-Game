$(document).ready(() => {

  // class Players() {
  //   constructor(player#, color, circle, currentPlayer) {
  //     this.player = player#
  //     this.color = color
  //     this.circle = circle
  //     this.currentPlayer = false;
  //   }
  // }
  // class gameBoard() {
  // constructor() {

  //   }

  // let player1 = new Player(1',red','circleOne') ;
  // let player2 = new Player(2,'blue','circleTwo');
  // }



  let turns;
  let setBoard;
  let redPiece = $('#mainPiece1')
  let clickRedPiece = $(redPiece).click(function() {
    console.log('this has been clicked');
    $('#mainPiece1').css('display','none');
    $('.redPiece').css('visibility', 'visible');
  });
  let bluePiece = $('#mainPiece2')
  let clickBluePiece = $(bluePiece).click(function() {
    console.log('this has been clicked');
    $('#mainPiece2').css('display','none');
    $('.bluePiece').css('visibility', 'visible')
  });
  let clickDice = $('.dice').click(rollDice)



 const boxes = $('.flex-box');
 console.log(boxes)// why is this not console logging?

  // function createBoard(){
  //   setBoard = Array.from(Array(24).keys());
  // }

  function rollDice() {
    //create an object of a Dice
    var dice = {
      sides: 6,
      // method to generate number
      roll: function () {
        // random number between 0-1, times the amount of possible side,
        // rounded down, add one to add possibility of 6.
        var randomNumber = Math.floor(Math.random() * this.sides) + 1;
        return randomNumber;
      }
     }


      // function() {
      //     let sI = setInterval(function() {
      //     let random = Math.floor(Math.random() * this.sides) + 1;
      //     console.log(random)
      //     // counter += 1
      //     // if(counter == 3) {
      //     //   clearInterval(sI); return currentRole(random)}
      //     // },250)
      //     // return sI;
      //     }
      //   }




      let value = dice.roll();
      console.log(value)
    // if(dice.roll() === 6) {
    //   rollSix();
    // }

    if(value === 1) {
      $(".dice > img").attr("src","Images/Die_1.png");
    }
    if(value === 2) {
      $(".dice > img").attr("src","Images/Die_2.png");
    }
    if(value === 3) {
      $(".dice > img").attr("src","Images/Die_3.png");
    }
    if(value === 4) {
      $(".dice > img").attr("src","Images/Die_4.png");
    }
    if(value === 5) {
      $(".dice > img").attr("src","Images/Die_5.png");
    }
    if(value === 6) {
      $(".dice > img").attr("src","Images/Die_6.png");
    }

  };

  // function rollSix() {
  //   if(turn()=== player1){
  //     if()
  //   }
  // };

  // function movePiece() {
  //   if (clickedRedPiece) {
  //     $(redPiece).css('display', 'none');
  //   }
  //   if (clickedBluePiece) {
  //     $(bluePiece).css('display', 'visible' );
  //   }
  // };
//
  // function turn() {};

  // function endTurn() {};


//JQUERY ender
});

//Pseudo Code
//a function that starts the game

//A class that contains entire game
//A method that builds the board game based on cell ID
//A method that moves pieces
//A method that rolls dice.
//A method that ends turn.
//A method to change turns between both players.



