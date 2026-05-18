```js
import "./board.js";
import "./editor.js";
import "./sounds.js";
import "./ui.js";
import "./firebase.js";

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

newGameBtn.addEventListener(

"click",

()=>{

window.resetBoard();

}

);

bestMoveBtn.addEventListener(

"click",

()=>{

window.showBestMove();

}

);

editorBtn.addEventListener(

"click",

()=>{

window.openEditor();

}

);

closeEditorBtn.addEventListener(

"click",

()=>{

window.closeEditor();

}

);

/* ========================================= */
/* START */
/* ========================================= */

window.addEventListener(

"load",

()=>{

window.createBoard();

console.log(
"♟ NeonChess Loaded"
);

}

);
```
