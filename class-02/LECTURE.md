# Class 02: Javascript Data Types / Flow control

## Warmup

create a set of bash terminal commands that will create the following folders and files

```markdown

.
|
| - folder1
|     | - folder_1_file1.html
|     | - folder_1_file2.html
| - folder2
|     | - folder_2_file1.html
|     | - folder_3
|     |     | - folder_3_file1.html
| - file_0.md


```

`mkdir folder1` -> creates a folder in our current terminal directory / folder called "folder1"
`cd folder1` -> moves into into folder1
`touch folder_1_file1.html` -> create the file in the directory we just moved into.

`touch folder1/folder_1_file1.html` -> creates the file at tthe specific path

`rm -rf folder_name` -> removes a folder from our current terminal folder / directory

Let say our terminal is in folder 3 `touch ../../folder1/folder_1_file3.html`

## Announcements

- Quizzes will open up tomorrow
  - Review topics we have covered already, multiple choice, unlimited retakes.
- Learning Journals should have opened up.

## Code Review

- A single html file, with some HTML, CSS and JavaScript.

## More Git and Github

- What happens when we run our various git commands
  - git add
  - git commit
  - git push

- For labs we need to do this:
  - 1) Create a repo for a project on github
    - This creates in the cloud a folder that we eventualyy will add files to our machine
  - 2) Clone from github to our machine, the repo we just made
    - `git clone <Some-url.git>`
  - 3) cd into project directory, and do our work
    - `git status` to check on what things git is tracking, and what things git has saved
  - 4) When we are ready to save our work
    - `git add`
    - `git commit`
    - `git push`

- We can still do this starting from
  - 1) Create a folder for project files / git directory
    - `mkdir project_name`
    - `cd project_name`
  - 2) Intialize your current directory as a git repository
    - `git init`
  - 3) Create a Repo on Github
    - copy the url from github
  - 4) Add that Repo as a remote
    - `git remote add origin <Some-url.git>`
  - 5) Now we can push our code to the github repo we created.

## Javascript Data Types

- There are 5 immutable data types in JS.
  - Strings
    - `var string = 'Here are words'`
    - `var anotherString = "More words"`
  - Numbers
    - var number = 10
    - var decimal = 10.2
    - var decimal = 1/2

  'I am a string ' + 10 => 'I am a string 10'

  - Booleans
    - True
    - False
    - `var isBoolean = true`
    - `var isNotBoolean = false`

    - null
    - undefined

## Conditional Statements

- if / else / if else
- flow control
  - what lines of code are goin to be run in our js engine

```javascript
 
// these statements alwaty evaluate to a boolean
if (true) {
  console.log('This statement will run')
} else {
  console.log('this statement will not run')
}

// == this is a way to evaulate 2 sides of a statement

var aBigNumber = 1000;

if (0 == 1) {
  console.log('this will never be true');
}
if (aBigNumber == 1000) {
  console.log('this should run just fine')
}

var UsersNumber = prompt('Guess a number');  // in JS functions return specific data types

typeof(UsersNumber) // return as a string the data type of whatever is in the parantheses

if (UsersNumber == 1000) {
  console.log('You guessed correctly');
} else {
  console.log('not quite');
}

// guessing
if (UsersNumber != 1000) {
  console.log('not quite');
}

// There is a weak and a strong evaluation in js
if (UsersNumber === 1000) {
  console.log('You guessed correctly');
}

// switch statements
// lets you define a large amount of conditions to evaluate


var NumOfGuesses = 12;

var UsersGuess = prompt('');

switch (NumOfGuesses) {

  // these always check for exact matches
  case 10:
    console.log('the number is 10');
    // if we don't want cases below the catches case to execute, we need a break
    break;
  case 11:
    console.log('the number is 11');
    break;
  case 12:
    console.log('the number is 12');
    break;
  default:
    console.log('number didnt equal any number above');

}

```

- Arrays
  - Let you store more than one piece of data in the same spot.

`var arrayOfNumbers = [2,4,6,8,9,10]`

  - We reference the discreet items in the array with an index number
    - `arrayOfNumbers[0] => 2`
    - `arrayOfNumbers[5] => 10`

