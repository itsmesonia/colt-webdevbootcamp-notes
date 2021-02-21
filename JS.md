# Section 14: JavaScript Basics!

Primitive types are just types in general are a concept across any programming language.

Whatever language you're working with will have some set of types.

<p align="center">
<img width="600px" src="./assets/Screenshot 2021-02-09 at 19.38.07.png" />
</p>

<p align="center">
<img width="600px" src="./assets/Screenshot 2021-02-10 at 21.51.17.png" />
</p>

NB: to represent decimal numbers called floating points or float's often. And the reason for that is that it takes a lot more memory to store a decimal.

<p align="center">
<img width="600px" src="./assets/Screenshot 2021-02-10 at 21.53.54.png" />
</p>

Order of operation: PEMDAS - parentheses, exponents (`**` to the power of), multiplication, division, addition, subtraction.

<p align="center">
<img width="600px" src="./assets/Screenshot 2021-02-10 at 22.00.54.png" />
</p>

It is considered a number by JavaScript, but it represents something that is not a number.

# Variables & Let

<p align="center">
<img width="600px" src="./assets/Screenshot 2021-02-10 at 22.07.27.png" />
</p>

Variables are useful: variables, are a way of giving some name to a value and storing it using JavaScript so that we can come back to it later to reuse it, update it, or just recall it.

Quirks of JS:

<p align="center">
<img width="400px" src="./assets/Screenshot 2021-02-11 at 16.39.35.png" />
</p>

Chickens won't update or change with the updated hens count as it's stored a value from hens from a moment in js's memory. They are not intrinsically linked. This is just a snapshot in time.

# Updating Variables

The below example takes the current score of a variable and adds 5 to it.

```let score = 5
   score = score + 5
```

Shorter syntax:

`score += 5`

Incrememting and decrementing by 1:

`score++`

`score--`

# Const and Var

There are actually two other keywords we can use to make variables

`Const` stands for Constant as it stands for constant. A constant is a value that does not change- you won't be able to update, change, or reassign using const.

It remains constant.

<p align="center">
<img width="600px" src="./assets/Screenshot 2021-02-11 at 16.58.24.png" />
</p>

Var is considered old syntax and you shouldn't be using it.

# Booleans

We have two options for a boolean value, true or false?

That's it.

So booleans are used to store yes or no values, a true or false value. So these are special words in JavaScript. These play a very important role in performing logic and having our code have different outcomes and making decisions and all that really important stuff.

But at their core booleans are very, very simple, just true or false values.

<p align="center">
<img width="600px" src="./assets/Screenshot 2021-02-11 at 17.33.35.png" />
</p>

In JavaScript, we can have a variable, a single variable that changes type. If we make a numeric variable, it is not stuck storing a number forever. We could make it store a boolean.

Example:

```
let isLoggedin = true //boolean
isLoggedin = 'hello' // string
isLoggedin = 12345 //number
```

NB: Variable Naming and Conventions- air on the side of meanginfulness and camelcase convention for best practise.

# Section 15: JavaScript Strings and More

Strings are really commonly used as are numbers and booleans. Those three are probably the most important to understand right now.

And a string is basically textural information, a string of characters. So they're just another primitive type and they represent text.

<p align="center">
<img width="600px" src="./assets/Screenshot 2021-02-11 at 17.58.46.png" />
</p>

Every character in a string has a corresponding number associated with it, a positional number that goes in order from the beginning of the string starting at zero.

# String Methods

Every string we make in JavaScript actually comes with a set of built-In actions, which we call methods that we can perform using that particular string.

<p align="center">
<img width="600px" src="./assets/Screenshot 2021-02-11 at 21.04.18.png" />
</p>

`.length` accesses a property and ISN'T a method, hence why there aren't parentheses after it.

- `toUpperCase()` - is a non destructive method, the original string is unchanged.
- `toLowerCase()`
- `trim()`

<p align="center">
<img width="600px" src="./assets/Screenshot 2021-02-11 at 21.11.36.png" />
</p>

# String Methods With Arguments

A lot of methods actually accept arguments. Arguments are just inputs that we can pass into the method to alter how they behave.

<p align="center">
<img width="600px" src="./assets/Screenshot 2021-02-11 at 21.15.23.png" />
</p>

`indexOf()` // falsey = -1

So this is commonly used to test. If a string contains something, does it contain a pound sign, does it contain a period, does it contain the word 'hello', that sort of thing.

`slice()`

Slice actually _can accept more than one argument_. Refer to the docs for this one because you may get confused at some point. So Slice extracts or slicees a portion of a string and it returns it or it gives it to us as a _new string_.

<p align="center">
<img width="600px" src="./assets/Screenshot 2021-02-11 at 21.21.32.png" />
</p>

`replace()`

Replace is powerful when combined with regular expressions to match patterns and replace a pattern instead of a specific string.

<p align="center">
<img width="600px" src="./assets/Screenshot 2021-02-11 at 21.26.17.png" />
</p>

`repeat()` is another method out of so many!

Ultimately, a method is just an action with a name that we can call upon, in this case - a string!

# String Template Literals -SUPER USEFUL

Template literals are a newer syntax and they're super useful. They allow us to create strings where we can embed an expression inside the string and that expression will be evaluated and turned into a string.

<p align="center">
<img width="600px" src="./assets/Screenshot 2021-02-11 at 21.35.19.png" />
</p>

In order to make this work, you have to use the back tick characters.

`${this sequence/syntax will be treated as an expression inside th back tick and evaluated}`

# Undefined & Null

<p align="center">
<img width="600px" src="./assets/Screenshot 2021-02-11 at 21.40.09.png" />
</p>

Null something you won't run into really very often at all. It is something you _may_ set as a value for a variable, whereas undefined is something that you will run into pretty frequently, especially later on.

# Random Numbers & The Math Object

The math object built into JavaScript, out of the box for free.
We have access to this thing called `Math` and it's just a collection of properties and methods that have to do with math in some way.

<p align="center">
<img width="600px" src="./assets/Screenshot 2021-02-11 at 21.43.38.png" />
</p>

There's a built in method called `random` and random is going to give us a random decimal number between zero and one, but it won't actually include one.

<p align="center">
<img width="600px" src="./assets/Screenshot 2021-02-11 at 21.48.14.png" />
</p>

# Section 16: JavaScript Decision Making

#### Comparison Operators

#### Equality: Triple Vs. Double Equals

#### If Statements, Else-If, Else

#### Nesting Conditionals

#### Truth-y & False-y Values

#### Logical AND, OR, NOT

Another very important core concept in JavaScript, which is making decisions with our code and something called boolean logic.
RE decision making, it's referring to having different outcomes based off of certain criteria.

_It's just having different branching paths depending on some input._

## Comparison Operators

<p align="center">
<img width="600px" src="./assets/Screenshot 2021-02-12 at 13.39.02.png" />
</p>

## Equality: Triple Vs. Double Equals

<p align="center">
<img width="600px" src="./assets/Screenshot 2021-02-12 at 15.46.34.png" />
</p>

`==` checks if two values are equal, but it does not care about their type. It does not care if they are the same type. What this means is that it will attempt to coerce two values if they are of different types. It will coerce them to move them into or transform them into the same type so that you can compare them.

This can lead to unexpected results.

It's considered best practise to use strict equals: `===` to avoid potential bugs in your code.

## If Statements

<p align="center">
<img width="600px" src="./assets/Screenshot 2021-02-12 at 16.21.42.png" />
</p>

<p align="center">
<img width="600px" src="./assets/Screenshot 2021-02-12 at 16.22.20.png" />
</p>

## Else if and else

This is another piece you can chain on if the first confidtion is false:

<p align="center">
<img width="600px" src="./assets/Screenshot 2021-02-12 at 16.29.01.png" />
</p>

Else is going to be the last part. If you have an else (you don't have to, but if you do,) it's the last piece of the entire conditional. And we don't specify any condition. We don't have parentheses.

It's simply a catch all it's going to run as the last thing if nothing else matched first. If nothing else was true along this journey, then do this.

<p align="center">
<img width="600px" src="./assets/Screenshot 2021-02-12 at 17.07.26.png" />
</p>

`If` is manadatory and the basics in making decisions. We don't have to even have an else. You can just have an if on its own, you can have an F and announce if, but if you want to catch all we can use and else.

## Nesting Conditionals

<p align="center">
<img width="600px" src="./assets/Screenshot 2021-02-12 at 17.22.09.png" />
</p>

## Logical Operators

Logical operators are operators that allow us to combine different expressions so we can combine more than one piece of logic together to form one larger piece of logic.

<p align="center">
<img width="600px" src="./assets/Screenshot 2021-02-12 at 17.37.05.png" />
</p>

# Section 17: JavaScript Arrays

- creating and updating arrays
- push, pop, shift and unshift- built in array methods
- concat, indexof, slice and splice -
- multi dimensional arrays

<p align="center">
<img width="600px" src="./assets/Screenshot 2021-02-12 at 21.43.37.png" />
</p>

<p align="center">
<img width="600px" src="./assets/Screenshot 2021-02-12 at 22.14.19.png" />
</p>

## Array Methods

<p align="center">
<img width="600px" src="./assets/Screenshot 2021-02-12 at 22.30.19.png" />
</p>

# Concat, indexOf, includes & reverse

<p align="center">
<img width="600px" src="./assets/Screenshot 2021-02-13 at 19.17.30.png" />
</p>

- `firstarray.concat(pass in second array)` - adds arrays together to form a new, merged array. Doesnt modify either of the originals.

- `includes()` - includes is an example of a boolean method, which means it returns true or false. It's going to tell us if an array includes a particular value.

- `indexOf` - similar to how it works for strings. It will always return a -1 for a falsey. So this is an easy way to tell if some element is in an array or not. We can just quickly check. Is index of that thing equal to negative one?

- `reverse()` - reverses an array. It's considered a destructive method, it does change the original array.

- `splice()` - similar but does more than slice, it can remove and change an element by replacing it.

- `slice()` - doesn't change the original array, you can pass in a start and stop index in parenthesis to 'slice' array elements

- `sort()` - the default way that it's source, if you just call a radar source with empty parentheses, it is going to convert everything into string. And then compare their UTF 16 code unit values, these underlying code numbers basically for each string behind the scenes- it compares them and that's very Janky compared to other programming languages. It's not a reliable numeric sort unless you pass a function inside.

## Reference Types & Equality Testing

When we're working with arrays, what's important to note about comparing arrays is JS doesnt compare 'content', but instead comparing _references in memory_.

```
[1, 2] === [1, 2]
false
```

(two arrays stored in js memory)

## const and arrays

<p align="center">
<img width="600px" src="./assets/Screenshot 2021-02-13 at 21.03.51.png" />
</p>

## Multi-Dimensional Arrays

<p align="center">
<img width="600px" src="./assets/Screenshot 2021-02-13 at 21.09.27.png" />
</p>

# JavaScript Object Literals

JavaScript object literals is another data structure similar to an array in the sense that it stores information and can combine multiple types of data together and multiple pieces of data. Unlike arrays, data is stored using what we call `key value pairs` or properties. It's all about labeling our information, giving it a name.

## Creating Object Literals

`property = key-value pair`

<p align="center">
<img width="600px" src="./assets/Screenshot 2021-02-13 at 22.05.21.png" />
</p>

## Nesting Arrays & Objects

Common pattern to see array of objects.

# Section 19: Repeating Stuff With Loops

- loops
- nested loops
- while loops
- for... of loop
- iterating arrays
- iterating objects

# for loops

<p align="center">
<img width="600px" src="./assets/Screenshot 2021-02-15 at 20.41.57.png" />
</p>

## Syntax are in three parts: initial expression, condition, increment expression

<p align="center">
<img width="600px" src="./assets/Screenshot 2021-02-15 at 20.45.43.png" />
</p>

# Looping Over Arrays

So looping over and creating a bunch of numbers to print out is not all that useful, but we do use loops all the time when we're interacting with arrays.

Now, there's more than one way of doing this, and we'll see some others that are a little bit nicer (few lectures away). We also call it iterating over an array, doing something with or for each element in an array.

Plugging your indexed number into your array to print elements:

```
for (let i= 0; i < array.length; i++) {
  console.log(array[i])
}
```

# Nested Loops

Having one for loop, in this case for loops instead of another. So the idea here is literally putting a for loop inside the body of another for loop. But in practice, what this means is that for every single iteration of the outer loop, but say it runs five times the inner loop is going to have its own full cycle, five separate times it gets a full cycle.

using a nested for loop toiterate through nested arrays

<p align="center">
<img width="600px" src="./assets/Screenshot 2021-02-16 at 23.15.39.png" />
</p>

# Another Loop: The While Loop

<p align="center">
<img width="600px" src="./assets/Screenshot 2021-02-16 at 23.31.16.png" />
</p>

# The Lovely For...Of Loop

Next up, a brand new loop we haven't seen before of so far of is newer in JavaScript. It's not just new to us in this course, but it's also newer and JavaScript. It's a significant improvement for iterating over arrays and other iterables.

Works with any iterable object in js.

<p align="center">
<img width="600px" src="./assets/Screenshot 2021-02-16 at 23.46.00.png" />
</p>

## Syntax

<p align="center">
<img width="600px" src="./assets/Screenshot 2021-02-16 at 23.48.06.png" />
</p>

### Nesting for of loops:

<p align="center">
<img width="600px" src="./assets/Screenshot 2021-02-16 at 23.51.13.png" />
</p>

A lot easier to read because you write a variable that corresponds to the individual element, not a variable that corresponds to an index or just the number that you then have to plug in to the array here.

You don't have to plug anything into the array.

Row references each element in the parent in the first array and then for student of that row array, student references this.

`for..of` is commonly used.

# Iterating Over Objects (literals)

- the `for...in` loop is specifically designed to iterate through object, less commonly used.
  Just gives us the `key` in the object

<p align="center">
<img width="600px" src="./assets/Screenshot 2021-02-17 at 18.34.21.png" />
</p>

Another option woud be using specific object methods- to follow:

### Object.keys() - creates an array

### Object.values()

### Object.entries() - gives us a nested array of key value pairs.

<p align="center">
<img width="600px" src="./assets/Screenshot 2021-02-17 at 18.43.48.png" />
</p>

# Section 20: NEW: Introducing Functions

Super useful for reducing the duplication in our code and just making our code easier to look at and easier to understand.

<p align="center">
<img width="600px" src="./assets/Screenshot 2021-02-17 at 20.23.08.png" />
</p>

Steps:

1. defining a function
2. running it or calling it to execute it

## Arguments Intro

Arguments in JavaScript are basically a fancy way of saying inputs to a function- inputs we pass in.

<p align="center">
<img width="600px" src="./assets/Screenshot 2021-02-21 at 22.51.08.png" />
</p>

There's no real logic/intelligence to arguments, it's purely based on the order we pass inputs in when we're calling the function.
