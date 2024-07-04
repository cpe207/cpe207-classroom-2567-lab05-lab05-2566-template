//660612162 อภิชา เลฺิศจินตนกิจ
// define interface for Student object
interface Student {
  name:string;
  score:number;
}
/* Your code here */
  

// assign interface/type to the function definition properly
function findTopNames(students:Student[]):string[] {
  /* Your code here */
 
return students
.filter((students)=> students.score > 8)
.map((students) => students.name)
}   

// assign interface/type to the student1 object properly
const students1: Student[]= [
  { name: "john", score: 10 },
  { name: "jane", score: 9 },
  { name: "jim", score: 8 },
];

console.log(findTopNames(students1));

module.exports = findTopNames;
