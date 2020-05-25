"use strict";

let numberOfFilms;

// function start(){
//     numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
    
//     while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
//         numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
//     }
// }

// start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function() {
        numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
    
        while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
            numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
        }
    },
    rememberMyFilms: function() {
        for(let i = 0; i < 2; i++) {
            const a = prompt("Один из последних просмотренных фильмов",""),
                  b = prompt("На сколько оцените его?","");
    
            if (a != null && b != null && a != "" && b != "" && a.length < 50) {
                this.movies[a] = b;
                console.log("done");
            } 
            else {
                console.log("error");
                i--;
            }
        }
    },
    detectPersonalLevel: function() {
        if(this.count < 10) {
            alert("Просмотрено довольно мало фильмов");
        } 
        else if(10 <= this.count <= 30) { //else if(personalMovieDB.count >= 10 && personalMovieDB.count < 30)
            alert("Вы-классический зритель");
        } 
        else if(this.count > 30) {
            alert("Вы-киноман");
        }
        else {
            alert("Произошла ошибка");
        }
    },
    showMyDB: function(privat) {
        if(!privat){
            console.log(personalMovieDB);
        } 
        else {
            console.log("Error");
        }
    },
    writeYourGenres: function(arr) {
        for(let i = 0; i < 3; i++) {
            
            let a = prompt(`Ваш любимый жанр под номером ${i+1} `,"");
            
            if(a != null && a != "") {
                this.genres[i] = a;
            } 
            else{
                i--;
            }
        }
        arr.forEach((item, i) => {
            console.log(`Любимый жанр №${i+1} - это ${item}`);
        });
    },
    toggleVisibleMyDB: function(a) {
        if(a) {
            a = false;
        } 
        else if(!a) {
            a = true;
        }
        console.log(a);
    }
};

personalMovieDB.start();
personalMovieDB.rememberMyFilms();
personalMovieDB.detectPersonalLevel();
personalMovieDB.showMyDB(personalMovieDB.privat); 
personalMovieDB.writeYourGenres(personalMovieDB.genres);
personalMovieDB.toggleVisibleMyDB(personalMovieDB.privat);

// function rememberMyFilms() {
//     for(let i = 0; i < 2; i++) {
//         const a = prompt("Один из последних просмотренных фильмов",""),
//               b = prompt("На сколько оцените его?","");

//         if (a != null && b != null && a != "" && b != "" && a.length < 50) {
//             personalMovieDB.movies[a] = b;
//             console.log("done");
//         } else {
//             console.log("error");
//             i--;
//         }
//     }
// }

// rememberMyFilms();

// function detectPersonalLevel() {
//         if(personalMovieDB.count < 10) {
//             alert("Просмотрено довольно мало фильмов");
//         } else if(10 <= personalMovieDB.count <= 30) { 
//             alert("Вы-классический зритель");
//         } else if(personalMovieDB.count > 30) {
//             alert("Вы-киноман");
//         }else {
//             alert("Произошла ошибка");
//         }
// }

// detectPersonalLevel();


// function showMyDB(privat){
//     if(!privat){
//         console.log(personalMovieDB);
//     } else {
//         console.log("Error");
//     }
// }

// showMyDB(personalMovieDB.privat);

// function writeYourGenres() {
//     for(let i = 0; i < 3; i++) {
//         personalMovieDB.genres[i] = prompt(`Ваш любимый жанр под номером ${i+1} `,"");
//     }
// }

// writeYourGenres();