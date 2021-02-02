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

-<a width="600px" href="https://html.spec.whatwg.org/">HTML5</a>-new version of the language, larger set of technologies

- Block and inline elements
- span/ div elements

< align="center">
<img width="600px" src="./assets/Screenshot 2021-01-11 at 18.02.04.png" />
</>

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

But for the most part, what we've covered here are inline block and inline. Three different options for display.

It all has to do with how elements fit in with other elements and how they're affected by box model properties.

<p align="center">
<img width="600px" src="./assets/Screenshot 2021-01-26 at 22.49.14.png" />
</p>

# CSS Units Revisited

Concentration on relative units and are commonly used.

<p align="center">
<img width="600px" src="./assets/Screenshot 2021-01-26 at 22.50.02.png" />
</p>

### Percentage

<p align="center">
<img width="600px" src="./assets/Screenshot 2021-01-26 at 22.50.53.png" />
</p>

### CSS Units: ems

It has to do with the width of the height of the upper case letter M and typography.

EMS are relative units as our REM's, so they are relative to some other value.

And what's mildly confusing about them is that that other value changes depending on the property.

<p align="center">
<img width="600px" src="./assets/Screenshot 2021-01-26 at 23.00.41.png" />
</p>

Why do we use ems?

- Proportional to parent size.
  Font sizes for example, grow or shrink depending on the one change- the font size we evaluated the parent to.

If we use pixels, we would have to tweak every one of these numbers. But if we use EMS, things scale as that font size changes.

# CSS Units: rems

There are limitiations with `ems`. Nested elements for example, can have a snowball affect due to ratios being based off parents.

This is where `rems` can be considered even better for scalability:

<p align="center">
<img width="600px" src="./assets/Screenshot 2021-01-26 at 23.28.15.png" />
</p>

So REM's or root MS are similar, except rather than deriving the font size from the parent element, they derive the font size from the root HTML elements, font size.

```
//root element
html {
  font-size: 30px
}
```

So it's relative to this one font size for the entire document. So if your root HTML element has a font size of 20 pixels, one room is always 20 pixels.

No matter where you are in the document, no matter what your nested inside of.

But `ems` do you have a place, for example, when you want to make a little component, ie a button. A little thing that's reusable and might scale up or down nicely based upon that font size, REM's is really how something looks relative to the rest of the document.

# Section 9: Other Assorted Useful CSS Properties

Objectives for this module:

<p align="center">
<img width="600px" src="./assets/Screenshot 2021-01-26 at 23.41.56.png" />
</p>

# Opacity & The Alpha Channel

### RGBA- Alpha channel:

A value from 0 to 1.

<p align="center">
<img width="600px" src="./assets/Screenshot 2021-01-26 at 23.43.11.png" />
</p>

What's important to note here, is that the part the alpha channel, this this color is only going to affect the background color of the element or wherever I'm using this. That text itself wouldn't change and would remain the same colour.

## opacity

Now opacity is a property we set on an element that will make it or it governs the entire elements transparency, including its contents and any descendants.

Opacity is a property that goes from zero to one, so zero is completely transparent and then one not at all transparent. An entire element, the entire div would be transparent versus with rgba.

# The Position Property

MDN definition: position sets how an element is positioned in a document. It establishes how for other properties: `top, right, bottom and left`.
It determines how they work depending on how position is set.

- static: elements are naturally static
- relative: is going to keep the element in the normal flow of the document, but we can offset it relative to itself using top left, right and bottom. You can use top, bottom, left, and right to position the element. This offsets elements from its current position. It's positioned relative to where it would be if it was just normal, if I didn't offset it.
- absolute: The element is removed from the normal document flow and no space is created for the element. Relative to its clostest 'positioned' ancestor. _Depends on the parents._
- fixed: when something is positioned fixed, it's going to stay there. Its position is relative to that containing block always. Similar to `absolute`, except it has nothing to do with any parent elements.
- sticky: It will scroll along with content until it hits the top and then it stays there.

# CSS Transitions (yay!)

So transitions allow us to animate the transition of one property value to another property value. Often used with hover effects.

`trasition: 1s`

Syntax with further options:

<p align="center">
<img width="600px" src="./assets/Screenshot 2021-01-28 at 22.34.17.png" />
</p>

NB: transition-timing-functions- lots of options

To summarize how it works, there are four things that we can specify. A property that we want to animate, a duration that can be in seconds. It can also be in milliseconds.

We can specify a timing function, and then after that, a delay.

# The Power of CSS Transforms

So Transform allows us to do a lot.

- We can rotate things and warp their perspective.
- We can scale them and stretch them and skew them.
- We can translate or move them across the page, up or down and all sorts of things we can do multiple at once.

We can rotate something and scale it.

The thing that ties all of this together is that we are transforming elements.

### rotate

It will accept, let's see, angles we can specify as degrees, as radians.

- rotateX()
- rotateY()
- rotateZ()

### Scale

Scale is another transform function that we can use that will change the size of an element. We can grow it or shrink it.

- scaleX()
- scaleY()
- scaleZ()

### Translate

Translate allows us to take one element and move it around so we can move it to the right, move it up, move it down or do both at the same time.

- translateX()
- translateY()

There's a couple of different values, but it's either a length or some percentage and that length can be really any unit that we've seen. It could be `ems`, `rems`, `px` and percentages etc.

### Skew

Last one up: skew is going to skew an element on a 2D plane.

- skewX()
- skewY()

It accepts angles, degrees or radians or turns or gradients.

Main takeaway from transform:
Very important to understand about _Transform_: everything we do is going to apply to not only the parent element, but also its contents. This makes it super powerful.

We can do all sorts of animations and cool effects with transformations.

# Section 10: Responsive CSS & Flexbox

It's really useful for laying out elements and adding space or sharing space, distributing space to make a webpage.

<p align="center">
<img width="600px" src="./assets/Screenshot 2021-01-29 at 23.11.59.png" />
</p>

### What on Earth Is Flexbox?

Flexbox is a newer part of CSS, so it has not been around for very long at all. It's really only become pretty standardized across browsers in the last maybe two years, maybe three years.

It's a tool or it's really a series of properties that we use to layout items on our page in a box of content.

We have some container and we want to distribute space inside of that container.

# Flex-Direction

When we designate a some box or some container, a flex box, we set display to flex in that box.

<p align="center">
<img width="600px" src="./assets/Screenshot 2021-01-30 at 19.12.32.png" />
</p>

In that box/container, there are two axes. X is the main axis in the cross axis. And these are very important for the other properties we're going to cover.

By default, the main axis goes from left to right.

### flex-direction:

- row, row-reverse
- column, column-reverse

# Justify-Content

It depends on flex direction. The way that it behaves depends on the main axis and that main axis can change.

This property determines how the actual elements, how the content is distributed across the main axis.

Default is going to be `justify-content: flex-start`.

- flex-end (takes the content and move it to the end of the main axis.)
- center
- space-between
- space-around
- space-evenly

# Flex-Wrap

Determines whether our elements are going to rap along the main axis onto a new line if it's horizontal or a new column if it's a vertical main axis.

- wrap
- nowrap
- wrap reverse

# Align-Items

So justify content is along the main axis.

- baseline
- flex-end

# Align-Content & Align-Self

We use align-content to control or distribute space along the cross axis, but only when we have multiple rows or columns, depending on if we're in a row or column based layouts.

Basically, if we are in columns like we have here, a line content controls the space between those columns.

If we're in rows, the main axis is left to right, right to left. Now, if we only have one column or one row, we don't have flex wrap turned on a line. Content does nothing for us at all.

It just doesn't mean anything. It's only works when we have rap or rap-reverse for flex-wrap.

### Align self

Aligned self is very similar to line items, except it's actually a property we add to a single element or it doesn't have to be one but two individual items in the flex container.

_So it's the first property we've seen that we don't actually apply to the flex container itself, but to individual elements, and we can change the alignment along the cross axis for a single element using it._

# Flex-Basis, Grow, & Shrink

These are three related properties that have to do with individual items in a flex container and how they grow or shrink when there's available space or when there is too little space.

<p align="center">
<img width="600px" src="./assets/Screenshot 2021-01-30 at 21.51.28.png" />
</p>

- Flex basis is just the initial size that an element should be added into our box and it might be with a height depending on the main axis direction.

- Flex Grow is going to control the amount of space that an element takes up if there is available space.

- Flex shrink is kind of the same concept. It governs the rate that elements shrink when there is not enough space in the container.

# Flex Shorthand

So we use these properties so frequently that flex was created. It allows us to set all three in one go.

There are a couple of different options you can pass in three different values. And the order here:

- if there are three values, is flex, grow, flex, shrink and then flex basis.

- if we have two values, it's just flex, grow and flex shrink.

# Responsive Design & Media Queries Intro

<p align="center">
<img width="600px" src="./assets/Screenshot 2021-01-30 at 22.20.23.png" />
</p>

The term responsive design refers to basically making a website that is able to respond to the device that it's on, whether that means the screen size, if it's on a small device like a mobile phone or a super large monitor or the orientation of the device.

It refers to creating a single website or application that is able to respond to different screen sizes or different features on the screen or on a device in the way that we actually do.

This is where media queries are used!

<p align="center">
<img width="600px" src="./assets/Screenshot 2021-01-30 at 22.23.45.png" />
</p>

# The Power of Media Queries

Media queries are the main mechanism that we can use to make a responsive website to restyle things or remove things, show and hide, change their sizes, go from a row to a column.

##### <a href="http://meyerweb.com/eric/tools/css/reset/">CSS rest</a>

# Section 12: CSS Frameworks: Bootstrap

Bootstrap is a third party tool. It's CSS that multiple people have written to incorporate in our code.

Similar tools include Bulma, Semantic UI, Material UI which all accomplish the same goals.

<p align="center">
<img width="600px" src="./assets/Screenshot 2021-02-02 at 22.56.00.png" />
</p>
