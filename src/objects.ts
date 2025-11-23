//interface --> Interface defines the structure of an object
interface PersonObject {
  age: number;
  name: string;
  live: boolean;
  height: number;
  phoneNumber?: string; // optional property
}

// type is declare type of anything
type PersonType = {
  age: number;
  name: string;
  live: boolean;
  height: number;
  phoneNumber?: string; // optional property
};

//object
const person: PersonType = { name: "John", age: 25, live: true, height: 5.9 }; // extra property height will give error in strict mode

const person2: PersonObject = {
  name: "Jane",
  age: 30,
  live: true,
  height: 5.5,
  phoneNumber: "78946513",
};

interface carDetails {
  name: string;
  model: number;
  wheels: number;
  running: boolean;
  owner: ownerDetails;
}
interface ownerDetails {
  name: string;
  age: number;
  phone: string;
}

const car: carDetails = {
  name: "BMW SX4",
  model: 2025,
  wheels: 5,
  running: true,
  owner: {
    name: "Murari",
    age: 56,
    phone: "+912345684",
  },
};
