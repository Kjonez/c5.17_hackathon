/* use jQuery to create rows / columns / gameboard */
$('<table>').appendTo('section');
var rows = ['0','1','2','3','4','5','6','7'];
var columns = ['0','1','2','3','4','5','6','7'];
var gameBoard = [];
for(var i=0; i < 8; i++){
    gameBoard[i] = [];
    var tRow = $('<tr>');
    tRow.appendTo('table');
    for(var j=0; j < 8; j++){
        gameBoard[i][j]="";
        var tCol = $('<td>').attr({row:rows[i], col:columns[j]}).addClass('blankSpot');
        tCol.appendTo(tRow);
    }
}
/* Initialize Starting Game Pieces*/
$("[row='3'][col='3']").addClass('whitePlayer').removeClass('blankSpot');
$("[row='3'][col='4']").addClass('blackPlayer').removeClass('blankSpot');
$("[row='4'][col='3']").addClass('blackPlayer').removeClass('blankSpot');
$("[row='4'][col='4']").addClass('whitePlayer').removeClass('blankSpot');
/*click handler*/
$('td').click(setPiece);
/* function / variable declaration */
var whoseTurn = false;
var counter = 9;
var blackPieceCounter = 0;
var whitePieceCounter = 0;
/* setPiece function initiates player 1 move as well as checks if position is already taken and inputs value into gameBoard array*/
function setPiece(){
    if($(this).attr('class') === 'blankSpot'){
    if(!whoseTurn) {
        $(this).addClass('blackPlayer').removeClass('blankSpot');
        counter--;
        var testX = $(this).attr('row');
        var testY = $(this).attr('col');
        gameBoard[testX][testY] = "B";
        whoseTurn = true;
    } else {
        $(this).addClass('whitePlayer').removeClass('blankSpot');
        whoseTurn = false;
        counter--;
        var testX = $(this).attr('row');
        var testY = $(this).attr('col');
        gameBoard[testX][testY] = "W"
    }
        console.log(counter);
        if (counter === 0){
            countGameScore();
            endOfGame();
        }
    }
}
/* Searches gameBoard array for "B" and "W", increments blackPieceCounter if B is found and whitePieceCounter is incremented if W is found. */
function countGameScore(){
    for(var i = 0; i < gameBoard.length; i++){

        for(var j = 0; j < gameBoard.length; j++){

            if(gameBoard[i][j] === "B"){
                blackPieceCounter += 1;
            } else if (gameBoard[i][j] === "W"){
                whitePieceCounter += 1;
            }
        }
    } return blackPieceCounter;
}
/* Compares blackPieceCounter to whitePieceCounter, depending on outcome win message is logged to console */
function endOfGame(){
    if(blackPieceCounter > whitePieceCounter){
        console.log("Black wins");
    } else {
        console.log("White Wins");
    }
}