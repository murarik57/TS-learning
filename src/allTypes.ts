//boolean
let isDone: boolean = false;

//number
let marks: number = 6.5; // 6 -5 ,0.333

//string
let studentName: string = "John Doe";

//null and undefined
let u: undefined = undefined;
let n: null = null;

//array
let marksList: number[] = [90, 85, 88];
let marksList2: Array<number> = [90, 85, 88];

let nameList: string[] = ["John", "Jane", "Doe"]; // Array<string>

//Tuples --> fixed length array
let random: [string, number, boolean] = ["John", 25, false]; // mixed array

//union
let mixed: Mixed;
mixed = "Hello";
mixed = false;

let random2: (Mixed | undefined)[] = ["John", 25, false, 45, "Doe", undefined]; // mixed array

//type operator
type Mixed = string | number | boolean;

const myAge: Mixed = 25;
