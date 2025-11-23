//intersection type &  (AND)

type Student = {
  name: string;
  age: number;
  class: number;
  height: number;
  rollno: number;
};

type Employee = {
  name: string;
  age: number;
  salary: number;
  company: string;
};

type WorkingStudent = Student & Employee;

const ajay: WorkingStudent = {
  name: "Ajay",
  age: 22,
  class: 10,
  height: 5.7,
  rollno: 100,
  salary: 30000,
  company: "Tech Solutions",
};

const murari: Student = {
  name: "Murari",
  age: 24,
  class: 12,
  height: 5.8,
  rollno: 101,
  //   company: "ABC Corp",
};

const Ram: Employee = {
  name: "Ram",
  age: 26,
  salary: 50000,
  company: "XYZ Ltd",
  //   rollno: 102,
};

type Murari = String & (Number | Boolean);
