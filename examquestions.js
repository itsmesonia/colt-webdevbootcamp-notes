// The "Blown Away" hair salon offers discounts of 20% on Wednesdays and Thursdays. You need to write a JavaScript function that meets the following requirements:

// Accepts the day of the week as a string. Returns the appropriate discount

// How should you complete the following code?

// function getDiscount(day) {
//     var discount = 0
//     day === 'Wednesday' || day === 'Thursday' ? discount = 0.2 : discount;
//     return discount
//   }

//   function getDiscount(day) {
//     var discount = 0
//     switch (day) {
//         case 'Wednesday':
//         case 'Thursday':
//             console.log(discount = 0.2)
//             break;
//         default:
//             console.log(discount = 0)
//       }
//   }

//   getDiscount('Thursday')
//   getDiscount('Monday')

//   console.log(getDiscount('Thursday'))
//   console.log(getDiscount('Monday'))
  
// The break keyword "breaks out" and exits the whole code block (including loops)

// The break keyword isn't required in the default block if the default block is the last statement (but you can still add it if you want)

// function addition(value1, value2) {
//     return value1 += value2;
//   }
  
//   console.log(addition(567, "56"))

//   const subtract = (value1, value2) => {
//     value1--;
//     return value1
//   };
  
//   console.log(subtract(12, 25));

//   let a = 40;
//   const b = 5;

// function divide1() {
//   let a = 20;
//   const b = 10;

//   return a / b;
// }

// function divide2() {
//   return a / b;
// }

// console.log(divide1()+" "+divide2());


// let a = '2';
// const b = 50;

// function addition(num1, num2 = 4) {
//   a = num1;
//   const b = num2;
//   return a + b;
// }

// console.log(addition(3));

// const myString = 'Hey, how you doing?';
// let newString;

// (function () {
//   newString = myString.length + ' Fine, thanks.';
// })();

// console.log(newString);

// let val1 = 2;
// let val2 = 1;

// val1--
// ++val2

// console.log('val1--', val1)
// console.log('++val2', val2)

// console.log(val1-- > ++val2);

// console.log('val1--', val1)
// console.log('++val2', val2)

// ***************************PERMUTATIONS******************************************


let array = [1, 2, 3, 4]


function combinations(arg1) {
    let permutations = []
    if (arg1.length === 0) return [];
    if (arg1.length === 1) return [arg1];

  for (let i=0; i < arg1.length; i++) {
     let currentNum = arg1[i]
     let remainingNumbs = arg1.slice(0, i).concat(arg1.slice(i + 1))
     for (let permutation of combinations(remainingNumbs)){
        permutations.push(currentNum + permutation) }
    }
    // console.log(permutations)
     return permutations 
}


combinations(array)

console.log(combinations(array))

// *********************************************************************

let string = 'sonia'

function combs(str) {
    const perm = new Set()

    if (str.length === 0) return [];
    if (str.length === 1) return [str];

for (const [i, letters] of [...string].entries()) {
    // console.log(letters)
    let remainingletters = string.slice(0, i).concat(string.slice(i + 1))
    // console.log(remainingletters)
    for (let permutation of combinations(remainingletters)){
        perm.add(letters + permutation) }
    }
    return perm
}
combs(string)
console.log(combs(string))