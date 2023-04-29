"use strict";
// Adapted from CS290 Assignment 5 project file
// Date: November 2022
// Authors: Pam Van Londen, Melanie Archer

/* Asynchronously handle the event */
async function getData(e) {
  let API = "/random-person";
  e.preventDefault();

    return fetch(API)
    .then((resp) => resp.json())
    .then((json) => {
      if (json.error) {
        console.log(json.error);
      } else if (json.results) {
        return json.results;
      }
    })
    .catch((err) => console.error(err));
}

/* Add an event listener for the button */
document.addEventListener("DOMContentLoaded", () => {
  const directLink = document.getElementById("direct");
  directLink.addEventListener("click", getData);
});
