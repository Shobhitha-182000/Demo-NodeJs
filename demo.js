//  const http=require('http');
//  let a=20;
//  let b=20;
//  const product=a*b;
//  const server=http.createServer((req,res)=>{
//     res.write(`<html><body><h1>${product}</h1></body></html>`);
//     res.end();
//  })
//  server.listen(3000);
let a = 20;
let b = 20;
const product = (a, b) => {
  return a * b;
};
console.log(product(a, b));
const Student = {
  name: "Raj",
  age: 20,
  greet: (name, age) => {
    console.log(name + " " + age);
  },
};
Student.greet(Student.name, Student.age);

const array = ["apple", "oranges", " ", "mango", " ", "lemon"];

const newArr = [];
array.map((item, index) => {
  if (item === " ") {
    array[index] = "empty string";
    newArr[index] = array[index];
  } else {
    newArr[index] = item;
  }
});
console.log(newArr);
const obj3 = { key1: 1 };

// const obj4 = { ...obj3};

// if (obj3 === obj4) {
//   console.log("same objects");
// } else {
//   console.log("different objects");
// }
// const obj1 = {'key1': 1 , 'key2' : 2}

// const obj2 = { ...obj1, key1: 1000}
// console.log(obj1);

// console.log(obj2);
//Destructring 
// const obj1 = {'key1': 1, "key2": 2, "key3": 1000}
// const { key1, key3} = { ...obj1}
// console.log(key1, key3);
// const arr1 = ['value1', 'value2']

// const [ val1, val2 ] = arr1

// console.log(val1)

// console.log(val2);
const obj1 = {'key1': 1, "key2": 2, "key3": 1000}

let { key1, key3} = obj1
key1 = 20;
key3 = 123
console.log(obj1.key1, obj1.key3);
