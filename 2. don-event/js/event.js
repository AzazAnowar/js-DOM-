console.log('This is seperate dom event');

// option: 1 directly set by the element in html

// option: 2 onclick function
function makeYellowGreen(){
    document.body.style.backgroundColor = 'yellowgreen';
}

// option:3 
const makeBlueBtn = document.getElementById('make-blue');
makeBlueBtn.onclick = makeBlue ;

function makeBlue(){
    document.body.style.backgroundColor = 'blue';
}

// option: 3 another way
const purpleBtn = document.getElementById('make-purple');
purpleBtn.onclick = function makePurple(){
    document.body.style.backgroundColor = 'purple';
}

// option: 4
const pinkBtn = document.getElementById('make-pink');
pinkBtn.addEventListener('click', makePink);

function makePink(){
    document.body.style.backgroundColor = 'pink';
}

// option: 4 another
const makeGreenBtn = document.getElementById('make-green');
makeGreenBtn.addEventListener('click', function makeGreen(){
    document.body.style.backgroundColor = 'green';
});

// option: 4 mostly use
// document.getElementById('make-goldenrod').addEventListener('click', function(){})
document.getElementById('make-goldenrod').addEventListener('click', function(){
    document.body.style.backgroundColor = 'goldenrod';
});