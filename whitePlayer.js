function checkLegalMove(x, y) {
    var x = parseInt(x);
    var y = parseInt(y);
    //check right direction from the click point
    if (gameBoard[x][y + 1] === "B" && gameBoard[x].includes("W", [y + 2])) {
        for (var i = 1; i < gameBoard[x].length; i++) {
            if (gameBoard[x][y + i] === "B") {
                gameBoard[x][y + i] = "W";
                $("[row='" + x + "'][col='" + (y + i) + "']").removeClass('blackPlayer').addClass("whitePlayer");
            }
        }
        //Checking diagonally right down direction;
    } else if (gameBoard[x + 1][y + 1] === "B") {
        var diagArray = [];
        for (var i = 1; i < gameBoard.length - x; i++) {
            diagArray.push(gameBoard[x + i][y + i]);
            console.log(diagArray);
            if (diagArray.includes("W")) {
                for (var i = 1; i < diagArray.length; i++) {
                    if (gameBoard[x + i][y + i] === "B") {
                        gameBoard[x + i][y + i] = "W";
                        $("[row='" + (x + i) + "'][col='" + (y + i) + "']").removeClass('blackPlayer').addClass("whitePlayer");
                    }
                }
            }
        }
        //Checking vertically down direction;
    } else if (gameBoard[x + 1][y] === "B") {
        var vertArray = [];
        for (var i = 1; i < gameBoard.length - x; i++) {
            vertArray.push(gameBoard[x + i][y]);
            console.log(vertArray);
            if (vertArray.includes("W")) {
                for (var i = 1; i < vertArray.length; i++) {
                    if (gameBoard[x + i][y] === "B") {
                        gameBoard[x + i][y] = "W";
                        $("[row='" + (x + i) + "'][col='" + y + "']").removeClass('blackPlayer').addClass("whitePlayer");
                    }
                }
            }
        }
        //Check direction diagonally down left
    } else if (gameBoard[x + 1][y - 1] === "B") {
        var diagArray = [];
        for (var i = 1; i < gameBoard.length - x; i++) {
            diagArray.push(gameBoard[x + i][y - i]);
            console.log(diagArray);
            if (diagArray.includes("W")) {
                for (var i = 1; i < diagArray.length; i++) {
                    if (gameBoard[x + i][y - i] === "B") {
                        gameBoard[x + i][y - i] = "W";
                        $("[row='" + (x + i) + "'][col='" + (y - i) + "']").removeClass('whitePlayer').addClass("blackPlayer");
                    }
                }
            }
        }
        //Check direction left of click
    } else if (gameBoard[x][y - 1] === "W") {
        var leftArray = [];
        for (var i = 1; i < gameBoard.length - x; i++) {
            leftArray.push(gameBoard[x][y - i]);
            console.log(leftArray);
            if (leftArray.includes("B")) {
                for (var i = 1; i < leftArray.length; i++) {
                    if (gameBoard[x][y - i] === "W") {
                        gameBoard[x][y - i] = "B";
                        $("[row='" + x + "'][col='" + (y - i) + "']").removeClass('whitePlayer').addClass("blackPlayer");
                    }
                }
            }
        }
        //Check direction diagonally up left
    } else if (gameBoard[x - 1][y - 1] === "W") {
        var diagArray = [];
        for (var i = 1; i < x; i++) {
            diagArray.push(gameBoard[x - i][y - i]);
            console.log(diagArray);
            if (diagArray.includes("B")) {
                for (var i = 1; i < diagArray.length; i++) {
                    if (gameBoard[x - i][y - i] === "W") {
                        gameBoard[x - i][y - i] = "B";
                        $("[row='" + (x - i) + "'][col='" + (y - i) + "']").removeClass('whitePlayer').addClass("blackPlayer");
                    }
                }
            }
        }
        //Checking vertical direction;
    } else if (gameBoard[x - 1][y] === "W") {
        var vertArray = [];
        for (var i = 1; i < y; i++) {
            vertArray.push(gameBoard[x - i][y]);
            console.log(vertArray);
            if (vertArray.includes("B")) {
                for (var i = 1; i < vertArray.length; i++) {
                    if (gameBoard[x - i][y] === "W") {
                        gameBoard[x - i][y] = "B";
                        $("[row='" + (x - i) + "'][col='" + y + "']").removeClass('whitePlayer').addClass("blackPlayer");
                    }
                }
            }
        }
        //Check direction diagonally up right
    } else if (gameBoard[x - 1][y + 1] === "W") {
        var vertArray = [];
        for (var i = 1; i < x; i++) {
            vertArray.push(gameBoard[x - i][y + i]);
            console.log(vertArray);
            if (vertArray.includes("B")) {
                for (var i = 1; i < vertArray.length; i++) {
                    if (gameBoard[x - i][y + i] === "W") {
                        gameBoard[x - i][y + i] = "B";
                        $("[row='" + (x - i) + "'][col='" + (y + i) + "']").removeClass('whitePlayer').addClass("blackPlayer");
                    }
                }
            }
        }
    }
}
