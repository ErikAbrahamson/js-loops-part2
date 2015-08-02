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
function getFourth() {
  var studentsCopy = students.slice();
  var clonedStudent = studentsCopy.slice(1, 4);
  var i = 0, j = 1;
  for (i; i < 3, j < 6; i++, j+=2) {
    studentsCopy.splice(j, 0, clonedStudent[i]);
  }
  return studentsCopy;
}
console.log(getFourth());
