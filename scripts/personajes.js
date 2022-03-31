import { students } from "./data.js";


let btn =document.getElementById("btn")
let form =document.getElementById("formu")
let estudiantes; 
btn.addEventListener("click" , aleatorio)

function aleatorio(){
    let rand = Math.floor(Math.random()*13)
    estudiantes= students[rand]; 
    cartas()
    
}

function cartas(){
    
    form.innerHTML = `
    <div class="logobtn">
    <img src="${estudiantes["logo"]}" alt="" class="logo">
    <div class="info"> 
        <img src="${estudiantes["image"]}" alt="" class="imagenperso">
        <h2 class="nombre">${estudiantes["name"]}</h2>
        <h3 class="casa">${estudiantes["house"]} </h3>
    </div>
    <button id="btn">Nuevo personaje</button>
</div>
    `  
}