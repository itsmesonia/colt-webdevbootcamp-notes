// You want to skip over the loop iterations that are even numbers and break 
// out of the loop altogether if a duplicate value is found. Extend the code below to do this.

// let myMdArray = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [6, 8, 9],
//   ];
  
//   let newArr = []

//   for (let i = 0; i < myMdArray.length; i++) {
//     let nestedArrayLength = myMdArray[i].length;

//     for (let j = 0; j < nestedArrayLength; j++) {
//         if (myMdArray[i][j] % 2 !== 0) {
//           newArr.push(myMdArray[i][j])
//         } 
//      }
//   }
//   return [...new Set(newArr)]


//   function shortestStepsToNum(num) {
//     let steps = 1
//     let count = 0
    
//     while (num >= count) {
//       if (num % 2 == 0) {
//          steps = num / 2
//         //  console.log(steps)
//       } else if (num % 2 != 0) {
//        steps = num - 1
//     //    console.log(steps)
//       }
//       count++
//     }
//     console.log(steps)
//       return steps
//     }
      
//     shortestStepsToNum(12)

// function findText() {
//     let loremIpsum =
//       'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
  
//     let i = loremIpsum.indexOf('Duis');
//     let newString = loremIpsum.substring(0, i);
  
//     newString = newString.trim();
  
//     let result;
//     console.log(typeof result)
  
//     if (newString.endsWith('consequence')) {
//       result += newString.toUpperCase();
//     } else {
//       result += loremIpsum.lastIndexOf('consequat');
//       console.log(result)
//     }
  
//     return result;
//   }
  
//   console.log(findText());

// function borrow(name, age, book) {
//     name = name.concat("-borrower");
//     age = age;
//     book.name = book.name.substring(0, 5);
//     book.author.toLowerCase();
//   }
  
//   let name = 'adele';
//   let age = 34;
//   let book = {name: 'Intro to Singing', author:'A. GURU'};
  
//   borrow(name, age, book);
  
//   console.log(name, age, book.name, book.author);

// let message = "Hello World!";
// message = message.substring(message.indexOf('W'), message.indexOf('d')).repeat(2);

// console.log(message);

// let dog1 = dog2 = dog3 = { breed: 'husky' };

// dog1.name = 'Michael';
// dog3.name = 'Bob';
// dog2.name = 'Cynthia';

// console.log(dog1 === dog3);
// console.log('dog1', dog1.name); 
// console.log('dog2', dog2.name); 
// console.log('dog3', dog3.name); 

// ******************* q1 ****************************

// What will log in the console? 

// let classRoom = [{
//         name: 'Fola',
//         languages: ['Java', 'JS', 'HTML', ['css', 'handlebar']]     
//     },
//     {
//         name: 'Daniel',
//         languages: ['Java', 'JS', 'Vue', ['css', 'tailwind']],
//     }

// ]
// function addStudents(arg) {
//     const lessonPlanning = arg
//     classRoom = arg
//     arg.push({ name: 'Latif', languages: ['Java', 'JS', 'React']})
// }

// addStudents(classRoom)

// console.log(classRoom)


// ******************* q2 ****************************

// const jazmine = {name: "J Sullivan", wins: 0, song: "feelings"};
// const ari = {name: "Ari Lennox", wins: 2, song: "pressure"};

// function changeWinner(artist1, artist2){
//     competitor = artist1
//     artist1 = artist2
//     artist2.name = competitor.name
// }

// changeWinner(jazmine, ari)

// console.log(jazmine, ari)

// ******************* q3 ****************************


// function changePerson(person) {
//     let personCopy = person;
//     personCopy.age++;
// }

// var jon = { name: "Jon", age: 18 };
// changePerson(jon);
// console.log(jon); // ????

// ******************* q4 ****************************

// let availableDiscount = [{monday: 0.2}, {wednesday: 0.1}, {friday: 0.05}]

// // If The Discount is used it is no longer available for that day, otherwise you get double off next week
// function applyDiscount(arg, day){
//   switch(day){
//     case 'monday':
//       arg.splice(0,1)
//       break
//     case 'wednesday':
//       arg.splice(1,1)
//       break
//     case 'friday':
//       arg.splice(2,1)
//       break
//     default:
//       arg = [{monday: 0.4}, {wednesday: 0.2}, {friday: 0.1}]

//   }

// }

// // A)
// applyDiscount(availableDiscount, 'tuesday')
// console.log(availableDiscount)
// // arg

// // B)
// applyDiscount(availableDiscount, 'wednesday')
// console.log(availableDiscount)

// {wednesday: 0.1} taken out

// ******************* q5 ****************************

// let names = ["Sophia", "Latiff", "Shazeen"];

// names.map((name) => name.toUpperCase());

// console.log(names); // ???

// console.log(a)

// ******************* q6 ****************************


// let names = ["Sophia", "Latiff", "Shazeen"];

// names.forEach((name) => (name += " the apprentice"));

// console.log(names); // ???

// ******************* q6 ****************************

// let nums = [1, 1, 2, 3, 5, 8, 13];

// let newNums = nums
//     .map(function (num) {
//         return num * 2;
//     })
//     .filter(function (num) {
//         return num > 4;
//     });

// console.log(newNums); // ???

// ******************* q7 ****************************

// let person = {name: "Daniel", age: 25}
// let person2 = {name: "Fola", age: 29}

// function questionFunction(){
//   person = person2
//   function birthday(age){
//     age++
//   }
//   birthday(person2.age)
// }

// questionFunction()

// console.log(person)
// console.log(person2)

//person2.age does not update

// let person = {name: "Daniel", age: 25}
// let person2 = {name: "Fola", age: 29}

// function questionFunction(){
//   person = person2
//   function birthday(person){
//     person.age++
//   }
//   birthday(person2)
// }

// questionFunction()

// console.log(person)
// console.log(person2)

// let person = {name: "Daniel", age: 25}
// let person2 = {name: "Fola", age: 29}

// function questionFunction(person, person2){
//   person = person2
//   function birthday(person){
//     person.age++
//   }
//   birthday(person2)
// }

// questionFunction(person, person2)

// console.log(person)
// console.log(person2)



// let monopoly = {name: "Monopoly", turns: 4, colour: "red"};
// let snakes = {name: "Snakes & Ladders", turns: 10, colour: "blue"};

// function takeTurn(game1, game2){
//     game1.name = game2.name;
//     game2 = game1;
//     game1.turns = game2.turns
//   }
  
//   takeTurn(monopoly, snakes)
//   console.log(monopoly)

//If the date is today, what would the console log?

// let today = new Date()

// console.log(`${today.getDate()}/${today.getMonth()}/${today.getFullYear()}` )

// A) 25/11/21
// B) 25/10/2021
// C) 25/11/2021

// let example2 = new Date('2010/10/10')
// let example3 = new Date(2010, 10, 10)

// console.log(example2.toDateString())
// console.log(example3)

// A) Sun Sept 10 2010
// 2010-11-10T00:00:00.000Z


// B) Sun Nov 10 2010
// 2010-11-10


// C) 
// Sun Oct 10 2010
// 2010-11-10T00:00:00.000Z


// ******************************** practise questions**************************************

// let name = 'Daniel';
// let number = '123678';
// let book = {name: 'Harry Potter and the Prisoner of Azkaban', author:'JK Rowling'};

// let database = ['Book 1', 'Book 2', 'Book 3', 'Book 4' ]

// function borrow(name, number, book, database) {
//     name = name.toUpperCase();
//     number = number + "-1";
//     console.log(number, 'number')
//     book.name = book.name.slice(0, 10).repeat(3);
//     book.author = book.author.toUpperCase();
//     database = [2, 2,3,4]
//     database.pop()
//   }
  

//   borrow(name, number, book, database);
  
//   console.log(name, number, book.author, book.name, database);

// *************************************************************************************


let val1 = 2;
let val2 = val1

// console.log(val1--, ++val2);
// //console.log(val1-- > ++val2);
// console.log(val2 > val1)

// console.log('objs', { greeting: 'Hi!' } === { greeting: 'Hi!' });

//***************************************************************************************
// let x = false;
// let y = true;

// if (!x) {
//   // this line prints because x === false
//   console.log(x);
// }

// if (!y) {
//   // this line is never reached
//   console.log(y);
// }


//***************************************************************************************

// let arr1 = [1, 'holy smokes', '007', "The name's Bond"];

// const myIndex = arr1.indexOf('007');

// console.log(myIndex)
// console.log(arr1[myIndex]); // 007

// let a = 'sonia choudhury'

// console.log(a.indexOf('x'))

//***************************************************************************************


// function addTen(a, b) {  // a & b are *copies* of the variables passed in
//     a = a+10;
//     b = b+10;
// }

// let x = 2;
// let y = 4;

// addTen(x, y)

// console.log(x);   // unchanged - still 2
// console.log(y);   // unchanged - still 4

//***************************************************************************************

// function borrow(name, number, book) {
//     name = name.toUpperCase();
//     number = number + "-1";
//     book.name.toUpperCase();

//     book.author.toUpperCase();
//   }
  
//   let name = 'shanie';
//   let number = '123678';
//   let book = {name: 'Intro to Java', author:'A. Guru'};
  
//   borrow(name, number, book);
  
//   console.log(name, number, book.name);

//***************************************************************************************

function findText() {
    let loremIpsum =
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
  
    let i = loremIpsum.indexOf('Duis');
    let newString = loremIpsum.substring(0, i);
  
    newString = newString.trim();
  
    let result;
  
    if (newString.endsWith('consequence')) {
      result += newString.toUpperCase();
    } else {
      result += loremIpsum.lastIndexOf('consequat');
    }
  
    return result;
  }
  
console.log(findText());
console.log((12.12234).toPrecision(2))
console.log((12.12234).toFixed(2))

console.log('hello')