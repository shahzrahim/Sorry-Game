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




  let bluePiece = $('.bluePiece')




    // let player1 = new Player(1,'red', clickMainPiece1) ;
    // let player2 = new Player(2,'blue', clickMainPiece2);
    // console.log(player1)
    // console.log(player2)





 const cell = $('.cell');

 console.log(cell);

//  for(var id in cell) {
//   console.log(cell.keys(id));
// }
 // why is this not console logging?

  // function createBoard(){
  //   setBoard = Array.from(Array(24).keys());
  // }

  let redPosition = 15;
  let bluePosition = 15;
  let counter = 0;

  let turns = "red";

  function movePiece(clickMainPiece) {
    console.log('this has been clicked');
    console.log(counter)

    if (turns == 'red') {
      // console.log(turns)
      redPosition += 11.35;
      $('.redPiece').css('left',`${redPosition}vh`);
       $('.bluePiece').click(movePiece);
      } else {
      // console.log(turns)
      bluePosition += 11.35;
      $('.bluePiece').css('right',`${bluePosition}vh`);

      $('.redPiece').click(movePiece)
      console.log(window.positon)
      // turns = "red";
      // return turns;
    }
  }

  function changeTurns() {

    if(turns == 'red') {
      $('.bluePiece').off('click');
      $('.redPiece').click(movePiece);
      $('h1').text('Player 1 Turn');
      counter ++;
      turns = "blue";

    }
    else {
      $('.redPiece').off('click');
      $('.bluePiece').click(movePiece);
      $('h1').text('Player 2 Turn');
      counter++;
      turns = "red"

    }
  }



  let clickDice = $('.dice').click(rollDice)
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
      rollSix();
    }
    changeTurns();
    return value;
  }

  function rollSix() {

    let clickMainPiece1 = $('#mainPiece1').click(function() {
        console.log('this has been clicked');
        $('#mainPiece1').css('display','none');
        $('.redPiece').css('visibility', 'visible');
        changeTurns();
    });

    let clickMainPiece2 = $('#mainPiece2').click(function() {
        console.log('this has been clicked');
        $('#mainPiece2').css('display','none');
        $('.bluePiece').css('visibility', 'visible');
        changeTurns();
    });
  };

  $('.bluePiece').click(movePiece)
  $('.redPiece').click(movePiece);
  // console.log(rollDice())



//JQUERY ender
});





// function turn() {};

// function endTurn() {};



//Pseudo Code
//a function that starts the game

//A class that contains entire game
//A method that builds the board game based on cell ID
//A method that moves pieces Check
//A method that rolls dice. Check
//A method that ends turn.
//A method to change turns between both players. Check

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






