```js id="mx3g4v"
let draggedPiece =
null;

let offsetX =
0;

let offsetY =
0;

/* ========================================= */
/* ENABLE DRAG */
/* ========================================= */

document.addEventListener(

"pointerdown",

e=>{

const piece =
e.target.closest(
".piece"
);

if(!piece) return;

draggedPiece =
piece;

const rect =
piece.getBoundingClientRect();

offsetX =
e.clientX - rect.left;

offsetY =
e.clientY - rect.top;

piece.classList.add(
"dragging"
);

piece.style.position =
"fixed";

piece.style.zIndex =
9999;

}

);

/* ========================================= */
/* MOVE */
/* ========================================= */

document.addEventListener(

"pointermove",

e=>{

if(!draggedPiece) return;

draggedPiece.style.left =
(
e.clientX - offsetX
) + "px";

draggedPiece.style.top =
(
e.clientY - offsetY
) + "px";

}

);

/* ========================================= */
/* DROP */
/* ========================================= */

document.addEventListener(

"pointerup",

()=>{

if(!draggedPiece) return;

draggedPiece.classList.remove(
"dragging"
);

draggedPiece.style.position =
"";

draggedPiece.style.left =
"";

draggedPiece.style.top =
"";

draggedPiece.style.zIndex =
"";

draggedPiece =
null;

}
);
```
