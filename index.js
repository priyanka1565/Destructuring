
    //object destructuring

var person = {
    name: "priyanka",
    age: 90,
    city: "pune",
    gender:"female"
}
const { name, age, city, gender } = person;
console.log(name, age, city, gender);


var person2 = {
    name1: "pooja",
    age1: 80,
    gender1: "male",
    city1:"chenai"
}
const { name1, age1, gender1, city1 } = person2;
console.log(name1, age1, gender1, city1);


//Array Destructuring

var arr = ["Priyanka", "INDIA", "Pune"];

const [ namee, country, cityy ] = arr;
console.log(namee, country, cityy);


var arr_1 = ["Pooja", "INDIA", "Chenai"];
const [name_2, country_2, city_2] = arr_1;
console.log(name_2, country_2, city_2);



