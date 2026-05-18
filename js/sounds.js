```js id="w7e9op"
const moveSound =
document.getElementById(
"moveSound"
);

const captureSound =
document.getElementById(
"captureSound"
);

/* ========================================= */
/* DEFAULT SOUNDS */
/* ========================================= */

moveSound.src =
"https://images.chesscomfiles.com/chess-themes/sounds/_MP3_/default/move-self.mp3";

captureSound.src =
"https://images.chesscomfiles.com/chess-themes/sounds/_MP3_/default/capture.mp3";

/* ========================================= */
/* PLAY */
/* ========================================= */

window.playMoveSound =
()=>{

if(window.customMoveSound){

moveSound.src =
window.customMoveSound;

}

moveSound.currentTime =
0;

moveSound.play();

};

window.playCaptureSound =
()=>{

captureSound.currentTime =
0;

captureSound.play();

};
```
