```js
import "./board.js";
import "./editor.js";
import "./sounds.js";
import "./ui.js";
import "./firebase.js";
import "./stockfish.js";
import "./drag.js";

/* ========================================= */
/* BUTTONS */
/* ========================================= */

const newGameBtn =
document.getElementById(
"newGameBtn"
);

const bestMoveBtn =
document.getElementById(
"bestMoveBtn"
);

const editorBtn =
document.getElementById(
"editorBtn"
);

const closeEditorBtn =
document.getElementById(
"closeEditorBtn"
);

/* ========================================= */
/* EVENTS */
/* ========================================= */

if(newGameBtn){

newGameBtn.addEventListener(

"click",

()=>{

window.resetBoard();

}

);

}

if(bestMoveBtn){

bestMoveBtn.addEventListener(

"click",

async()=>{

if(window.getBestMove){

const fen =
window.game.fen();

const move =
await window.getBestMove(
fen
);

alert(
"🤖 Best Move: " +
move
);

}

}

);

}

if(editorBtn){

editorBtn.addEventListener(

"click",

()=>{

window.openEditor();

}

);

}

if(closeEditorBtn){

closeEditorBtn.addEventListener(

"click",

()=>{

window.closeEditor();

}

);

}

/* ========================================= */
/* START */
/* ========================================= */

window.addEventListener(

"load",

()=>{

if(window.createBoard){

window.createBoard();

}

console.log(
"♟ NeonChess Loaded"
);

}

);
```
