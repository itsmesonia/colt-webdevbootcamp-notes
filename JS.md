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
