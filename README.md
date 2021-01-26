# colt-webdevbootcamp-notes

Topics covered so far:

## Section 1 & 2: The Web

At its core, it's a system to share resources over the internet and all built on HTTP.

<p align="center">
<img width="600px" src="./assets/Screenshot 2021-01-11 at 16.19.49.png" />
</p>

<p align="center">
<img width="600px" src="./assets/Screenshot 2021-01-11 at 16.20.49.png" />
</p>

## HTTP Requests: Hyper Text Transfer Protocol

- One of the main foundations of communicating on the www.
- the main protocol that allows us to share (request and receive resources!) information and data in the web.

## Web Server: A Computer\*that can satify requests on the web

## The Request/Response cycle

1. Our Web browsers send a HTTP request.
2. It finds its way eventually to the appropriate server/s.
3. Servers respond with a Web page.
4. The server responds with instructions with code that my browser can understand.
5. So the job of my browser is essentially to display or to render content for the user, for humans, for human eyes/ears.

# Section 3: HTML Essentials- markup language

- Boilerplate - template
- HTML root element
- paragraph elements
- HTML forms
- HTML Headings (h1, h2 etc)
- HTML Lists - ul/ol, nested lists
- Anchor Tags (and href attributes for added information- offers a path for link)
- HTML Images - self-closing

<p align="center">
<img width="600px" src="./assets/Screenshot 2021-01-11 at 17.20.30.png" />
</p>

# Section 4: HTML: Next Steps & Semantics

<p align="center">
-<a width="600px" href="https://html.spec.whatwg.org/">HTML5</a>-new version of the language, larger set of technologies
<p>

- Block and inline elements
- span/ div elements

<p align="center">
<img width="600px" src="./assets/Screenshot 2021-01-11 at 18.02.04.png" />
</p>

## Entity Codes

- sequences we can use inside of our HTML to show different characters (eg. copyright symbol)
- Resource for <a href="https://dev.w3.org/html5/html-author/charref">references</a>

<p align="center">
<img width="600px" src="./assets/Screenshot 2021-01-11 at 18.34.33.png" />
</p>

# Semantic Markup

- Semantic- relating to meaning.
- The use of descriptive tags instead of using standard divs.

<p align="center">
<img width="600px" src="./assets/Screenshot 2021-01-11 at 18.54.43.png" />
</p>

### VSCode <a href ="https://docs.emmet.io/">Emmet</a> documentation

# Section 5: HTML: Forms & Tables

Tabular data nice clear way of displaying some data. Popular back in the 90s to layout websites.

<p align="center">
<img width="600px" src="./assets/Screenshot 2021-01-11 at 19.28.32.png" />
</p>
<p align="center">
<img width="600px" src="./assets/Screenshot 2021-01-11 at 19.32.40.png" />
</p>

# HTML forms

<p align="center">
<img width="600px" src="./assets/Screenshot 2021-01-11 at 19.45.05.png" />
</p>

A collection of HTML elements for users to input values. Forms are for information collecting. A simple search can be from a form- it fires across a HTTP request to a server to retrieve results for the search.

- the _action_ attribute- specifies WHERE the form data should be sent.
- the _method_ attribute specifies which HTTP method is being use eg GET method.

<p align="center">
<img width="600px" src="./assets/Screenshot 2021-01-11 at 19.59.58.png" />
</p>

_what happens behind the scenes_

search inputted in form by user -> request sent to end point of server with query search term -> server sends back results

# Common Input Types

<p align="center">
<img width="600px" src="./assets/Screenshot 2021-01-11 at 20.06.56.png" />
</p>

- varying types of inputs, using the _type_ attribute to specify what type of input you'd like.

###### Types of inputs:

- time
- text
- password
- color
- number

### Placeholder attribute - the initial text specifying what the input should be for users

# The All-Important Label

Important for accessibility.

`<label for="inputId"></label>`

# HTML Button

When there's a button _inside_ a form, it submits the form - default behaviour.

Workaround to prevent default behaviour- add a type attribute:

`<button type="button> Button! </button>`

#### NB Radio Buttons, Checkboxes, & Selects - also input options, refer to MDN

# HTML5 Form Validations

- built in browser validation on the frontend

### - `required` attribute

### - minlength, maxlength attributes

### - min, max attributes

### - `type="email"` - expects a certain format/pattern

### - `type="url"` - expects a certain format/pattern

# Section 6: CSS

<p align="center">
<img width="600px" width="800px" src="./assets/Screenshot 2021-01-11 at 23.30.25.png" />
</p>

<p align="center">
<img width="600px" width="800px" src="./assets/Screenshot 2021-01-12 at 00.01.31.png" />
</p>

# inline elements

<p align="center">
<img width="600px" width="800px" src="./assets/Screenshot 2021-01-12 at 00.10.50.png" />
</p>

# Section 7: The World of CSS Selectors

## Universal & Element Selectors

Learning Objectives:

<p align="center">
<img width="600px" src="./assets/Screenshot 2021-01-17 at 22.46.27.png" />
</p>

### Univrsal selector (selects everything):

```
* {
  color: black;
}

```

### Selector list (selecting multiple):

```
h1, h2, h3 {
  color: black;
}

```

## ID Selector

The whole idea behind the `id` selector is that it's singling out one thing. It's a unique identifier.
You add an I.D. to your markup and then you reference it using the name of the ID and the hash sign. You shouldn't have more than a handful on an application.

<p align="center">
<img width="600px" src="./assets/Screenshot 2021-01-18 at 22.14.19.png" />
</p>

## Class Selector

More common, and can be applied ot multiple elements. You're not going to have every single thing be completely different.
You often will have groups of things or classes that you style similarly.
USeful for repeated patterns.

<p align="center">
<img width="600px" src="./assets/Screenshot 2021-01-18 at 22.20.08.png" />
</p>

# The Descendent Selector

Commonly used. The syntax involves applying a space between nested html elements (including classes and ids where applicable).

<p align="center">
<img width="600px" src="./assets/Screenshot 2021-01-18 at 23.13.19.png" />
</p>

# The Adjacent & Direct-Descendent Selectors

Not commonly used. Applying styling to elements one after another- NOT nested but ADJACENT to eachother.

<p align="center">
<img width="600px" src="./assets/Screenshot 2021-01-18 at 23.19.06.png" />
</p>

Selecting elements that are direct descendents of an element.

<p align="center">
<img width="600px" src="./assets/Screenshot 2021-01-18 at 23.21.23.png" />
</p>

# The Attribute Selector

Fairly uncommon to use. You can apply this rule to any attricute including classes.

<p align="center">
<img width="600px" src="./assets/Screenshot 2021-01-18 at 23.25.06.png" />
</p>

# Pseudo Classes

<p align="center">
<img width="600px" src="./assets/Screenshot 2021-01-18 at 23.48.22.png" />
</p>

# Pseudo Classes

Parts of an element.

<p align="center">
<img width="600px" src="./assets/Screenshot 2021-01-18 at 23.58.29.png" />
</p>

# Specificity

<p align="center">
<img width="600px" src="./assets/Screenshot 2021-01-19 at 00.04.28.png" />
</p>

<p align="center">
<img width="600px" src="./assets/Screenshot 2021-01-19 at 00.04.32.png" />
</p>

Resource: https://specificity.keegan.st/

<p align="center">
<img width="600px" src="./assets/Screenshot 2021-01-19 at 00.22.53.png" />
</p>

# Inline Styles & Important

The most specific way to style (ideally should be avoided), and often not recommended.

<p align="center">
<img width="600px" src="./assets/Screenshot 2021-01-21 at 17.30.18.png" />
</p>

The below is almost never used and isn't recommended. It ignores all other rules.

`!important`

# CSS Inheritance

Styles will be inherited by child elements fro mparent elements if they're not set on that element specifically.

<p align="center">
<img width="600px" src="./assets/Screenshot 2021-01-21 at 17.33.27.png" />
</p>

Some elements don't inherit by default (submit on forms for example). There are workarounds for this but it's rare to use:

`button, input { color: inherit }`

# Section 8: The CSS Box Model

<p align="center">
<img width="600px" src="./assets/Screenshot 2021-01-22 at 22.00.03.png" />
</p>

#### Box Model: Width & Height

The box model is basically just the idea that everything in excess is a box and those boxes have a couple of different properties.

<p align="center">
<img width="600px" src="./assets/Screenshot 2021-01-22 at 22.03.00.png" />
</p>

They control the inner content box.

<p align="center">
<img width="600px" src="./assets/Screenshot 2021-01-25 at 23.21.02.png" />
</p>

#### Box Model: Border & Border-Radius

They're an important part of making, first of all, a nice looking website, but also they play an important role in making it clear what certain things do or bringing attention to certain elements.

We can change the border, for example, as I hover, and that makes it very clear that I'm doing something

<p align="center">
<img width="600px" src="./assets/Screenshot 2021-01-26 at 21.52.41.png" />
</p>

Pixels are commonly used for borders because generally, borders are small. So pixels are a pretty good unit to use.

`border: solid 2px black`

#### Box Model: Padding

So the next piece of the box model we need to cover is padding, padding is the space between the content,
the actual content box and the border of an element.

It's the space between an element content area or content box and its own border, its internal spacing.

<p align="center">
<img width="600px" src="./assets/Screenshot 2021-01-26 at 22.04.44.png" />
</p>

<p align="center">
<img width="600px" src="./assets/Screenshot 2021-01-26 at 22.07.00.png" />
</p>

<p align="center">
<img width="600px" src="./assets/Screenshot 2021-01-26 at 22.08.41.png" />
</p>

# Box Model: Margin

Margin is the space outside of an element's border between that element and something else, other elements.

<p align="center">
<img width="600px" src="./assets/Screenshot 2021-01-26 at 22.11.20.png" />
</p>

So padding is the spacing on the inside of the border.

Margin is the spacing on the outside.

And just like padding, we have the four individual properties, margin left, margin, right, top

Syntax:

<p align="center">
<img width="600px" src="./assets/Screenshot 2021-01-26 at 22.11.29.png" />
</p>

Shorthand:

<p align="center">
<img width="600px" src="./assets/Screenshot 2021-01-26 at 22.11.40.png" />
</p>

# The Display Property

<p align="center">
<img width="600px" src="./assets/Screenshot 2021-01-26 at 22.19.43.png" />
</p>

Recap on inline and block elements:

<p align="center">
<img width="600px" src="./assets/Screenshot 2021-01-26 at 22.19.51.png" />
</p>

## What to remember:

We can change the behavious or block level elements (elements that take up the full width of the screen).

`display: inline` - on block level elements will reverse the block behaviour

`display: block` - on inline elements can reverse the behaviour

`display: inline-block` - for block level elements, behviour will be inline and height and width will work

<p align="center">
<img width="600px" src="./assets/Screenshot 2021-01-26 at 22.20.48.png" />
</p>
