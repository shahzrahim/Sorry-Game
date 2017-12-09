$(document).ready(() => {

  // class Player {
  //   constructor(player, color, clickMainPiece, currentPlayer) {
  //     this.player = player
  //     this.color = color
  //     this.clickMainPiece = clickMainPiece
  //     this.currentPlayer = false;
  //   }

  //   changeTurns(){};
  //   rollDice() {};
  //   movePiece(){};

  // }
    let setBoard;
  // class gameBoard {
  //   constructor() {

  //   }

  // }






  let redPiece = $('.redPiece')

  let clickMainPiece1 = $('#mainPiece1').click(function() {
    console.log('this has been clicked');
    $('#mainPiece1').css('display','none');
    $('.redPiece').css('visibility', 'visible');
    $('.redPiece').click(movePiece);
  });


  let bluePiece = $('.bluePiece')

  let clickMainPiece2 = $('#mainPiece2').click(function() {
    console.log('this has been clicked');
    $('#mainPiece2').css('display','none');
    $('.bluePiece').css('visibility', 'visible');
    $('.bluePiece').click(movePiece)
    turns = "red"
  });


    // let player1 = new Player(1,'red', clickMainPiece1) ;
    // let player2 = new Player(2,'blue', clickMainPiece2);
    // console.log(player1)
    // console.log(player2)


  let clickDice = $('.dice').click(rollDice)


 const boxes = $('.flex-box');
 console.log(boxes)

 // why is this not console logging?

  // function createBoard(){
  //   setBoard = Array.from(Array(24).keys());
  // }

  let redPosition = 15;
  let bluePosition = 15;
  let counter = 1;

  let turns = "red";

  function movePiece(clickMainPiece) {
    console.log('this has been clicked');
    console.log(counter)

    if (counter % 2 == 0) {
      // console.log(turns)
      redPosition += 11.35;
      counter += 1;
       $('.redPiece').off('click');
        $('.redPiece').css('left',`${redPosition}vh`);
       $('.bluePiece').click(movePiece);
       // turns = "blue"
       // return turns;
    } else {
      // console.log(turns)
      bluePosition += 11.35;
      counter += 1;
      $('.bluePiece').css('right',`${bluePosition}vh`);
      $('.bluePiece').off('click');
      $('.redPiece').click(movePiece)
      // turns = "red";
      // return turns;
    }
  }





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
     let value = dice.roll();

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
    return value;
  }



  // function rollSix() {
  //   if(turn()=== player1){
  //     if()
  //   }
  // };

//JQUERY ender
});



// function turn() {};

// function endTurn() {};



//Pseudo Code
//a function that starts the game

//A class that contains entire game
//A method that builds the board game based on cell ID
//A method that moves pieces
//A method that rolls dice.
//A method that ends turn.
//A method to change turns between both players.

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






