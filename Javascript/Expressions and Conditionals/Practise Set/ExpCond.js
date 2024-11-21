//Create a variable of type string and try to add a number to it.
let a = "Kalpit"
let b = 1
let c = a+b;
console.log(c);


//Use typeof operator to find the datatype of the string in last question
console.log(typeof(c));


//Create a const object in js.Can you change it to hold a number later?
const stnum = {
    name:"Kalpit",
    role_number:5,
    address:"Mumbai"
}

stnum.role_number = 10;
console.log(stnum);


//Try to add a new key to the const object in problem 3.Were you able to do it.
stnum.phone_number = 8928439573
console.log(stnum);



//Write a js program to create a word-meaning dictionary of 5 words?
let dictionary = {
    "apple": "A fruit that is round and typically red, green, or yellow.",
    "javascript": "A high-level programming language used primarily for web development.",
    "dog": "A domesticated carnivorous mammal that is often kept as a pet.",
    "ocean": "A large body of saltwater that covers most of the Earth's surface.",
    "sun": "The star at the center of the solar system that provides light and heat to the Earth."
};

function get_meaning(word) {
    if(dictionary[word]){
        console.log(dictionary[word])
        console.log(`the meaning of ${word} is : ${dictionary[word]}`)
    }
    else{
        console.log(`Sorry, the word '${word}' is not in the dictionary.`);
    }
}

get_meaning("apple");
get_meaning("javascript");
get_meaning("dog");
get_meaning("ocean");
get_meaning("sun");
