//foreach is popular, but for..of has replaced it in recent years: 

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const movies = ['movie1', 'movie2', 'movie3', 'movie4', 'movie5', 'movie6', 'movie7', 'movie8', 'movie9', 'movie10']
numbers.forEach(number => {
    // console.log(`This number ${number/ 10} is just one iteration`)
})

console.log(numbers)

// for...of

for (number of numbers) {
    // console.log('inside for of', number)
    if (number % 2 === 0) {
        // console.log('cleanly divisible by two', number)
    }
}

// Map is similar to foreach but it creates a completely new array

const newNumbers = numbers.map(num => num * 2)
// console.log('newNumbers', newNumbers)

const merge = numbers.map((number, i) => {
    console.log(`${number} ${movies[i]}`)
    return `${number} - ${movies[i]}`
})

console.log('returning merge', merge)