//Global variable moves made by both players
    let moves = ['', '', '' , '', '', '', '', '', ''];
//Function to clear moves array for next round/match
const resetMoves = () => {
    moves = ['', '', '' , '', '', '', '', '', ''];
}
//Container variable to manipulate container element
    const containerDiv = document.querySelector('.container');

//Player factory function
const Player = (name, mark) => {
    const playerScore = 0;
    const move = (index) => {
        moves[index] = mark;
    }
    return {name, mark, playerScore, move};
}

function checkLine(index1,index2,index3){
    if(moves[index1] == moves[index2] && moves[index1] == moves[3]){
        return true;
    }else{
        return false;
    }
}

const showModal = (playerName) => {
    const modal = document.querySelector('.winner');
    modal.classList.add('active');
    modal.innerHTML = `<h1>${playerName} won!`;
    setTimeout(() => {
        modal.classList.remove('active');
    }, 3000);
}

const PvpGame = (playerOneName, playerTwoName) => {
    //Check moves, to check if someone won or is it tie
    const checkMoves = () => {
        if(checkLine(0, 1, 2)){
            if(moves[0] == 'X'){
                player1.playerScore++;
                showModal(player1.name);
                scoreText.innerHTML = `Player 1: ${player1.playerScore} <i class="fa-solid fa-chevron-left"></i> <br> Player 2: ${player2.playerScore}`;
                resetMoves();
            }

            if(moves[o] == 'O'){
                player2.playerScore++;
                showModal(player2.name);
                scoreText.innerHTML = `Player 1: ${player1.playerScore} <i class="fa-solid fa-chevron-left"></i> <br> Player 2: ${player2.playerScore}`;
                resetMoves();
            }
        }

        if(checkLine(0, 3, 6)){
            if(moves[0] == 'X'){
                player1.playerScore++;
                showModal(player1.name);
                scoreText.innerHTML = `Player 1: ${player1.playerScore} <i class="fa-solid fa-chevron-left"></i> <br> Player 2: ${player2.playerScore}`;
                resetMoves();
            }

            if(moves[o] == 'O'){
                player2.playerScore++;
                showModal(player2.name);
                scoreText.innerHTML = `Player 1: ${player1.playerScore} <i class="fa-solid fa-chevron-left"></i> <br> Player 2: ${player2.playerScore}`;
                resetMoves();
            }
        }

        if(checkLine(0, 4, 8)){
            if(moves[0] == 'X'){
                player1.playerScore++;
                showModal(player1.name);
                scoreText.innerHTML = `Player 1: ${player1.playerScore} <i class="fa-solid fa-chevron-left"></i> <br> Player 2: ${player2.playerScore}`;
                resetMoves();
            }

            if(moves[o] == 'O'){
                player2.playerScore++;
                showModal(player2.name);
                scoreText.innerHTML = `Player 1: ${player1.playerScore} <i class="fa-solid fa-chevron-left"></i> <br> Player 2: ${player2.playerScore}`;
                resetMoves();
            }
        }

        if(checkLine(1, 4, 5)){
            if(moves[1] == 'X'){
                player1.playerScore++;
                showModal(player1.name);
                scoreText.innerHTML = `Player 1: ${player1.playerScore} <i class="fa-solid fa-chevron-left"></i> <br> Player 2: ${player2.playerScore}`;
                resetMoves();
            }

            if(moves[1] == 'O'){
                player2.playerScore++;
                showModal(player2.name);
                scoreText.innerHTML = `Player 1: ${player1.playerScore} <i class="fa-solid fa-chevron-left"></i> <br> Player 2: ${player2.playerScore}`;
                resetMoves();
            }
        }

        if(checkLine(2, 4, 6)){
            if(moves[2] == 'X'){
                player1.playerScore++;
                showModal(player1.name);
                scoreText.innerHTML = `Player 1: ${player1.playerScore} <i class="fa-solid fa-chevron-left"></i> <br> Player 2: ${player2.playerScore}`;
                resetMoves();
            }

            if(moves[2] == 'O'){
                player2.playerScore++;
                showModal(player2.name);
                scoreText.innerHTML = `Player 1: ${player1.playerScore} <i class="fa-solid fa-chevron-left"></i> <br> Player 2: ${player2.playerScore}`;
                resetMoves();
            }
        }
    };
    //Creating player1 and player2 objects
    const player1 = Player(playerOneName, 'X');
    const player2 = Player(playerTwoName, 'O');
    //Turn variable to track who is current player to make a move
    let turn = true;

    //Creating DOM elements block
        const pvpGameDiv = document.createElement('div');
        pvpGameDiv.classList.add('pvp-game');
        const scoreText = document.createElement('h2');
        scoreText.classList.add('score');
        scoreText.innerHTML = `Player 1: ${player1.playerScore} <i class="fa-solid fa-chevron-left"></i> <br> Player 2: ${player2.playerScore}`;
        const gameBoard = document.createElement('div');

        for(let i=0; i < 9; i++){
            let field = document.createElement('div');
            field.classList.add('field');

            switch(i){
                case 0:
                    field.id = '0';
                    break;
                case 1:
                    field.id = '1';
                    break;
                case 2:
                    field.id = '2';
                    break;
                case 3:
                    field.id = '3';
                    break;
                case 4:
                    field.id = '4';
                    break;
                case 5:
                    field.id = '5';
                    break;
                case 6:
                    field.id = '6';
                    break;
                case 7:
                    field.id = '7';
                    break;
                case 8:
                    field.id = '8';
                    break;
                default:
                    break;
            }

            field.addEventListener('click', () => {
                if(turn){
                    this.innerHtml = player1.mark;
                    player1.move(this.id);
                    scoreText.innerHTML = `Player 1: ${player1.playerScore} <br> Player 2: ${player2.playerScore} <i class="fa-solid fa-chevron-left"></i> `;
                    checkMoves();
                }else{
                    this.innerHTML = player2.mark;
                    player2.move(this.id);
                    scoreText.innerHTML = `Player 1: ${player1.playerScore} <i class="fa-solid fa-chevron-left"></i>  <br> Player 2: ${player2.playerScore} <i class="fa-solid fa-chevron-left"></i> `;
                    checkMoves();
                }
            });
        }
    //End of DOM creation block
}

/*
    0 1 2
    3 4 5
    6 7 8
*/