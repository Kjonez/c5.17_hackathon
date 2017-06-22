function whiteLegalMoveIsTrue(x,y){
    gameBoard[x][y] = "W";
    $("[row='" + x + "'][col='" + y + "']").addClass('whitePlayer').removeClass('blankSpot');
    counter--;
    whoseTurn = false;
    return;
}
/* Check whitePlayerMove */
function checkWhitePlayerMove(a, b) {
    var x = parseInt(a);
    var y = parseInt(b);
    //check right direction from the click point
    console.log("x", x, "y", y);

    if (gameBoard[x][y + 1] === "B") {
        var rightArray = [];
        for (var i = 1; i <= gameBoard.length-1; i++) {
            if(gameBoard.hasOwnProperty(x) && gameBoard[x].hasOwnProperty(y+i)&& gameBoard[x][y+i]!=="") {
                rightArray.push(gameBoard[x][y + i]);
                console.log(rightArray);
                if (rightArray.includes("W")) {
                    for (var i = 1; i < rightArray.length; i++) {
                        if (gameBoard[x][y + i] === "B" && gameBoard[x][y+i] !== "") {
                            gameBoard[x][y + i] = "W";
                            $("[row='" + x + "'][col='" + (y + i) + "']").removeClass('blackPlayer').addClass("whitePlayer");
                        }
                    }
                    whiteLegalMoveIsTrue(x, y);
                }
            }
        }
        //Check direction diagonally up left
    }
    // if (gameBoard[x][y + 1] === "B" && gameBoard[x].includes("W", [y + 2])) {
    //     for (var i = 1; i < gameBoard.length-1; i++) {
    //         if (gameBoard[x][y + i] === "B" && gameBoard[x][y+i] !== "") {
    //             gameBoard[x][y + i] = "W";
    //             $("[row='" + x + "'][col='" + (y + i) + "']").removeClass('blackPlayer').addClass("whitePlayer");
    //         }
    //     }
    //     whiteLegalMoveIsTrue(x, y);
    //     //Checking diagonally right down direction;
    // }
    if (x<7){
        if (gameBoard[x + 1][y + 1] === "B") {
            var diagArray = [];
            for (var i = 1; i <= gameBoard.length - 1; i++) {
                if (gameBoard.hasOwnProperty(x + i) && gameBoard[x + i].hasOwnProperty(y + i) && gameBoard[x + i][y + i] !== "") {
                    diagArray.push(gameBoard[x + i][y + i]);
                    console.log(diagArray);
                    if (diagArray.includes("W")) {
                        for (var i = 1; i < diagArray.length-1; i++) {
                            if (gameBoard[x + i][y + i] === "B" && gameBoard[x + i][y+i] !== "") {
                                gameBoard[x + i][y + i] = "W";
                                $("[row='" + (x + i) + "'][col='" + (y + i) + "']").removeClass('blackPlayer').addClass("whitePlayer");
                            }
                        }
                        whiteLegalMoveIsTrue(x, y);
                    }
                }
            }
            //Checking vertically down direction;
        }
    }
    if (x<7) {
        if (gameBoard[x + 1][y] === "B") {
            var vertArray = [];
            for (var i = 1; i <= gameBoard.length - 1; i++) {
                if (gameBoard.hasOwnProperty(x + i) && gameBoard[x + i].hasOwnProperty(y) && gameBoard[x + i][y] !== "") {
                    vertArray.push(gameBoard[x + i][y]);
                    console.log(vertArray);
                    if (vertArray.includes("W")) {
                        for (var i = 1; i < vertArray.length-1; i++) {
                            if (gameBoard[x + i][y] === "B" && gameBoard[x + i][y] !== "") {
                                gameBoard[x + i][y] = "W";
                                $("[row='" + (x + i) + "'][col='" + y + "']").removeClass('blackPlayer').addClass("whitePlayer");
                            }
                        }
                        whiteLegalMoveIsTrue(x, y);
                    }
                }
            }
            //Check direction diagonally down left
        }
    }
    if (x<7) {
        if (gameBoard[x + 1][y - 1] === "B") {
            var diagArray = [];
            for (var i = 1; i <= gameBoard.length - 1; i++) {
                if (gameBoard.hasOwnProperty(x + i) && gameBoard[x + i].hasOwnProperty(y - i) && gameBoard[x + i][y - i] !== "") {
                    diagArray.push(gameBoard[x + i][y - i]);
                    console.log(diagArray);
                    if (diagArray.includes("W")) {
                        for (var i = 1; i < diagArray.length-1; i++) {
                            if (gameBoard[x + i][y - i] === "B" && gameBoard[x + i][y-i] !== "") {
                                gameBoard[x + i][y - i] = "W";
                                $("[row='" + (x + i) + "'][col='" + (y - i) + "']").removeClass('blackPlayer').addClass("whitePlayer");
                            }
                        }
                        whiteLegalMoveIsTrue(x, y);
                    }
                }
            }
            //Check direction left of click
        }
    }
    if (gameBoard[x][y - 1] === "B") {
        var leftArray = [];
        for (var i = 1; i <= gameBoard.length-1; i++) {
            if(gameBoard.hasOwnProperty(x) && gameBoard[x].hasOwnProperty(y-i)&& gameBoard[x][y-i]!=="") {
                leftArray.push(gameBoard[x][y - i]);
                console.log(leftArray);
                if (leftArray.includes("W")) {
                    for (var i = 1; i < leftArray.length-1; i++) {
                        if (gameBoard[x][y - i] === "B"&& gameBoard[x][y-i] !== "") {
                            gameBoard[x][y - i] = "W";
                            $("[row='" + x + "'][col='" + (y - i) + "']").removeClass('blackPlayer').addClass("whitePlayer");
                        }
                    }
                    whiteLegalMoveIsTrue(x, y);
                }
            }
        }
        //Check direction diagonally up left
    }
    if (gameBoard[x - 1][y - 1] === "B") {
        var diagArray = [];
        for (var i = 1; i <= gameBoard.length-1; i++) {
            if(gameBoard.hasOwnProperty(x-i) && gameBoard[x-i].hasOwnProperty(y-i)&& gameBoard[x-i][y-i]!=="") {
                diagArray.push(gameBoard[x - i][y - i]);
                console.log(diagArray);
                if (diagArray.includes("W")) {
                    for (var i = 1; i < diagArray.length-1; i++) {
                        if (gameBoard[x - i][y - i] === "B"&& gameBoard[x - i][y-i] !== "") {
                            gameBoard[x - i][y - i] = "W";
                            $("[row='" + (x - i) + "'][col='" + (y - i) + "']").removeClass('blackPlayer').addClass("whitePlayer");
                        }
                    }
                    whiteLegalMoveIsTrue(x, y);
                }
            }
        }
        //Checking vertical up direction;
    }
    if (gameBoard[x - 1][y] === "B") {
        var vertArray = [];
        for (var i = 1; i <= gameBoard.length-1; i++) {
            if(gameBoard.hasOwnProperty(x-i) && gameBoard[x-i].hasOwnProperty(y)&& gameBoard[x-i][y]!=="") {
                vertArray.push(gameBoard[x - i][y]);
                console.log(vertArray);
                if (vertArray.includes("W")) {
                    for (var i = 1; i < vertArray.length-1; i++) {
                        if (gameBoard[x - i][y] === "B"&& gameBoard[x - i][y] !== "") {
                            gameBoard[x - i][y] = "W";
                            $("[row='" + (x - i) + "'][col='" + y + "']").removeClass('blackPlayer').addClass("whitePlayer");
                        }
                    }
                    whiteLegalMoveIsTrue(x, y);
                }
            }
        }
        //Check direction diagonally up right
    }
    if (gameBoard[x - 1][y + 1] === "B") {
        var vertArray = [];
        for (var i = 1; i < gameBoard.length-1; i++) {
            if(gameBoard.hasOwnProperty(x-i) && gameBoard[x-i].hasOwnProperty(y+i)&& gameBoard[x-i][y+i]!=="") {
                vertArray.push(gameBoard[x - i][y + i]);
                console.log(vertArray);
                if (vertArray.includes("W")) {
                    for (var i = 1; i < vertArray.length-1; i++) {
                        if (gameBoard[x - i][y + i] === "B" && gameBoard[x - i][y+i] !== "") {
                            gameBoard[x - i][y + i] = "W";
                            $("[row='" + (x - i) + "'][col='" + (y + i) + "']").removeClass('blackPlayer').addClass("whitePlayer");
                        }
                    }
                    whiteLegalMoveIsTrue(x, y);
                }
            }
        }
    }
}