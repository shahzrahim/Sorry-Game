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
    // let setBoard;
  // class gameBoard {
  //   constructor() {

  //   }

  // }


    // let player1 = new Player(1,'red', clickMainPiece1) ;
    // let player2 = new Player(2,'blue', clickMainPiece2);
    // console.log(player1)
    // console.log(player2)



  $('.startBtn').click(() => {
    console.log('Game starts!');
    event.preventDefault()
    $('h1').text('Roll the Dice to begin!');
    $('.logo').addClass('animated infinite tada')
    $('#startgame').addClass('zoomOutDown')
    $('audio').attr('src', 'Audio/music2.mp3')
    $('.gameSection').css('display', 'flex');

  });

  let redPiece = $('.redPiece')
  let bluePiece = $('.bluePiece')

  const cell = $('.cell');

  console.log(cell);
  let setBoard = Array.from(Array(24).keys(cell));
  console.log(setBoard[23]);


 // why is this not console logging?

  // function createBoard(){
  //   setBoard = Array.from(Array(24).keys());
  // }

  let redPosition = 15;
  let bluePosition = 15;
  let counter = 2;

  let turns = "red";


  function movePiece(clickMainPiece) {

    if (turns == 'red') {
      // console.log(turns)
      redPosition += 11.35;
      $('.redPiece').css('left',`${redPosition}vh`);
      changeTurns();
      } else {
      // console.log(turns)
      bluePosition += 11.35;
      $('.bluePiece').css('right',`${bluePosition}vh`);
      turns = "red";
      return turns;
      changeTurns();
    }
  }

  function changeTurns() {

    if(counter % 2 === 0) {
      $('.bluePiece').off('click');
      $('h1').text('Player 1 Turn');
      turns = "blue";
      $('.redPiece').click(movePiece);
      counter ++;

    }
    else {
      $('.redPiece').off('click');
      turns = "red";
      $('h1').text('Player 2 Turn');
      $('.bluePiece').click(movePiece);

      counter++;

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
      movePiece();
    }
    if(value === 2) {
      $(".dice > img").attr("src","Images/Die_2.png");
      movePiece();
    }
    if(value === 3) {
      $(".dice > img").attr("src","Images/Die_3.png");
      movePiece();
    }
    if(value === 4) {
      $(".dice > img").attr("src","Images/Die_4.png");
      movePiece();
    }
    if(value === 5) {
      $(".dice > img").attr("src","Images/Die_5.png");
      movePiece();
    }
    if(value === 6) {
      $(".dice > img").attr("src","Images/Die_6.png");
      $('h1').text('You Rolled a Six. Roll Again!');
      rollSix();
    }

    return value;
  }

  function rollSix() {

    if(turns == 'red') {
      let clickMainPiece1 = $('#mainPiece1').click(function() {
          console.log('this has been clicked');
          $('#mainPiece1').css('display','none');
          $('.redPiece').css('visibility', 'visible');
          rollDice();
          // changeTurns();
      });
    }

    if(turns == 'blue') {
      let clickMainPiece2 = $('#mainPiece2').click(function() {
          console.log('this has been clicked');
          $('#mainPiece2').css('display','none');
          $('.bluePiece').css('visibility', 'visible');
          rollDice();
          // changeTurns();
      });
    }
  };

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






