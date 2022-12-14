let board = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
]

let winner = false;
let currentPlayer = 2;
let movesCounter = 0;
const winCondition = [
  [
    [0, 0],
    [0, 1],
    [0, 2],
  ],
  [
    [1, 0],
    [1, 1],
    [1, 2],
  ],
  [
    [2, 0],
    [2, 1],
    [2, 2],
  ],
  [
    [0, 0],
    [1, 0],
    [2, 0],
  ],
  [
    [0, 1],
    [1, 1],
    [2, 1],
  ],
  [
    [0, 2],
    [1, 2],
    [2, 2],
  ],
  [
    [0, 0],
    [1, 1],
    [2, 2],
  ],
  [
    [0, 2],
    [1, 1],
    [2, 0],
  ],
];

function checkWinner() {
  let result = false;

  winCondition.forEach((condition) => {
    const first = condition[0];
    const second = condition[1];
    const third = condition[2];
    const value1 = board[first[0]][first[1]];
    const value2 = board[second[0]][second[1]];
    const value3 = board[third[0]][third[1]];
    const draw = 0;

    if (value1 != 0 || value2 != 0 || value3 != 0) {
      if (value1 == value2 && value2 == value3 && value1 == value3) {
        result = value1;
        currentPlayer = value1;
      }
    }
  });

  return result;
}

const tbodyEl = document.querySelector("tbody");
const statsEl = document.querySelector("#game-stats")

function drawBoard() {
  let boardResult = [[]];
  tbodyEl.innerHTML = "";

  for (let i = 0; i < board.length; i++) {
    const trEl = document.createElement("tr");
    tbodyEl.appendChild(trEl);
    for (let j = 0; j < board[i].length; j++) {
      const tdEl = document.createElement("td");
      trEl.appendChild(tdEl);
      const pEL = document.createElement("p");
      if (board[i][j] == 0) {
        tdEl.textContent = "";
      } else if (board[i][j] == 1) {
        pEL.setAttribute("class", "game-circle");
      } else if (board[i][j] == 2) {
        pEL.setAttribute("class", "game-x");
      }
      tdEl.appendChild(pEL);
    }
  }

  statsEl.innerHTML = ""
  const playerLabel = currentPlayer == 1 ? "O" : "X"

  const playerEl = document.createElement("p")
  playerEl.textContent = "Turn: " + playerLabel
  statsEl.appendChild(playerEl)

  const movesEl = document.createElement("p")
  movesEl.textContent = "Moves: " + movesCounter
  statsEl.appendChild(movesEl)

}

document.getElementById("board-table").addEventListener("click", (event) => {
  if (event.target.tagName == "TD") {
    if (winner) {
      return;
    }

    const trEl = event.target.parentNode;
    const trIndex = Array.from(tbodyEl.children).indexOf(trEl);

    const tdIndex = Array.from(trEl.children).indexOf(event.target);
    if (board[trIndex][tdIndex] > 0) {
      return;
    }
    board[trIndex][tdIndex] = currentPlayer;

    if (currentPlayer == 1) {
      currentPlayer = 2;
      movesCounter++;
    } else {
      currentPlayer = 1;
      movesCounter++;
    }

    drawBoard();

    //Win check
    winner = checkWinner();
    if (winner > 0) {
      alert("Player " + currentPlayer + " Wins");
      return
    }
    if (movesCounter == 9) {
      alert("Draw");
    }
  }
});

function resetBoard() {
  board = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ]
  currentPlayer = 2
  movesCounter = 0
  winner = false
  drawBoard()
}


//Start game
drawBoard();
