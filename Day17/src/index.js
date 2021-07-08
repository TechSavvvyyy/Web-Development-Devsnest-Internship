import React from "react";
import ReactDOM from "react-dom";
import  "./style.css";
import App from "./app1";
ReactDOM.render(
   <div className= "mainc">
   <div className = "container">
   <App img = "./image/2.jfif" name = "Hritik" chat = "Hi "></App>
   <App  img = "./image/1.jfif" name = "Sasuske" chat = " Hello"></App>
   <App  img = "./image/4.png" name = "Lipa" chat = "how u doing"></App>
   <App  img = "./image/3.jfif" name = "Devnest" chat = " Join Scrum"></App>
   <App   img = "./image/4.png" name = "Pratistha" chat = "143.."></App>
   </div>
   </div>,
 document.getElementsByTagName("BODY")[0]
);