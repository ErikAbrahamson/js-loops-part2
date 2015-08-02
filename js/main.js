var students = ['joe', 'carl', 'rachel', 'derek', 'lily'];
//1
for (var i = 0; i < students.length - 1; i++) {
  console.log(students[i]);
}
//2
for (var i = 0; i < students.length; i +=2) {
  console.log(students[i]);
}
//3
for (var i = students.length; i >= 0 ; i--) {
  console.log(students[i]);
}
//4


for (var i = 0; i < 3; i++) {
  var studentsCopy = students.slice();
  var clonedStudent = studentsCopy.slice(1, 4);
  for (var x = 1; x < 6; x+=2) {
    studentsCopy.splice(x, 0 , clonedStudent[i]);
  }
}
