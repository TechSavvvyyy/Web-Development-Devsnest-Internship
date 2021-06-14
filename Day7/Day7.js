//question 1
var student={
    name : "David Rayy",
     sclass : "VI",
      rollno : 12 
}
console.log(Object.keys(student))

//Question 2
var student={
    name : "David Rayy",
     sclass : "VI",
      rollno : 12 
}
console.log(student)
delete student.rollno
console.log(student)

//Question 3
var student={
    name : "David Rayy",
     sclass : "VI",
      rollno : 12 }
var b=0;
for (let a in student){
    // console.log(a)
    ++b
}
  console.log(b)

Question 4
var library = [ 
{ author: 'Bill Gates', title: 'The Road Ahead', readingStatus: true }, 
{ author: 'Steve Jobs', title: 'Walter Isaacson', readingStatus: true },
{ author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', readingStatus: false }];
for (let index in library){
console.log(library[index].title)
console.log(library[index].author)
console.log(library[index].readingStatus,"\n")}

//Question 5
const vcylinder={
    v:1.0000,
    volume: function(height,radius){
        v=2*3.14*radius*height
        console.log(v)
    }}
vcylinder.volume(3.1,2.4)

//Question 6
var library = [ 
    { title: 'The Road Ahead', author: 'Bill Gates', libraryID: 1254 }, 
    { title: 'Walter Isaacson', author: 'Steve Jobs', libraryID: 4264 },
     { title: 'Mockingjay: The Final Book of The Hunger Games', author: 'Suzanne Collins', libraryID: 3245 }];
console.log(library.sort(function(a, b) {return b.libraryID - a.libraryID} ) )


