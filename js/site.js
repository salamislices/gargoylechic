// site.js
// Author: Your Name
// Date: 2025-05-26

$(function() {
  // Conversation button text changes
  $("#make-convo").click(function(){
    const strings = [
      "I love you!",
      "loveeeeee <3",
      "Mi amor!",
      "I miss u!",
      "mwuah",
      "xoxoxoxoxoxo"
    ];
    const newText = strings[Math.floor(Math.random() * strings.length)];

    $("#output .text").remove();
    $("#output").append('<div class="text"><p>' + newText + '</p></div>');
  });
});

// Drawing Canvas Setup
const canvas = document.getElementById("drawCanvas");
const ctx = canvas.getContext("2d");
let drawing = false;

const colorPicker = document.getElementById("colorPicker");
const brushSize = document.getElementById("brushSize");
const clearCanvasBtn = document.getElementById("clearCanvasBtn");

function startPosition(e) {
  drawing = true;
  draw(e);
}
function finishedPosition() {
  drawing = false;
  ctx.beginPath();
}
function draw(e) {
  if (!drawing) return;
  // Get mouse position relative to canvas
  const rect = canvas.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  ctx.lineWidth = brushSize.value;
  ctx.lineCap = "round";
  ctx.strokeStyle = colorPicker.value;

  ctx.lineTo(x, y);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(x, y);
}

function clearCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.beginPath();
}

canvas.addEventListener("mousedown", startPosition);
canvas.addEventListener("mouseup", finishedPosition);
canvas.addEventListener("mouseout", finishedPosition);
canvas.addEventListener("mousemove", draw);

clearCanvasBtn.addEventListener("click", clearCanvas);

// ---------------------------
// Mini Block Blast Game Logic
// ---------------------------

const gridContainer = document.getElementById("blockBlastGrid");
const randomBlockBtn = document.getElementById("randomBlockBtn");
const resetGridBtn = document.getElementById("resetGridBtn");
const scoreDisplay = document.getElementById("score");

const ROWS = 10;
const COLS = 10;
let score = 0;

// Initialize grid cells
function createGrid() {
  gridContainer.innerHTML = "";
  for (let i = 0; i < ROWS * COLS; i++) {
    const cell = document.createElement("div");
    cell.classList.add("block-cell");
    cell.dataset.index = i;
    cell.addEventListener("click", () => toggleCell(cell));
    gridContainer.appendChild(cell);
  }
}

// Toggle cell fill on click
function toggleCell(cell) {
  cell.classList.toggle("filled");
  checkFullRows();
}

// Place a random filled cell on the grid
function placeRandomBlock() {
  const emptyCells = [...gridContainer.children].filter(cell => !cell.classList.contains("filled"));
  if (emptyCells.length === 0) return;
  const randomIndex = Math.floor(Math.random() * emptyCells.length);
  emptyCells[randomIndex].classList.add("filled");
  checkFullRows();
}

// Check for any full rows and clear them
function checkFullRows() {
  let rowsCleared = 0;

  for (let r = 0; r < ROWS; r++) {
    let fullRow = true;
    for (let c = 0; c < COLS; c++) {
      const index = r * COLS + c;
      if (!gridContainer.children[index].classList.contains("filled")) {
        fullRow = false;
        break;
      }
    }
    if (fullRow) {
      // Clear the full row
      for (let c = 0; c < COLS; c++) {
        const index = r * COLS + c;
        gridContainer.children[index].classList.remove("filled");
      }
      rowsCleared++;
    }
  }

  if (rowsCleared > 0) {
    score += rowsCleared * 10;
    scoreDisplay.textContent = score;
  }
}

// Reset the grid and score
function resetGrid() {
  [...gridContainer.children].forEach(cell => cell.classList.remove("filled"));
  score = 0;
  scoreDisplay.textContent = score;
}

// Initialize the game
createGrid();

randomBlockBtn.addEventListener("click", placeRandomBlock);
resetGridBtn.addEventListener("click", resetGrid);
