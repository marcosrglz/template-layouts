let board = [
  [
    0, 0, 0
  ],
  [
    0, 0, 0
  ],
  [
    0, 0, 0
  ]
]

const tbodyEl = document.querySelector("tbody")

let currentPlayer = 2;

function drawBoard(){
  let boardResult = [[]]
  tbodyEl.innerHTML = ""

  for(let i=0; i<board.length; i++) {
    const trEl = document.createElement("tr")
    tbodyEl.appendChild(trEl)
    for(let j=0; j<board[i].length; j++) {
      const tdEl = document.createElement("td")
      trEl.appendChild(tdEl)
      const imgEl = document.createElement("img")
      if(board[i][j] == 0) {
        tdEl.textContent = ""
      } else if(board[i][j] == 1) {
        imgEl.setAttribute("class", "game-circle")
      } else if(board[i][j] == 2) {
        imgEl.setAttribute("class", "game-x")
      }
      tdEl.appendChild(imgEl)
    }
  }
}

document.getElementById("board-table").addEventListener("click", (event) => {
  if(event.target.tagName == "TD") {
    const trEl = event.target.parentNode
    const trIndex = Array.from(tbodyEl.children).indexOf(trEl)

    const tdIndex = Array.from(trEl.children).indexOf(event.target)
    if(board[trIndex][tdIndex] > 0) {
      return
    }
    board[trIndex][tdIndex] = currentPlayer;

    if(currentPlayer == 1){
      currentPlayer = 2
    } else {
      currentPlayer = 1
    }
    
    drawBoard()
    
  }
})

//Start game
drawBoard()
//finishGame()