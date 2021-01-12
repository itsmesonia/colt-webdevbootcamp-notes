# colt-webdevbootcamp-notes

Topics covered so far:

## The Web

At its core, it's a system to share resources over the internet and all built on HTTP.

<img src="./assets/Screenshot 2021-01-11 at 16.19.49.png" />

<img src="./assets/Screenshot 2021-01-11 at 16.20.49.png" />

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

# HTML Essentials- markup language

- Boilerplate - template
- HTML root element
- paragraph elements
- HTML forms
- HTML Headings (h1, h2 etc)
- HTML Lists - ul/ol, nested lists
- Anchor Tags (and href attributes for added information- offers a path for link)
- HTML Images - self-closing

<img src="./assets/Screenshot 2021-01-11 at 17.20.30.png" />

# HTML: Next Steps & Semantics

-<a href="https://html.spec.whatwg.org/">HTML5</a>-new version of the language, larger set of technologies

- Block and inline elements
- span/ div elements

<img src="./assets/Screenshot 2021-01-11 at 18.02.04.png" />

## Entity Codes

- sequences we can use inside of our HTML to show different characters (eg. copyright symbol)
- Resource for <a href="https://dev.w3.org/html5/html-author/charref">references</a>

<img src="./assets/Screenshot 2021-01-11 at 18.34.33.png" />

# Semantic Markup

- Semantic- relating to meaning.
- The use of descriptive tags instead of using standard divs.

<img src="./assets/Screenshot 2021-01-11 at 18.54.43.png" />

### VSCode <a href ="https://docs.emmet.io/">Emmet</a> documentation

# HTML: Forms & Tables

Tabular data nice clear way of displaying some data. Popular back in the 90s to layout websites.

<img src="./assets/Screenshot 2021-01-11 at 19.28.32.png" />

<img src="./assets/Screenshot 2021-01-11 at 19.32.40.png" />

# HTML forms

<img src="./assets/Screenshot 2021-01-11 at 19.45.05.png" />

A collection of HTML elements for users to input values. Forms are for information collecting. A simple search can be from a form- it fires across a HTTP request to a server to retrieve results for the search.

- the _action_ attribute- specifies WHERE the form data should be sent.
- the _method_ attribute specifies which HTTP method is being use eg GET method.

<img src="./assets/Screenshot 2021-01-11 at 19.59.58.png" />

_what happens behind the scenes_

search inputted in form by user -> requesr sent to end point of server with query search term -> server sends back results

# Common Input Types

<img src="./assets/Screenshot 2021-01-11 at 20.06.56.png" />

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

### - type="email" - expects a certain format/pattern

### - type="url" - expects a certain format/pattern

# CSS

<img width="900px" src="./assets/Screenshot 2021-01-11 at 23.30.25.png" />

<img width="900px" src="./assets/Screenshot 2021-01-12 at 00.01.31.png" />

# The World of CSS Selectors
