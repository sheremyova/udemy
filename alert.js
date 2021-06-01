"use strict";

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
 
let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const firstAnswer = prompt('Введите название одного из последних просмотренных фильмов', ''),
      secondAnswer = prompt('Какую оценку ему поставите?', ''),
      thirdAnswer = prompt('Введите название одного из последних просмотренных фильмов', ''),
      fourthAnswer = prompt('Какую оценку ему поставите?', '');


personalMovieDB.movies[firstAnswer] = secondAnswer;
personalMovieDB.movies[thirdAnswer] = fourthAnswer;

console.log(personalMovieDB);



// alert("Я JavaScript!"); 
// let admin;
// let name = "Джон";
// admin = name; 
//  alert(admin);

//  let ourPlanet
//  let currentUserName

// let name = prompt('Как тебя зовут?', '');
// alert (name);

// let count = 1;
// let result = count++;
// alert(result);

// let answer = prompt('Какое «официальное» название JavaScript?', '');

// if (answer == 'ECMAScript') {
//   alert('Верно!');
// }
// else {
//   alert ('Не знаете? ECMAScript!');
// }

// let number = prompt('Введите число', 0);

// if (number > 0) {
//     alert(1);
// } 
// else if (number < 0) {
//     alert(-1);
// }
// else {
//     alert(0);
// }

const a = 1;
console.log(a === 2 || 3);