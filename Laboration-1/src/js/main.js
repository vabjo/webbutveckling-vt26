/*Program som visar en bild när knappeen på index sidan klickas*/
let button = document.querySelector(".btn");
let jam = document.querySelector(".jammed");

button.addEventListener("click", () => {
    if (jam.style.display === "none") {
        jam.style.display = "block";
    } else {
        jam.style.display = "none";
    }
});