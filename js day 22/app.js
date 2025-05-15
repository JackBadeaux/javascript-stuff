// ! Prob 1
const button = document.querySelectorAll("tabBtn")

buttons.forEach(function(button) {
  button.addEventListener("click", function() {
    button.classList.add("active"); 
  });
});



// ! prob 2
// const cardContainer = document.getElementById("cardContainer")
// const templateCard = document.getElementById("templateCard")