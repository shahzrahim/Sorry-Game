#### Overview

This is a begginer version for Sorry! Board game. The objective is to be the first player to get all their colored pieces from their start space, around the board to their "home" space. The pieces are normally moved in a clockwise direction. Movement of nubbins are directed by the rolling of a dice.

A link to Presentation.
https://docs.google.com/presentation/d/11a2r43smTqYkPN_olA3okwUYzFZOmw-zLLgVLb3PX0s/edit?usp=sharing

## Project Schedule

This schedule will be used to keep track of your progress throughout the week and align with our expectations.  

You are **responsible** for scheduling time with your squad to seek approval for each deliverable by the end of the corresponding day, excluding `Saturday` and `Sunday`.

|  Day | Deliverable | Approval From Squad Lead
|---|---| ---|
|Day 1: Wed| Game Idea| Yes
|Day 2: Thur| Wireframes and Priority Matrix| Yes
|Day 3: Fri| Pseudocode\actual code|Yes
|Day 4: Sat| Basic Clickable Model |Yes
|Day 5: Sun| Working Prototype |Yes
|Day 6: Mon| Game Completed / Slides |Yes
|Day 7: Tue| Project Presentations |

## Project Description
http://res.cloudinary.com/shazrahim94/image/upload/v1512673003/IMG_5610_fxoofb.jpg


## Priority Matrix
http://res.cloudinary.com/shazrahim94/image/upload/c_scale,w_1711/v1512673007/IMG_5614_jhqma1.jpg

Include a full list of features that have been prioritized based on the `Time and Importance` Matix.  

## MVP 

Include the full list of features that will be part of your MVP 

HTML/CSS
Landing page will feature a centered opaque box that will be a form. That form will ask for the names of the 4 players.
There will be a submit button that will dissipate the opaque box and will lead to game board. Form values will be updated to the corresponding circles. 
There will be a Headline with the name of the game and in the bottom right corner there will be a reset button.
using flex box, create a div with the class flex container. It will be centered in the middle of the page.
each space on the board will be a flex-box with equal dimensions
8 boxes top and bottom(flex start/flex end), 6 boxes to the side(align-right/align left)
5 circles, 4 which will serve as HOME base, one center circle that will hold Dice. 
Dice will be able to animate as a roll, and will switch between 6 different images. Each image will be an image of one side of the dice


Javascript

Board Layout
create an object that holds the properties of each box, including position on array, if it is empty, and if there is more than one player.
Create a form that takes names of 4 players
create a class of players
create a class for each color piece
create a home base section
create a home section.
create a dice function 
capture dice value and allow pieces to move based on those values
pieces need a certain value to leave home base
Using a counter, each players turn will be based off a even1,odd1,even2,odd2 concept


Functions
There will be a function to move a piece based on the value received by the dice. 
The pieces that move are only the ones that are clicked on.
Player rolls dice => picks piece => piece moves based on values of dice.
To check to see if the player can move a piece out of their home base.(needs a six)
to check to see if there is already a player on a position. if there is, remove that piece, send it back to its home base, replace with new piece
something to start the game. It will be called at the very end.



## POST MVP
http://res.cloudinary.com/shazrahim94/image/upload/c_scale,w_1330/v1512673009/IMG_5613_aiqsza.jpg
Include the full list of features that you are considering for POST MVP

## Wireframes
http://res.cloudinary.com/shazrahim94/image/upload/c_scale,w_1538/v1512673013/IMG_5612_rqgrzd.jpg

http://res.cloudinary.com/shazrahim94/image/upload/v1512673011/IMG_5611_eth0fz.jpg
## Game Components

### Landing Page
There will be a Window in the middle of the screen with directions for how to play the game, and a form to gather Player names.

### Game Initialization
The Board will flip into place and you will see an empty board with two pieces in the middle. One in a blue circle and one in a red circle.

### Playing The Game
The players will take turns clicking on the dice in the middle, and their piece will move according to the the value on the dice.

### Winning The Game
Once a piece has reached the opposing side of the board, the game board will dissapear and a window will pop up declarding the winner.

### Game Reset
The game will reboot the the game initaliziation page after clicking the reset button.

## Functional Components


| Function | Description | 
| --- | :---: |  
| startGame()| Will start game at the GameBoard Portion | 
| endGame()| Will show the End Game box | 
| rollSix() | This will allow player to move piece from Home base to game field. This will also allow a second roll. | 
| endTurn() | This will end the turn and allow the next player to make a move | 
| rollDice() | This will allow the player to touch the Dice in the middle of the board and gain a value to move their pieces. | 
| movePiece() | This will allow their piece to move based on their place on the board. | 
| setBoard() | This will attach each cell using an ID from the HTML and make them into OBJECTS | 
<!-- | Capitalize | This will capitalize the first letter in a string | -->


Time frames are also key in the development cycle.  You have limited time to code all phases of the game.  Your estimates can then be used to evalute game possibilities based on time needed and the actual time you have before game must be submitted. 

| Component | Priority | Estimated Time | Time Invetsted | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| GameBoard | H | 3hrs| 12hrs | 6hrs |
| GameBoard Logic | H | 10hrs| 48hrs | 24hrs |
| Starting Box Logic| M | 2hrs| 1hrs | 1hrs |
| Ending Box Logic| M | 1/2hrs| 1/2hrs | 1/2hrs |
| Dice Animations | M | 10hrs| 2hrs | 2hrs |
| Cutting logic | L | 3hrs| 0hrs | 0hrs |
| Add Pieces | L | 3hrs| 0hrs | 0hrs |
| Add Players| RL | 3hrs| 0hrs | 0hrs |

#Total Time
52 1/2 Hours

## Helper Functions
Helper functions should be generic enought that they can be reused in other applications. Use this section to document all helper functions that fall into this category.

| Function | Description | 
| --- | :---: |  
| Capitalize | This will capitalize the first letter in a string | 

## Additional Libraries
 Use this section to list all supporting libraries and thier role in the project. 
