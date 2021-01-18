# Class 06: JS Objects and The DOM (Document Object Model)

## Addressing Feedback

- What is going well
  - Enjoying lecture.
  - Lots of good questions.
  - Shout out to the TAs
  - Remo is a great.

- Some issues.
  - We are spending too much in question mode, getting side tracked.
  - More Career stuff / less career.
    - Address career coaching assignmently directly before they happen.
    - Freelance work ( a lot less coding, a lot more admin ).
  - More Stucture to lecture and lab time.
    - Pull back on demo experimentation.
      - Less weird things in demo shuold lead you down a better path in lab.
    - Want lecture to end between 12:00 and 12:30.

## JS Objects

- Fundamental data structure ( something that holds different types of data ie: string, numbers, booleans, nulls, undefined );
- Objects allows us to place things in a specific place.
`var array = [1, '1', 2];` // how arrays work
  - when we reference items within: array[0] => 1;
`var object = { key: value, }`
  - var person = { name: 'Jacob' }
  - no are reference looks like this: person.name => 'Jacob';
    - This is reference is know as 'dot notation';
    - We can still use 'bracket notation' if we want
    - person['name'] => 'Jacob'
      - Handy when we need to use a variable to represent a property name.
      - `var propertyName = null`;
        - `propertyName = 'name'`;
      - `person[propertyName]`;
        - `person.propertyName` => this will give us nothing (undefined);
  - Everytime we see something like array.length;
- things we define on an object, are comma seperated.
  - You don't need a comma at the end, but it won't break your code to have one at the end.
- If we want to place a function on a object, we call this a method
- 'this' => we call this contextual 'this',
  - inside of an object, 'this' refers to the object the object that is being defined.

```javascript

var person = {
  name: 'Jacob',
  age: 31,
  languages: ['javascript', 'english'], 
  speak: function () {
    console.log('Hey there');
  },
  greet: function () {
    console.log('My name is ' + this.name);
  },
  school: {
    name: 'Code Fellows',
  },
}

person.speak();

// prints to the console => 'Hey there';

person.name;

person.greet() // => 'My name is Jacob';

person.school.name;

person.name = 'Chance'; // we can change properties after objects are already created.

```

## Document Object Model

- This is an JavaScript object that lives globally within the browser.
- Represent the HTML document that we are currently looking at.
- It has it's own properties and methods, many of which we will discuss.
- We are going to use this today to select elements that are on the page, create new elements that are not on the page yet, append those new element to the document object.
  - Useful methods:
    - `getElementById() // <= selects an element`
    - `createElement() // <= creates a new HTML element that is not displayed yet`
    - `appendChild() // <= places new elements on the page.`
    - `setAttributes() <= lets us modify elements with styling or classname, or ids`
    - `textContent <= set the content within opening an closing tags`

## Modeling The Problem Domain

- Understanding the scope of the problem, and providing a working model of how it can be solved.
- Demo in README.md
