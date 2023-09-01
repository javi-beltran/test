
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.3.0/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCXp3rzknO9kNVXaP2rbCVzy1eo7eRe6zA",
  authDomain: "minas-b2376.firebaseapp.com",
  databaseURL: "https://minas-b2376-default-rtdb.firebaseio.com",
  projectId: "minas-b2376",
  storageBucket: "minas-b2376.appspot.com",
  messagingSenderId: "405588687302",
  appId: "1:405588687302:web:ee3467f2c3dc20e3299ac7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


import {getDatabase, ref, set, child, update, remove}
from "https://www.gstatic.com/firebasejs/10.3.0/firebase-database.js"

const db = getDatabase();
/////////////////////CAMPO A MANDAR
var nombre = document.getElementById("nombre");
var alias1 = document.getElementById("alias1");
var alias2 = document.getElementById("alias2");
var alias3 = document.getElementById("alias3");
var instagram = document.getElementById("instagram");
var twitter = document.getElementById("twitter");
var onlyFans = document.getElementById("onlyFans");
var enlaces = document.getElementById("enlaces");

//////////////////////////////////BOTONES
var botonagregar = document.getElementById("ins");
var botonselecionar = document.getElementById("sel");
var botonmodificar = document.getElementById("upt");
var botoneliminar = document.getElementById("del");

// INSERTAR LOS DATOS

function insertData(){
  set(ref(db,"Minas/"+ nombre.value),{
    // TIPOS DE CAMPO
    NOMBRE: nombre.value,
    ALIAS1: alias1.value,
    ALIAS2: alias2.value,
    ALIAS3: alias3.value,
    INSTAGRAM: instagram.value,
    TWITTER: twitter.value,
    ONLYFASN: onlyFans.value,
    ENLACES: enlaces.value
  })
  .then(()=>{
    alert("datos guardados EXITOSAMENTE");
  })
  .catch((error)=>{
    alert("datos NO GUARDADOS, ERROR" +error);
  });
}

// -------- EVENETOS DE LOS BOTONES

botonagregar.addEventListener('click',insertData);