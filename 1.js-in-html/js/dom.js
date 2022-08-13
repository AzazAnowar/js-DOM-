const liCollection = document.getElementsByTagName('li');
// console.log(liCollection);
for(const li of liCollection){
    // console.log(li);
    // console.log(li.innerText);
}
// console.log(typeof liCollection);

const allH1 = document.getElementsByTagName('h1');
for(const h1 of allH1){
    // console.log(h1);
    // console.log(h1.innerText);
}

// calling by id
const likeHeading = document.getElementById('fruits-title');
const placeHeading = document.getElementById('places-title');

//console.log(likeHeading);
// console.log(placeHeading.innerText);

// calling by class
const importentPlaces = document.getElementsByClassName('importent-places');
for(const place of importentPlaces){
    // console.log(place.innerText);
}

// changing innerText using javascript

likeHeading.innerText = 'Fruits name changed by js';

// query secletor all
const fruitList = document.querySelectorAll('#fruits-title');
// console.log(fruitList);
// console.log(document.querySelectorAll('.fruits-container'));
// console.log(document.querySelectorAll('.fruits-container li'));

const someLi = document.querySelectorAll('.fruits-container li')
// console.log(someLi);
for(const li of someLi){
    // console.log(li);
    // console.log(li.innerText);
}
// console.log(document.querySelector('.fruits-container li').innerText);