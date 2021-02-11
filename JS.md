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

`Const` stands for Constant as it stands for constant. Or do I just say it's an abbreviated version of constant anyway. It means constant and a constant is a value that does not change- you won't be able to update, change, or reassign using const.

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

<p align="center">
<img width="600px" src="./assets/Screenshot 2021-02-11 at 21.26.17.png" />
</p>

Replace is powerful when combined with regular expressions to match patterns and replace a pattern instead of a specific string.
