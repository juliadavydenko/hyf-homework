const movies = require("./data").movies;
alert("hello");

//-shortest movie names

const filtered = movies.filter( movie =>  movie.title.length < 2);
console.log(filtered[0].title, filtered[1].title, filtered[2].title);

const filteredTitles = "''" + filtered[0].title + "''" + "," + "''" + filtered[1].title + "''" + "," + "''" + filtered[2].title + "''";
document.getElementById("shortest").innerHTML = filteredTitles;

//-longest movie names
const filteredLong = movies.filter( movie =>  movie.title.length > 70);
const filteredLongTitles = "''" + filteredLong[0].title + "''" + "," + "''" + filteredLong[1].title + "''" + "," + "''" + filteredLong[2].title + "''";
document.getElementById("longest").innerHTML = filteredLongTitles;

//made between 1980-1989
const years = movies.filter( movie =>  movie.year >= 1980 && movie.year <= 1989);
//console.log(years);
const filteredYears = "''" + years[0].title + "''" + "," + "''" + years[1].title + "''" + "," + "''" + years[2].title + "''" + "''" + years[3].title + "''" + "," + "''" + years[4].title + "''" + "," + "''" + years[5].title +"''" + +"''" + years[6].title + "''" + "," + "''" + years[7].title + "''" + "," + "''" + years[8].title + "''" + "''" + years[9].title + "''" + "," + "''" + years[10].title + "''" + "," + "''" + years[11].title + "''" + years[12].title + "''" + "," + "''" + years[13].title + "''" + "," + "''" + years[14].title + "''" + "''" + years[15].title + "''" + "," + "''" + years[16].title + "''";
document.getElementById("years").innerHTML = filteredYears;

//6



//let shortTitles = filtered.toString();
//console.log(Array.prototype.toString.call(filtered));
//str = JSON.stringify(filtered);
//console.log(str);
