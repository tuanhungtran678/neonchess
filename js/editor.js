```js
const editorModal =
document.getElementById(
"editorModal"
);

const videoUpload =
document.getElementById(
"videoUpload"
);

const audioUpload =
document.getElementById(
"audioUpload"
);

const videoPreview =
document.getElementById(
"videoPreview"
);

/* ========================================= */
/* OPEN / CLOSE */
/* ========================================= */

window.openEditor =
()=>{

editorModal.style.display =
"flex";

};

window.closeEditor =
()=>{

editorModal.style.display =
"none";

};

/* ========================================= */
/* VIDEO */
/* ========================================= */

videoUpload.addEventListener(

"change",

e=>{

const file =
e.target.files[0];

if(!file) return;

const url =
URL.createObjectURL(file);

videoPreview.src =
url;

videoPreview.play();

}

);

/* ========================================= */
/* AUDIO */
/* ========================================= */

audioUpload.addEventListener(

"change",

e=>{

const file =
e.target.files[0];

if(!file) return;

window.customMoveSound =
URL.createObjectURL(file);

alert(
"🎵 Custom move sound loaded!"
);

}

);
```
