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

    const value1 = $('#player1Name');
    const value2 = $('#player2Name');

  $('.startBtn').click(() => {
    console.log('Game starts!');
    event.preventDefault()
    $('h1').text(`Roll the Dice to begin! \n${value1.val()}'s Turn`);
    $('.logo').addClass('animated infinite tada')
    $('#startgame').addClass('zoomOutDown')
    $('audio').attr('src', 'Audio/music2.mp3')
    $('.gameSection').css('display', 'flex');


  });

  // const value1 = $('#player1Name');
  // const value2 = $('#player2Name');

  // let playerOne = $('#player1Name').val()
  // (console.log(playerOne.val()));

  let redPiece = $('.redPiece')
  let bluePiece = $('.bluePiece')

  const cell = $('.cell');

//   console.log(cell);
//   let setBoard = Array.from(Array(24).keys(cell));
//
//   $.each(cell, function(key, element) {
//     element = false;
//     console.log('key: ' + key + '\n' + 'value: ' + element);
// });
// let cell = $('.cell' )

class Cell {
  constructor(key,value){
    this.key = key;
    this.value = value
    this.occupied = false
  }
  isOccupied() {
    return this.occupied
  }
  hidePiece() {
    if('red') {
    $(this.value).children('.redPiece').css('visibility', 'hidden');
    }
    if('blue'){
    $(this.value).children('.bluePiece').css('visibility', 'hidden');
    }
  }
  showPiece() {
    // $('.redPiece').css('visibility', 'visible');
    if('red') {
    $(this.value).children('.redPiece').css('visibility', 'visible');
    }
    if('blue') {
    $(this.value).children('.bluePiece').css('visibility', 'visible');
    }
  }
}
let cells = []
cell.each( function(i,d) {
  cells.push(new Cell(i,d))
})
//$(cells[0]).html("new text")
console.log(cells);




 // why is this not console logging?

  // function createBoard(){
  //   setBoard = Array.from(Array(24).keys());
  // }

  let counter = 2;

  let turns = "red";


  let clickDice = $('.dice').click(rollDice)
  let diceVal = null;

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
      diceVal = 1;
      movePiece();
    }
    if(value === 2) {
      $(".dice > img").attr("src","Images/Die_2.png");
      diceVal = 2;
      movePiece();
    }
    if(value === 3) {
      $(".dice > img").attr("src","Images/Die_3.png");
      diceVal = 3;
      movePiece();
    }
    if(value === 4) {
      $(".dice > img").attr("src","Images/Die_4.png");
      diceVal = 4;
      movePiece();
    }
    if(value === 5) {
      $(".dice > img").attr("src","Images/Die_5.png");
      diceVal = 5;
      movePiece();
    }
    if(value === 6) {
      $(".dice > img").attr("src","Images/Die_6.png");
      diceVal = 6;
      // $('h1').text('You Rolled a Six. Roll Again!');
      // rollSix();
      movePiece();
    }

    return value;
  }

    // redPosition = 0;
    // bluePosition = 0;

    let redCurrent = 0;
    let blueCurrent = 23;

    function movePiece() {



      if (turns == 'red') {
        $('#mainPiece1').css('visibility','hidden');
        // $('.redPiece').css('visibility', 'visible');
        cells[redCurrent].showPiece('red');

          if (counter >= 3) {
            cells[redCurrent].hidePiece('red');
            redCurrent += diceVal
            cells[redCurrent].showPiece('red');
            $('.redPiece').click(changeTurns());
          } else {
          changeTurns();
        }
      } else {
          $('#mainPiece2').css('visibility','hidden');
          // $('.bluePiece').css('visibility', 'visible');
          cells[blueCurrent].showPiece('blue');

            if (counter >= 4) {
              cells[blueCurrent].hidePiece('blue');
              blueCurrent -= diceVal
              cells[blueCurrent].showPiece('blue');
              $('.bluePiece').click(changeTurns());
            } else {
            changeTurns();
          }
      }

  }

    function changeTurns() {

      if(counter % 2 == 0) {
        console.log(turns);
        $('.bluePiece').off('click');
        $('h1').text(`${value1.val()}'s Turn`);
        turns = "blue";
        $('.redPiece').click(movePiece);
        counter ++;
      }
      else {
        console.log(turns);
        $('.redPiece').off('click');
        turns = "red";
        $('h1').text(`${value2.val()}'s Turn`);
        $('.bluePiece').click(movePiece);
        counter++;

      }
    }
  // function rollSix() {
  //
  //   if(turns == 'red') {
  //     let clickMainPiece1 = $('#mainPiece1').click(function() {
  //         console.log('this has been clicked');
  //         $('#mainPiece1').css('display','none');
  //         $('.redPiece').css('visibility', 'visible');
  //         rollDice();
  //         // changeTurns();
  //     });
  //   }
  //
  //   if(turns == 'blue') {
  //     let clickMainPiece2 = $('#mainPiece2').click(function() {
  //         console.log('this has been clicked');
  //         $('#mainPiece2').css('display','none');
  //         $('.bluePiece').css('visibility', 'visible');
  //         rollDice();
  //         // changeTurns();
  //     });
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
