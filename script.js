let fields = [];
let gameOver = false;
let currentShape = 'cross';


/**
 * Checks whether the "fields" object has a property with the key "id" and whether the "gameOver" variable is false. If both of these conditions are true, the code inside the if statement will execute.
 * @param {number} id - Every field has an own id. Checks, wich field was clicked.
 */
function fillShape(id) {
    if (!fields[id] && !gameOver) { // With ! we make it true, if the field was undefined before (false). Checks whether the "fields" object has a property with the key "id", and whether the "gameOver" variable is false. If both of these conditions are true, the code inside the if statement will execute.
        if (currentShape == 'cross') {
            currentShape = 'circle'; //If the conditions are met, the function determines whether the current shape is a "cross" or a "circle". If it is a cross, the current shape is changed to a circle, and the CSS class "player-inactive" is added to the "player-1" element and removed from the "player-2" element. If it is a circle, the current shape is changed to a cross, and the CSS class "player-inactive" is added to the "player-2" element and removed from the "player-1" element.
            document.getElementById('player-1').classList.add('player-inactive');
            document.getElementById('player-2').classList.remove('player-inactive');
        } else {
            currentShape = 'cross';
            document.getElementById('player-1').classList.remove('player-inactive');
            document.getElementById('player-2').classList.add('player-inactive');
        }
        fields[id] = currentShape;
        draw();
        checkForWin();
    }
}

/**
 * It resets the game by setting the "gameOver" variable to false, emptying the "fields" array, and hiding several HTML elements. 
 */
function restart() {
    gameOver = false;
    fields = [];
    document.getElementById('game-over').classList.add('d-none');
    document.getElementById('restart-btn').classList.add('d-none');

    for (let i = 0; i < 7; i++) {
        document.getElementById(`line-${i}`).classList.add('d-none');
    }

    for (let i = 0; i < 9; i++) {
        document.getElementById(`circle-${i}`).classList.add('d-none');
        document.getElementById(`cross-${i}`).classList.add('d-none');
    }
}


/**
 * This function checks if the clicked field is whether a circle or a cross. Then it makes the "right" of them visible. 
 */
function draw() {
    for (let i = 0; i < fields.length; i++) {
        if (fields[i] == 'circle') {
            document.getElementById(`circle-${i}`).classList.remove('d-none');
        }
    }

    for (let i = 0; i < fields.length; i++) {
        if (fields[i] == 'cross') {
            document.getElementById(`cross-${i}`).classList.remove('d-none');
        }
    }
}


/**
 * This function checks if one of the player has won. In this case a line will be drawn across the "win-line fields".
 */
function checkForWin() {
    let winner;
    // First row
    if (fields[0] == fields[1] && fields[0] == fields[2] && fields[0]) {
        winner = fields[0];
        document.getElementById('line-0').style.transform = 'scaleX(1)';
    }

    if (fields[3] == fields[4] && fields[3] == fields[5] && fields[3]) {
        winner = fields[3];
        document.getElementById('line-1').style.transform = 'scaleX(1)';
    }

    if (fields[6] == fields[7] && fields[6] == fields[8] && fields[6]) {
        winner = fields[6];
        document.getElementById('line-2').style.transform = 'scaleX(1)';
    }

    if (fields[0] == fields[3] && fields[0] == fields[6] && fields[0]) {
        winner = fields[0];
        document.getElementById('line-3').style.transform = 'rotate(90deg) scaleX(1)';
    }

    if (fields[1] == fields[4] && fields[1] == fields[7] && fields[1]) {
        winner = fields[1];
        document.getElementById('line-4').style.transform = 'rotate(90deg) scaleX(1)';
    }

    if (fields[2] == fields[5] && fields[2] == fields[8] && fields[2]) {
        winner = fields[2];
        document.getElementById('line-5').style.transform = 'rotate(90deg) scaleX(1)';
    }

    if (fields[0] == fields[4] && fields[0] == fields[8] && fields[0]) {
        winner = fields[0];
        document.getElementById('line-6').style.transform = 'rotate(45deg) scaleX(1.3)';
    }

    if (fields[2] == fields[4] && fields[2] == fields[6] && fields[2]) {
        winner = fields[2];
        document.getElementById('line-7').style.transform = 'rotate(-45deg) scaleX(1.3)';
    }

    restartGame(winner);
}

/**
 * It takes in a parameter "winner" which represents the winning player. If the "winner" parameter is truthy, the function sets the "gameOver" variable to true and shows the game over message and the restart button after a delay of 3 seconds using the "setTimeout" function.
 * @param {*} winner - Set the gameOver to true. 
 */
function restartGame(winner) {
    if (winner) {
        // console.log('Gewonnen:', winner)
        gameOver = true;
        setTimeout(function () {
            document.getElementById('game-over').classList.remove('d-none');
            document.getElementById('restart-btn').classList.remove('d-none');
        }, 3000);
    }
}


// Evaluieren = Auswerten
// 'circle' == 'circle' // true
// 'circle' == 'cross' // false