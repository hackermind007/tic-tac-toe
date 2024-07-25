let currentPlayer = 'X';
let gameActive = true;
let gameState = ['', '', '', '', '', '', '', '', ''];

const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

const winningMessage = () => alert(`Player ${currentPlayer} wins!`);
const drawMessage = () => alert(`Game ended in a draw!`);
const currentPlayerTurn = () => `Player ${currentPlayer}'s turn`;

const winningCheck = () => {
    for (let condition of winningConditions) {
        let [a, b, c] = condition;
        if (gameState[a] && gameState[a] === gameState[b] && gameState[a] === gameState[c]) {
            return true;
        }
    }
    return false;
};

const placeMark = (cellIndex) => {
    if (!gameActive || gameState[cellIndex] !== '') return;

    gameState[cellIndex] = currentPlayer;
    document.getElementById('board').children[cellIndex].innerText = currentPlayer;

    if (winningCheck()) {
        document.getElementById('turn').innerText = winningMessage();
        gameActive = false;
        return;
    }

    if (!gameState.includes('')) {
        document.getElementById('turn').innerText = drawMessage();
        gameActive = false;
        return;
    }

    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    document.getElementById('turn').innerText = currentPlayerTurn();
};

const resetGame = () => {
    currentPlayer = 'X';
    gameActive = true;
    gameState = ['', '', '', '', '', '', '', '', ''];
    document.querySelectorAll('.cell').forEach(cell => cell.innerText = '');
    document.getElementById('turn').innerText = currentPlayerTurn();
};

document.getElementById('turn').innerText = currentPlayerTurn();