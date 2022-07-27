const givenArray = [34, -3, 65, 454];
const givenArray1 = [45, 65, 32, 456];
const filterArray = [
    { "name": "Shanghai", "population": 24300000 },
    { "name": "Los Angeles", "population": 3792621 },
    { "name": "New Delhi", "population": 21800000 },
    { "name": "Mumbai", "population": 18400000 },
    { "name": "Chicago", "population": 2695598 },
    { "name": "Houston", "population": 2100263 },
];
const sortArray = [4, 5, 2, 1, 3];
const sortArray1 = [
    { "name": "Yosha Gamuda", "phone": 1234567890 },
    { "name": "Portia Umeng", "phone": 4894759371 },
    { "name": "Yosha Gamuda", "phone": 1234567890 },
    { "name": "Portia Umeng", "phone": 4894759371 }
];


//Array.prototype.map
const newArray = givenArray.map(a => a - 3);
console.log('map: ', givenArray, '=>', newArray);


//Array.prototype.filter
const newArray1 = givenArray.filter(el => el + 5 > 5);
console.log('filter: ', givenArray, '=>', newArray1);


const newArray2 = filterArray.filter(({ population }) => population >= 5000000);
console.log('filter: ', filterArray, '=>', newArray2);


//Array.prototype.reduce
//calculating an average
const average = (givenArray.reduce((acc, curr) => acc + curr)) / givenArray.length;
console.log('reduce: ', givenArray, '=>', average);


//Array.prototype.forEach
const newArray4 = givenArray.forEach(elem => console.log('forEach loop: ', elem));

//Array.prototype.some and Array.prototype.every
//some
const a = givenArray.some(elem => elem < 5);
const b = givenArray1.some(elem => elem < 5);
console.log('some: ', a, b);
//every
const every = givenArray.every(elem => elem > 5);
const every1 = givenArray1.every(elem => elem > 5);
console.log('every: ', every, every1);

//flat et flaMap a retravailler psk j'ai rien compris

//find

const chic = filterArray.find(({ name }) => name === 'Chicago');
console.log('find :', chic);

//sort 

sortArray.sort((a, b) => a - b);
console.log('sort: ', sortArray);

sortArray1.sort(({name1}, {name2}) => {
    name1 = name1.toUpperCase();
    name2 = name2.toUpperCase();
    return (name1 < name2) ? -1 : (name1 > name2) ? 1 : 0;
  });

//console.log('sort: ',sortArray1); problem with toUpperCase method


