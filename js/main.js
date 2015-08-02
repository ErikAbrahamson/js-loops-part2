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
for (var i = 0; i <= students.length; i++) {
  var studentsCopy = students.slice();
  var clonedStudent = studentsCopy.slice(1,4);
  for (var c = 0; c < clonedStudent.length; c++) {
    studentsCopy.splice(i + 2, 0, clonedStudent[c]);
  }
}
