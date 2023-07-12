/* const image = document.querySelector("img");
const btn = document.querySelector("#submit");


btn.addEventListener('click', () => {
    image.style.display = 'none';
    btn.classList.add('colorChange');
    btn.innerText = 'Double Click'
})
btn.addEventListener('dblclick', () => {
    image.style.display = 'block';
    btn.classList.remove('colorChange');
    btn.innerText = 'Click here ';
}) 

const movies = ["Sex and the City", "Serendipity", "Breakfast at Tiffany's"];

const text = movies.includes('Sex and the City') ? "Yes" : "No"
console.log(text)
const next = movies.includes('How to lose a guy in 10 days?') ? "I'm happy" : "I'm sad";
console.log(next)

let age = 12;
let test = age >= 18 ? 'Hey!' : 'Buy';
console.log(test); // Buy

//let ageTwo = 26;
//let testTwo = age <= 18 ? 'Hey!' : 'Buy';
//console.log(testTwo); 

const movies = ["Sex and the City", "Serendipity", "Breakfast at Tiffany's"];

const text = movies.includes('Sex and the City') ? 'It is here' : 'It is not here';
console.log(text);

const next = movies.includes('How to lose a guy in 10 days?') ? 'It is here' : 'It is not here';
console.log(next); 

const sentence = 'I love Mike';
const word = sentence.startsWith('I');
console.log(word);

const sentenceTwo = 'I love Mike';
const wordTwo = sentence.endsWith('Bob');
console.log(wordTwo); */


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


