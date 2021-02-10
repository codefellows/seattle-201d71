'use strict';


var buttons = {
  makePairs: document.querySelector('#make-pairs'),
  getRandom: document.querySelector('#get-student'),
  reset: document.querySelector('#reset'),
}
var randomStudentName = document.getElementById('random-student');
var studentList = document.getElementById('students');
var pairList = document.getElementById('pairs');

var studentNames = [
  "Andy Agulue",
  "Mason Aviles",
  "Irwin Ayala",
  "Nicki Baldwin",
  "Yuliya Barysevich",
  "Nicholas Cerillo",
  "Connor Curtis",
  "Dan Engel",
  "Jacob Holmer",
  "Zack Hornung",
  "Theodore Knecht",
  "Barrett Nance",
  "Fizzo Pannosch",
  "R. Mal Sweet",
  "Matthew Simms",
  "James Shreckengost",
  "Victor Sullivan",
  "Jason Taisey",
  "Paulo Martin",
  "Lydia Minehan-Tubic"
];

var used = [];

buttons.getRandom.addEventListener('click', (e) => {
  e.preventDefault();
  renderRandomStudent(randomStudent(studentNames, used));
});

buttons.reset.addEventListener('click', (e) => {
  e.preventDefault();
  reset(used);
  renderRandomStudent('Click "Choose Random Student" to select a student');
});

buttons.makePairs.addEventListener('click', (e) => {
  e.preventDefault();
  renderRandomPairs(randomPairs(studentNames));
});

for (var i = 0; i < studentNames.length; i++) {
  var studentItem = document.createElement('li');
  studentItem.textContent = studentNames[i];
  studentItem.setAttribute('class', 'student');
  studentList.appendChild(studentItem);
}

function renderRandomStudent(student) {
  randomStudentName.textContent = student;
}

function renderRandomPairs(pairs) {
  pairList.innerHTML = "";
  for (var i = 0; i < pairs.length; i++) {
    var pairItem = document.createElement('li');
    pairItem.textContent = pairs[i];
    pairItem.setAttribute('class', 'student-pair');
    pairList.appendChild(pairItem);
  }
}

function randomPairs(pool) {
  const students = [...pool];
  const results = [];
  let student1, student2;

  while (students.length) {

    student1 = students[Math.floor(Math.random() * Math.floor(students.length))];
    student2 = students[Math.floor(Math.random() * Math.floor(students.length))];

    if (student1 !== student2) {

      results.push(`${student1} | ${student2}`);
      students.splice(students.indexOf(student1), 1);
      students.splice(students.indexOf(student2), 1);

    } else if (student1 === student2 && students.length === 1) {

      let pairIndex = Math.floor(Math.random() * Math.floor(results.length));
      let pair = results[pairIndex];
      students.splice(students.indexOf(student1), 1);
      results[pairIndex] = pair += ` | ${student1}`;

    }
  }

  return results;
}

function randomStudent(pool, used) {
  let randomIndex = Math.floor(Math.random() * pool.length);

  while (used.includes(pool[randomIndex])) {
    if (used.length === pool.length) {
      return 'All Students have been randomly selected :)';
    }
    randomIndex = Math.floor(Math.random() * Math.floor(pool.length));
  };

  used.push(pool[randomIndex]);
  return pool[randomIndex];
}

function reset(used) {
  try {
    used.splice(0, used.length);
    console.log('Pool reset');
  } catch (e) {
    console.error('Reset pool error', e);
  }
}


