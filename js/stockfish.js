```js id="u8x4wr"
let stockfish =
null;

/* ========================================= */
/* LOAD ENGINE */
/* ========================================= */

try{

stockfish =
new Worker(
"./engine/stockfish-18-lite-single.js"
);

console.log(
"🤖 Stockfish Loaded"
);

}catch(err){

console.error(
"Stockfish failed:",
err
);

}

/* ========================================= */
/* BEST MOVE */
/* ========================================= */

window.getBestMove =
fen=>{

return new Promise(resolve=>{

if(!stockfish){

resolve(null);

return;

}

stockfish.postMessage(
"position fen " + fen
);

stockfish.postMessage(
"go depth 12"
);

stockfish.onmessage =
e=>{

const line =
e.data;

if(
line.startsWith(
"bestmove"
)
){

const move =
line.split(" ")[1];

resolve(move);

}

};

});

};
```
