let container = document.querySelector(".container");

fetch("/api/pets")
.then(response => response.json())
.then(pets => {
    pets.forEach(pet => {
        container.innerHTML += `<h2>${pet.name}</h2>`;
    })
})