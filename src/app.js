import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function generateExcuse () {
  let who = ['El perro', 'Mi abuela', 'El cartero', 'Mi pájaro'];
  let action = ['se comió', 'orinó en', 'rompió', 'destrozó'];
  let what = ['mi tarea', 'mi teléfono', 'el auto'];
  let when = ['antes de la clase', 'mientras dormía', 'mientras hacía ejercicio', 'durante mi almuerzo', 'mientras rezaba'];

  let excuse = `${who[Math.floor(Math.random() * who.length)]} ${action[Math.floor(Math.random() * action.length)]} ${what[Math.floor(Math.random() * what.length)]} ${when[Math.floor(Math.random() * when.length)]}.`;

  console.log(excuse); // 

  document.getElementById("excuse").innerHTML = excuse; // 
  document.getElementById("newExcuseButton").addEventListener("click", generateExcuse)
};

