// this is the fetch logic 
let url = "https://swapi.info/api/people/1"
function getData() {
    fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log(data);
        })
        .catch(error =>{
            console.log(error);
        })
    
}
// makes the button do something
document.getElementById("Characters").addEventListener("click",getData)