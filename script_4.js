const entrepreneurs = [
    { first: 'Steve', last: 'Jobs', year: 1955 },
    { first: 'Oprah', last: 'Winfrey', year: 1954 },
    { first: 'Bill', last: 'Gates', year: 1955 },
    { first: 'Sheryl', last: 'Sandberg', year: 1969 },
    { first: 'Mark', last: 'Zuckerberg', year: 1984 },
    { first: 'Beyonce', last: 'Knowles', year: 1981 },
    { first: 'Jeff', last: 'Bezos', year: 1964 },
    { first: 'Diane', last: 'Hendricks', year: 1947 },
    { first: 'Elon', last: 'Musk', year: 1971 },
    { first: 'Marissa', last: 'Mayer', year: 1975 },
    { first: 'Walt', last: 'Disney', year: 1901 },
    { first: 'Larry', last: 'Page', year: 1973 },
    { first: 'Jack', last: 'Dorsey', year: 1976 },
    { first: 'Evan', last: 'Spiegel', year: 1990 },
    { first: 'Brian', last: 'Chesky', year: 1981 },
    { first: 'Travis', last: 'Kalanick', year: 1976 },
    { first: 'Marc', last: 'Andreessen', year: 1971 },
    { first: 'Peter', last: 'Thiel', year: 1967 }
  ];



console.log("Filtre dans cette liste les entrepreneurs qui sont nés dans les années 70 ;")

for (i = 0; i < entrepreneurs.length; i++) {
    if (entrepreneurs[i].year < 1980 && entrepreneurs[i].year > 1969) {
        console.log(entrepreneurs[i])
    }
 }
 

 
console.log("Sors une array qui contient le prénom et le nom des entrepreneurs ;")
 
 name_array = []
 
 for (i = 0; i < entrepreneurs.length; i++) {
     name = entrepreneurs[i].first + " " + entrepreneurs[i].last
     name_array.push(name)
 }
 
 console.log(name_array)
 
 

console.log("Quel âge aurait chaque inventeur aujourd'hui ?")
 
 for (i = 0; i < entrepreneurs.length; i++) {
    let age = 2020 - entrepreneurs[i].year
    console.log(name_array[i] + " : " + age + " ans")
 }
 

 
console.log("Trie les entrepreneurs par ordre alphabétique du nom de famille ;")
 
 name_alpha_array = []
 
 for (i = 0; i < entrepreneurs.length; i++) {
     name = entrepreneurs[i].last + " " + entrepreneurs[i].first
     name_alpha_array.push(name)
 }
 
 console.log(name_alpha_array.sort())