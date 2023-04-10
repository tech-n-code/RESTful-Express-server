console.log("Linked!")
// document.addEventListener("DOMContentLoaded", function() {

    let container = document.querySelector(".container");
    
    fetch("/api/pets")
    .then(function (response) {
        return response.json();
    })
    .then(function (pets) {
        console.log(pets);
        pets.forEach(function (pet) {
            console.log("Adding h2 for pet:", pet);
            container.innerHTML += `<h2>${pet.name}</h2>`;
        });
    });

// });