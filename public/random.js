"use strict";

/* Asynchronously handle the event */
async function getData(e) {
  let API;
  e.preventDefault();

  if (e.target.id === "express") {
    API = "/random-person";
  } else {
    API = "https://randomuser.me/api/";
  }
    return fetch(API)
    .then((resp) => resp.json())
    .then((json) => {
      if (json.error) {
        showError(json.error);
      } else if (json.results) {
        useData(json);
      }
    })
    .catch((err) => console.error(err));
}
/* Create a node and display the string that represents the person.*/
function useData(data) {
  const people = document.getElementById("people");
  const person = data.results[0];
  const tr = document.createElement("tr");
  const tableCells = document.createDocumentFragment();

  const td1 = document.createElement("td");
  td1.textContent = `${person.name.first} ${person.name.last}`;
  tableCells.appendChild(td1);

  const td2 = document.createElement("td");
  td2.textContent = `${person.phone}`;
  tableCells.appendChild(td2);

  const td3 = document.createElement("td");
  td3.textContent = ` ${person.email}`;
  tableCells.appendChild(td3);

  tr.appendChild(tableCells);
  people.appendChild(tr);
}

/* Show server error */
function showError(err) {
  const people = document.getElementById("people");
  people.textContent = err;
}

/* Add an event listener for the buttons */
document.addEventListener("DOMContentLoaded", () => {
  const directLink = document.getElementById("direct");
  const expressLink = document.getElementById("express");
  directLink.addEventListener("click", getData);
  expressLink.addEventListener("click", getData);
});
