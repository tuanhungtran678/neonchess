```js id="z7af5x"
import {
initializeApp
}
from
"https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";

import {

getAuth,
GoogleAuthProvider,
signInWithPopup,
signOut,
onAuthStateChanged

}
from
"https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js";

/* ========================================= */
/* FIREBASE CONFIG */
/* ========================================= */

const firebaseConfig = {

  apiKey: "AIzaSyByZbESWCAXypIJKBUNIm6KDmcXWX7SMgk",
  
  authDomain: "neonchess-df7aa.firebaseapp.com",
  
  databaseURL: "https://neonchess-df7aa-default-rtdb.firebaseio.com",
  
  projectId: "neonchess-df7aa",
  
  storageBucket: "neonchess-df7aa.firebasestorage.app",
  
  messagingSenderId: "784833820179",
  
  appId: "1:784833820179:web:3613d907d2a5b321bff1e6",
  
  measurementId: "G-LBDENJ65N7"

};

/* ========================================= */
/* INIT */
/* ========================================= */

const app =
initializeApp(
firebaseConfig
);

const auth =
getAuth(app);

const provider =
new GoogleAuthProvider();

/* ========================================= */
/* ELEMENTS */
/* ========================================= */

const loginBtn =
document.getElementById(
"loginBtn"
);

const avatar =
document.getElementById(
"avatar"
);

const username =
document.getElementById(
"username"
);

const email =
document.getElementById(
"email"
);

/* ========================================= */
/* LOGIN */
/* ========================================= */

loginBtn.addEventListener(

"click",

async()=>{

try{

await signInWithPopup(
auth,
provider
);

}catch(err){

console.error(err);

alert(
"❌ Login failed"
);

}

}

);

/* ========================================= */
/* USER */
/* ========================================= */

onAuthStateChanged(

auth,

user=>{

if(user){

avatar.src =
user.photoURL;

username.innerText =
user.displayName +
" 🇻🇳";

email.innerText =
user.email;

loginBtn.innerText =
"🚪 Logout";

loginBtn.onclick =
()=>{

signOut(auth);

};

}else{

avatar.src =
"assets/images/default-avatar.png";

username.innerText =
"Guest 🇻🇳";

email.innerText =
"Not logged in";

loginBtn.innerText =
"🔐 Login Google";

}

}

);
```
