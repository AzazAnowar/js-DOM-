const allLi = document.getElementsByTagName('li');
console.log(allLi);

const allTitles = document.getElementsByClassName('section-title');
console.log(allTitles);

const sectionTwo = document.getElementById('secound-section');
console.log(sectionTwo);

sectionTwo.style.color = 'white';
sectionTwo.style.backgroundColor = 'tomato';

// document.querySelectorAll
// document.querySelector

const secoundList = document.getElementById('secound-list');

const li = document.createElement('li');
li.innerText = 'My dynamic Item';

secoundList.appendChild(li);

const main = document.getElementById('main-container');
const section = document.createElement('section');

section.innerHTML = `
    <h1>My dynamic section</h1>
    <p>Extra text added inside paragraph</p>
    <ul>
        <li>Item-1</li>
        <li>Item-2</li>
        <li>Item-3</li>
        <li>Item-4</li>
    </ul>
`;

main.appendChild(section);