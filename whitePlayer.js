function whiteLegalMoveIsTrue(x,y){
    gameBoard[x][y] = "W";
    $("[row='" + x + "'][col='" + y + "']").addClass('whitePlayer').removeClass('blankSpot');
    counter--;
    whoseTurn = false;
    return;
}
function checkWhiteRight(x,y) {
    if (gameBoard[x][y + 1] === "B") {
        var rightArray = [];
        for (var i = 1; i <= gameBoard.length - 1; i++) {
            if (gameBoard.hasOwnProperty(x) && gameBoard[x].hasOwnProperty(y + i) && gameBoard[x][y + i] !== "") {
                rightArray.push(gameBoard[x][y + i]);
                console.log(rightArray);
                if (rightArray.includes("W")) {
                    for (var i = 1; i <= rightArray.length; i++) {
                        if (gameBoard[x][y + i] === "B" && gameBoard[x][y + i] !== "") {
                            gameBoard[x][y + i] = "W";
                            $("[row='" + x + "'][col='" + (y + i) + "']").removeClass('blackPlayer').addClass("whitePlayer");
                        }
                    }
                    whiteLegalMoveIsTrue(x, y);
                    break;
                }
            }
        }

    }
}
function checkWhiteRightDown(x,y) {
    if (x < 7) {
        if (gameBoard[x + 1][y + 1] === "B") {
            var diagArray = [];
            for (var i = 1; i <= gameBoard.length - 1; i++) {
                if (gameBoard.hasOwnProperty(x + i) && gameBoard[x + i].hasOwnProperty(y + i) && gameBoard[x + i][y + i] !== "") {
                    diagArray.push(gameBoard[x + i][y + i]);
                    console.log(diagArray);
                    if (diagArray.includes("W")) {
                        for (var i = 1; i <= diagArray.length - 1; i++) {
                            if (gameBoard[x + i][y + i] === "B" && gameBoard[x + i][y + i] !== "") {
                                gameBoard[x + i][y + i] = "W";
                                $("[row='" + (x + i) + "'][col='" + (y + i) + "']").removeClass('blackPlayer').addClass("whitePlayer");
                            }
                        }
                        whiteLegalMoveIsTrue(x, y);
                        break;
                    }
                }
            }

        }
    }
}
function checkWhiteDown(x,y) {
    if (x < 7) {
        if (gameBoard[x + 1][y] === "B") {
            var vertArray = [];
            for (var i = 1; i <= gameBoard.length - 1; i++) {
                if (gameBoard.hasOwnProperty(x + i) && gameBoard[x + i].hasOwnProperty(y) && gameBoard[x + i][y] !== "") {
                    vertArray.push(gameBoard[x + i][y]);
                    console.log(vertArray);
                    if (vertArray.includes("W")) {
                        for (var i = 1; i <= vertArray.length - 1; i++) {
                            if (gameBoard[x + i][y] === "B" && gameBoard[x + i][y] !== "") {
                                gameBoard[x + i][y] = "W";
                                $("[row='" + (x + i) + "'][col='" + y + "']").removeClass('blackPlayer').addClass("whitePlayer");
                            }
                        }
                        whiteLegalMoveIsTrue(x, y);
                        break;
                    }
                }
            }
        }
    }
}
function checkWhiteDiagDownLeft(x,y){
    if (x < 7) {
        if (gameBoard[x + 1][y - 1] === "B") {
            var diagArray = [];
            for (var i = 1; i <= gameBoard.length - 1; i++) {
                if (gameBoard.hasOwnProperty(x + i) && gameBoard[x + i].hasOwnProperty(y - i) && gameBoard[x + i][y - i] !== "") {
                    diagArray.push(gameBoard[x + i][y - i]);
                    console.log(diagArray);
                    if (diagArray.includes("W")) {
                        for (var i = 1; i <= diagArray.length - 1; i++) {
                            if (gameBoard[x + i][y - i] === "B" && gameBoard[x + i][y - i] !== "") {
                                gameBoard[x + i][y - i] = "W";
                                $("[row='" + (x + i) + "'][col='" + (y - i) + "']").removeClass('blackPlayer').addClass("whitePlayer");
                            }
                        }
                        whiteLegalMoveIsTrue(x, y);
                        break;
                    }
                }
            }
        }
    }
}

function checkWhiteLeft(x,y){
    if (gameBoard[x][y - 1] === "B") {
        var leftArray = [];
        for (var i = 1; i <= gameBoard.length - 1; i++) {
            if (gameBoard.hasOwnProperty(x) && gameBoard[x].hasOwnProperty(y - i) && gameBoard[x][y - i] !== "") {
                leftArray.push(gameBoard[x][y - i]);
                console.log(leftArray);
                if (leftArray.includes("W")) {
                    for (var i = 1; i <= leftArray.length - 1; i++) {
                        if (gameBoard[x][y - i] === "B" && gameBoard[x][y - i] !== "") {
                            gameBoard[x][y - i] = "W";
                            $("[row='" + x + "'][col='" + (y - i) + "']").removeClass('blackPlayer').addClass("whitePlayer");
                        }
                    }
                    whiteLegalMoveIsTrue(x, y);
                    break;
                }
            }
        }
    }
}

function checkWhiteDiagUpLeft(x,y) {
    if (gameBoard[x - 1][y - 1] === "B") {
        var diagArray = [];
        for (var i = 1; i <= gameBoard.length - 1; i++) {
            if (gameBoard.hasOwnProperty(x - i) && gameBoard[x - i].hasOwnProperty(y - i) && gameBoard[x - i][y - i] !== "") {
                diagArray.push(gameBoard[x - i][y - i]);
                console.log(diagArray);
                if (diagArray.includes("W")) {
                    for (var i = 1; i <= diagArray.length - 1; i++) {
                        if (gameBoard[x - i][y - i] === "B" && gameBoard[x - i][y - i] !== "") {
                            gameBoard[x - i][y - i] = "W";
                            $("[row='" + (x - i) + "'][col='" + (y - i) + "']").removeClass('blackPlayer').addClass("whitePlayer");
                        }
                    }
                    whiteLegalMoveIsTrue(x, y);
                    break;
                }
            }
        }
    }
}
function checkWhiteUp(x,y) {
    if (gameBoard[x - 1][y] === "B") {
        var vertArray = [];
        for (var i = 1; i <= gameBoard.length - 1; i++) {
            if (gameBoard.hasOwnProperty(x - i) && gameBoard[x - i].hasOwnProperty(y) && gameBoard[x - i][y] !== "") {
                vertArray.push(gameBoard[x - i][y]);
                console.log(vertArray);
                if (vertArray.includes("W")) {
                    for (var i = 1; i <= vertArray.length - 1; i++) {
                        if (gameBoard[x - i][y] === "B" && gameBoard[x - i][y] !== "") {
                            gameBoard[x - i][y] = "W";
                            $("[row='" + (x - i) + "'][col='" + y + "']").removeClass('blackPlayer').addClass("whitePlayer");
                        }
                    }
                    whiteLegalMoveIsTrue(x, y);
                    break;
                }
            }
        }
    }
}
function checkWhiteDiagUpRight(x,y){
    if (gameBoard[x - 1][y + 1] === "B") {
        var vertArray = [];
        for (var i = 1; i < gameBoard.length-1; i++) {
            if(gameBoard.hasOwnProperty(x-i) && gameBoard[x-i].hasOwnProperty(y+i)&& gameBoard[x-i][y+i]!=="") {
                vertArray.push(gameBoard[x - i][y + i]);
                console.log(vertArray);
                if (vertArray.includes("W")) {
                    for (var i = 1; i <= vertArray.length-1; i++) {
                        if (gameBoard[x - i][y + i] === "B" && gameBoard[x - i][y+i] !== "") {
                            gameBoard[x - i][y + i] = "W";
                            $("[row='" + (x - i) + "'][col='" + (y + i) + "']").removeClass('blackPlayer').addClass("whitePlayer");
                        }
                    }
                    whiteLegalMoveIsTrue(x, y);
                    break;
                }
            }
        }
    }
}

/* Check whitePlayerMove */
function checkWhitePlayerMove(a, b) {
    var x = parseInt(a);
    var y = parseInt(b);
    console.log("x", x, "y", y);
    checkWhiteRight(x,y);
    checkWhiteRightDown(x,y);
    checkWhiteDown(x,y);
    checkWhiteDiagDownLeft(x,y);
    checkWhiteLeft(x,y);
    checkWhiteDiagUpLeft(x,y);
    checkWhiteUp(x,y);
    checkWhiteDiagUpRight(x,y)
    }

