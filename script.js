const firstName = document.getElementById("name");
const age = document.getElementById("age");
const color = document.getElementById("color");
const nameIn = document.querySelector(".nameIn");
const ageIn = document.querySelector("ageIn");
const colorIn = document.querySelector("colorIn");
 const card = document.getElementById("card1");
 const namePlace = document.getElementById("name-place");
 const agePlace = document.getElementById("age-place");
 function displayCard(){
card.style.backgroundColor = color.value;
namePlace.innerHTML = name.value
agePlace.innerHTML = age.value
 }