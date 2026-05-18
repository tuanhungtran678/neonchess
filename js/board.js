```js
import { Chess }
from
"https://cdn.jsdelivr.net/npm/chess.js@1.0.0-beta.6/+esm";

const game =
new Chess();

const board =
document.getElementById(
"board"
);

const movesDiv =
document.getElementById(
"moves"
);

let selected =
null;

/* ========================================= */
/* PIECES */
/* ========================================= */

const pieces = {

wp:"assets/pieces/wp.png",
wr:"assets/pieces/wr.png",
wn:"assets/pieces/wn.png",
wb:"assets/pieces/wb.png",
wq:"assets/pieces/wq.png",
wk:"assets/pieces/wk.png",

bp:"assets/pieces/bp.png",
br:"assets/pieces/br.png",
bn:"assets/pieces/bn.png",
bb:"assets/pieces/bb.png",
bq:"assets/pieces/bq.png",
bk:"assets/pieces/bk.png"

};

/* ========================================= */
/* CREATE BOARD */
/* ========================================= */

window.createBoard =
()=>{

drawBoard();

};

function drawBoard(){

board.innerHTML =
"";

const state =
game.board();

for(let y=0;y<8;y++){

for(let x=0;x<8;x++){

const square =
document.createElement(
"div"
);

const file =
String.fromCharCode(
97+x
);

const rank =
8-y;

const pos =
file + rank;

square.className =
"square " +
(
(x+y)%2===0
? "light"
: "dark"
);

square.dataset.square =
pos;

square.addEventListener(

"click",

()=>{

clickSquare(pos);

}

);

const piece =
state[y][x];

if(piece){

const img =
document.createElement(
"img"
);

img.className =
"piece";

img.src =
pieces[
piece.color +
piece.type
];

img.draggable =
false;

square.appendChild(
img
);

}

board.appendChild(
square
);

}

}

updateMoves();

}

/* ========================================= */
/* CLICK */
/* ========================================= */

function clickSquare(pos){

clearHighlights();

if(selected === pos){

selected =
null;

return;

}

if(selected){

movePiece(
selected,
pos
);

return;

}

const piece =
game.get(pos);

if(
piece &&
piece.color === game.turn()
){

selected =
pos;

highlight(pos);

}

}

/* ========================================= */
/* MOVE */
/* ========================================= */

function movePiece(
from,
to
){

const target =
game.get(to);

const move =
game.move({

from:from,
to:to,
promotion:"q"

});

if(move){

if(target){

window.playCaptureSound();

}else{

window.playMoveSound();

}

selected =
null;

drawBoard();

}

}

/* ========================================= */
/* HIGHLIGHT */
/* ========================================= */

function highlight(pos){

const moves =
game.moves({

square:pos,
verbose:true

});

moves.forEach(m=>{

const sq =
document.querySelector(
'[data-square="' +
m.to +
'"]'
);

if(sq){

sq.classList.add(
"move"
);

}

});

const selectedSq =
document.querySelector(
'[data-square="' +
pos +
'"]'
);

if(selectedSq){

selectedSq.classList.add(
"selected"
);

}

}

function clearHighlights(){

document
.querySelectorAll(
".square"
)
.forEach(s=>{

s.classList.remove(
"move"
);

s.classList.remove(
"selected"
);

});

}

/* ========================================= */
/* MOVE HISTORY */
/* ========================================= */

function updateMoves(){

movesDiv.innerHTML =
game.history().join(
"<br>"
);

}

/* ========================================= */
/* PUBLIC */
/* ========================================= */

window.resetBoard =
()=>{

game.reset();

drawBoard();

};

window.showBestMove =
()=>{

alert(
"🤖 Stockfish coming soon!"
);

};
```
