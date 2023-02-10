// Option 1: add onclick directly in HTML
// <button onclick="document.body.style.backgroundColor = 'green'">Make green</button>

// Option 2: add onclick function in HTML and define function in JavaScript
// IMPORTANT
// <button onclick="makeRed()">Make red</button>
function makeRed(){
    document.body.style.backgroundColor = 'red'
}

// Option 3 A: get element by id and add function name without calling on onclick
// <button id="make-blue">Make Blue</button>
const makeBlueBtn = document.getElementById('make-blue')
makeBlueBtn.onclick = makeBlue;
function makeBlue(){
    document.body.style.backgroundColor = 'blue'
}

// Option 3 B: get element by id and add function directly on onclick
// <button id="make-purple">Make Purple</button>
const makePurpleBtn = document.getElementById('make-purple')
makePurpleBtn.onclick = function makePurple(){
    document.body.style.backgroundColor = 'purple'
}

// Option 4 A : using addEventListener  
const makePinkBtn = document.getElementById('make-pink')
makePinkBtn.addEventListener('click', makePink)
function makePink(){
    document.body.style.backgroundColor = 'pink'
}
// Option 4 B : using addEventListener  
const makeGoldenBtn = document.getElementById('make-goldenrod')
makeGoldenBtn.addEventListener('click', function makeGolden(){
    document.body.style.backgroundColor = 'goldenrod'
})

// Option 4 C : using addEventListener   IMPORTANT
document.getElementById('make-tomato').addEventListener('click', function(){
    document.body.style.backgroundColor = 'tomato'
})


