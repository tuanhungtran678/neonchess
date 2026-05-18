```js id="ej6wvm"
/* ========================================= */
/* SIMPLE MULTIPLAYER PLACEHOLDER */
/* ========================================= */

window.createRoom =
()=>{

const roomId =
Math.random()
.toString(36)
.substring(2,8);

alert(
"🌍 Room Created:\n" +
roomId
);

};

window.joinRoom =
()=>{

const roomId =
prompt(
"Enter Room ID"
);

if(!roomId) return;

alert(
"Joined Room: " +
roomId
);

};
```
