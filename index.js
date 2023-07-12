
const searchInput = document.querySelector('#search');
const dives = document.querySelectorAll('#movies');
console.log(dives)

searchInput.addEventListener('keyup', function(event) {
    const word = event.target.value.toLowerCase();
    
    dives.forEach( item => {
        item.querySelector("p").textContent.toLowerCase().includes(word) ? (item.style.display = "block") : (item.style.display = "none")
        console.log(item)
    })
})


