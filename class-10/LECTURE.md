# Class 10: JS Debugging

## Warm Up

CSS Layout Challenge

- Create some HTML and CSS that will display a layout with 9 boxes, arranged in a 3 by 3 layout:  
  
<!-- ![Warm Up Layout](diagrams/warmup.png) -->
<img width="200px" src="diagrams/warmup.png">

- Each box is seperated by 60 pixels of space between them.

Dan's Groups solution:

```html

<section>
  <div></div>
  <div></div>
  <div></div>
</section>

<section>
  <div></div>
  <div></div>
  <div></div>
</section>

<section>
  <div></div>
  <div></div>
  <div></div>
</section>
```

```css
/* Are we thinking of these as row or columns */
div {
  width: 300px;
  height: 300px;
  background-color: black;
  margin: 30px;
}

section {
  display: flex;
}

```

Jacob: How does block work, and the other options?
- display property, how do other elements lay around the element we are styling.
  - other options: 
    - inline ( think of this as the opposite ): things are meant to sit next to it.
      - You can't give these a height and a width.
    - inline-block: sort of combination of the block height and width properties, as well as sitting inline with content around it.
    - Today we discess flex display property.

- Float: tells the container to sit to the left or right of the surrounding content.

## Code Review

- Using Forms in our Cookie Stores
- Paulo: appending a row.

## Flex vs Float Layouts

- Float: float is property in CSS that is a property that wants to think of HTML (HYPER TEXT), I can display text to people sort of like newspaper.
  - images and artifacts embedded around blocks of text.
  - Float was a property that was thought of as a way to get elements to float around each other.
- Flex: How do mobile layouts perfrom well with limited space.
  - Think of a river of elements flowing one way.
  - you give a container oneof two flex properties ( row / column ).
    - anything in the container, will align itself as a row or column.

- Positioning things within flex boxes:
  - along the flex axis: justify- content;
  - opposite flex axis: align-items

## Javascript Debugging

- Console errors are your friend!!
- Syntax: super common they are things like typos

```javascript
  var number: 0`
```

- ReferenceError: you are trying to reference something that is undefined

```javascript

var objec = {
  number: 0,
}

console.log(object); // throws a RefernceError

```

- TypeError: Trying to perform an operation on the wrong type

```javascript

var object =  {
  number: 0,
}

object.push(); // push is a method on an array type thing instead of an object

```

- RangeError: Your trying to do something with a numeric value that is unacceptable

```javascript

var array = new Array(-1) // this tries to create an array with length -1 :(.

```
