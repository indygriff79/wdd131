myInfo = {
    name:'Indy G',
    photo: 'images/images/Screenshot_20231228_210216_Photos.jpg',
    favoriteFoods: ['Burritos, pasta, potatoes, bread, fruits, veggies'],
    placesLived: [
        {
            place:'Mesa, AZ',
            length: '23 years'
        },
        {
            place:'Anaheim, CA',
            length:'1.5 years'
        }
    ]
};

let favoriteFood1 = document.createElement('li');
burrito.textContent = myInfo.favoriteFoods[0];

let favoriteFood2 = document.createElement('li');
pasta.textContent = myInfo.favoriteFoods[1];

let favoriteFood3 = document.createElement('li');
potatoes.textContent = myInfo.favoriteFoods[2];

let favoriteFood4 = document.createElement('li');
bread.textContent = myInfo.favoriteFoods[3];

let favoriteFood5 = document.createElement('li');
fruits.textContent = myInfo.favoriteFoods[4];

let favoriteFood6 = document.createElement('li');
veggies.textContent = myInfo.favoriteFoods[5];


document.querySelector('#favorite-foods').appendChild(burrito);
document.querySelector('#favorite-foods').appendChild(pasta);
document.querySelector('#favorite-foods').appendChild(potatoes);
document.querySelector('#favorite-foods').appendChild(bread);
document.querySelector('#favorite-foods').appendChild(fruits);
document.querySelector('#favorite-foods').appendChild(veggies);


// with .foreach
const foodsElements = document.querySelector('#favorite-foods');
function ceateandAppendFoodItem(food) {
    let favoriteFood = document.createElement('li');
    favoriteFood.textContent = food;
    foodsElements.appendChild(favoriteFood);
}
myInfo.favoriteFoods.forEach(createAndAppendFoodItem);


// with .map
const foodsElement1 = document.querySelector('#favorite-foods');
function mapFoodItem(food) {
    let favoriteFood = document.createElement('li');
    favoriteFood.textContent = food;
    return favoriteFood;
}

//reusable!

myInfo = {
    name:'Indy G',
    photo:'images/images/Screenshot_20231228_210216_Photos.jpg',
    favoriteFoods: ['burrito', 'pasta', 'potatoes', 'bread', 'fruits', 'veggies'],
    hobbies: ['youtube', 'hanging out with family','reading about color theory' ],
    placesLived: [
        {
            place: 'Mesa, AZ',
            length: '23 years',
        },
        {
            place: 'Anahiem, CA',
            length: '1.5 years'
        },
    ],
};

const foodsElement = document.querySelector('#favorite-foods');
const placesElement = doument.querySelector('#places-lived');


function generateListMarkup(list, templateCallBack) {
    const htmlList = list.map(templateCallBack);
    return htmlList.join('');
}

function foodsTemplate(food) {
    return <li>${food}</li>;
}

function placesTemplate(place){
    return '<dt>${place.place}</dt><dd>${place.length}</dd>';
}

foodsElement.innerHTML = generateListMarkup(
    myInfo.favoriteFoods,
    foodsTemplate
);
placesElement.innerHTML = generateListMarkup(
    myInfo.placesLived,
    placesTemplate
);