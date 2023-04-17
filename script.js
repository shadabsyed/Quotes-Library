const btn = document.querySelector("button");
const p = document.querySelector("p");
const API = "http://api.quotable.io/random";

btn.addEventListener("click", () => {
  fetch(API)
    .then((resp) => resp.json())
    .then((data) => {
      p.innerText = data.content;
    })
    .catch(() => alert("Error fetching quote!"));
});
