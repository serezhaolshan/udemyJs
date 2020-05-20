"use strict";

const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");


const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};



console.log(personalMovieDB);

for(let i = 0; i < 2; i++) {
    const a = prompt("Один из последних просмотренных фильмов",""),
          b = prompt("На сколько оцените его?","");
    if (a != null && b != null && a != "" && b != "" && a.length < 50) {
        personalMovieDB.movies[a] = b;
        console.log("done");
    } else {
        console.log("error");
        i--;
    }

}


if(personalMovieDB.count < 10) {
    alert("Просмотрено довольно мало фильмов");
} else if(10 <= personalMovieDB.count <= 30) { //else if(personalMovieDB.count >= 10 && personalMovieDB.count < 30)
    alert("Вы-классический зритель");
} else if(personalMovieDB.count > 30) {
    alert("Вы-киноман");
}else {
    alert("Произошла ошибка");
}

function showMyDB(privat){
    if(!privat){
        console.log(personalMovieDB);
    } else {
        console.log("Error");
    }
}
showMyDB(personalMovieDB.privat);

function writeYourGenres(){
    for(let i = 0; i < 4; i++) {
        personalMovieDB.genres[i] = prompt(`Ваш любимый жанр под номером ${i+1} `,"");
    }
}
writeYourGenres();