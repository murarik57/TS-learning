//boolean
let isDone = false;

//number
let marks = 6.5; // 6 -5 ,0.333

//string
let studentName = "John Doe";

//null and undefined
let u: undefined = undefined;
let n: null = null;

let marksList = [90, 85, 88];

let nameList = ["John", "Jane", "Doe"]; // Array<string>

//Tuples --> fixed length array
let random = ["John", 25, false]; // mixed array

const person = { name: "John", age: 25, live: true, height: 5.9 };

const sum: (a: number, b: number) => number = (a, b) => {
  return a + b;
};

const sumDefault = (a: number, b = 5) => {
  return a + b;
};

sumDefault(4);

function greet(): void {
  console.log("Hello, World!");
}

const addHandle: (a: number, b: number, cb: (a: number) => number) => void = (
  a,
  b,
  cb
) => {
  const result = a + b;
  cb(result);
};

addHandle(2, 3, (res: number) => {
  console.log(res);
  return res + 2;
});

const parseUser = () => {
  //...api call db call

  return {
    name: "Jane",
    age: 30,
    live: true,
    height: 5.5,
    phoneNumber: "78946513",
  };
};
