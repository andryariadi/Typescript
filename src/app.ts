// String
let nama: string;
nama = "Andry Ariadi";

// Number
let age: number;
age = 26;

// Boolean
let isMan: boolean;
isMan = true;

// Any
let data: any = "Andry";
data = 26;
data = true;
data = [];
data = {};
data = [] || "Andry" || false || {} || 26;

// Array
let array: number[];
array = [26];
array.push(50); // --> bisa ditambah value baru
array[1] = 13; // --> bisa direassign

let array2: any[];
array2 = ["Andry", 26, true, {}];
// array2 = ["Ariadi", 13, false, {}];

// Array Read Only
let array3: ReadonlyArray<string>;
array3 = ["Andry", "Ariadi"];
// array3.push("Full"); --> tidak bisa ditambah value baru
// array3[0] = "Nama"; --> tidak bisa direassign

// Array Tuple
let biodata: [string, number, boolean, {}]; // --> jika dirambahkan "readonly" setelah : maka arraynya akan bersifat read only saja
biodata = ["Malang", 123, true, { age: 26 }];
// biodata[0] = "Kota Malang";

console.table({ nama, age, isMan, data, array, array2, array3, biodata });

// Enum
enum Month {
  JAN = 23,
  FEB,
  MAR = "isDay",
  ARL = 30,
}

console.log(Month);

// Function
function getName() {
  return `My name is Andry Ariadi`;
}

function getAge() {
  return 26;
}

function isBoy(): boolean {
  return true;
}

function isArray(): string[] {
  return ["Yes this is array"];
}

//void tidak boleh di return
function address(): void {
  console.log("Kota Malang");
}
address();

const result = [getName(), getAge(), isBoy(), isArray()];
console.log(result);

function multiply(num1: number, num2: number): number {
  return num1 * num2;
}

const value = multiply(2, 3);
console.log({ value });

function myBiodata(name: string, age: number): string {
  return `My name is ${name} i am ${age} old`;
}

const myBio = myBiodata("Andry Ariadi", 26);
console.log(myBio);

// Function as Type
type Tambah = (val1: number, val2: number) => number;

const isResult: Tambah = (val1: number, val2: number): number => {
  return val1 + val2;
};

console.log(isResult(5, 5));

// Object
type User = {
  name: string;
  age: number;
  isMan: boolean;
};

let user: User = {
  name: "Andry Ariadi",
  age: 23,
  isMan: true,
};

console.log(user);

// Union
let phone: boolean | number;

phone = 6282215458337;
phone = true;
console.log(phone);

// Optional Parameter
function fullName(firstName: string, lastName?: string): string {
  return `Hallo my name is ${firstName} ${lastName}`;
}

console.log(fullName("Andry"));

// Interface
interface Processor {
  brand: string;
  baseModel: string;
  modelName: string;
  coreTotal: CoreCount | CoreName;
}

type CoreCount = 2 | 4 | 8 | 12;
type CoreName = "DualCore" | "OctaCore" | "QuadCore" | "SuperCore";
interface Processor {
  clockSpeed: number;
}

interface Intel extends Processor {
  turboBoost: boolean;
}

interface AMD extends Processor {
  precisonBoost: boolean;
}

function createIntel(processor: Intel): void {
  console.log(`
  ------------
  Memperkenalkan precessor terbaru dari ${processor.brand} dengan spesifikasi sebagai berikut:
  ------------

  base model: ${processor.baseModel}
  model: ${processor.modelName}
  kecepatan clock: ${processor.clockSpeed}
  turbo boost: ${processor.turboBoost}
  total core: ${processor.coreTotal}

  `);
}

function createAMD(processor: AMD): void {
  console.log(`
  ------------
  Memperkenalkan precessor terbaru dari ${processor.brand} dengan spesifikasi sebagai berikut:
  ------------

  base model: ${processor.baseModel}
  model: ${processor.modelName}
  kecepatan clock: ${processor.clockSpeed}
  turbo boost: ${processor.precisonBoost}
  total core: ${processor.coreTotal}

  `);
}

const corei5: Intel = {
  brand: "Intel",
  baseModel: "core i5",
  modelName: "i5-12345F",
  clockSpeed: 4,
  turboBoost: true,
  coreTotal: 4,
};

const ryzen3: AMD = {
  brand: "AMD",
  baseModel: "ryzen 3",
  modelName: "r-1454X",
  clockSpeed: 6,
  precisonBoost: false,
  coreTotal: "OctaCore",
};

createIntel(corei5);
createAMD(ryzen3);

// OOP
class Customer {
  readonly id: number; // --> wajid diisi pada constructornya
  name: string; // --> wajid diisi pada constructornya
  email: string = ""; // tidak wajib diisi pada constructornya krna ada default valuenya
  age?: number; // karna optional boleh tdk diisi pada constructornya

  constructor(id: number, nama: string, umur: number) {
    this.id = id;
    this.name = nama;
    this.age = umur;
  }

  sayHello(name: string): string {
    return `Hi ${name}, my name is ${this.name}, i'm ${this.age} old.`;
    // console.log(`Hi ${name}, my name is ${this.name}, i'm ${this.age} old.`); // jika balikan functionnya adalah void
  }
}

const customer = new Customer(1, "Andry Ariadi", 27);
// customer.id = 2;
// customer.name = "Akbar";
// customer.age = 2;
// customer.email = "andryariadi23@gmail.com";
const hello = customer.sayHello("Bu Dina");

console.log(customer);
console.log(hello);

class Category {
  name?: string;

  get getName(): string {
    return this.name ? `I like a ${this.name}` : "empty";
  }

  set setName(value: string) {
    if (value !== "") {
      this.name = value;
    }
  }
}

const category = new Category();
category.name = "Cookies";
// category.name = "";

console.log(category);
console.log(category.getName);

class Employe {
  readonly id: number;
  age?: number;
  email: string = "Empty";

  constructor(id: number, public name: string, age: number) {
    this.id = id;
    this.age = age;
  }
}

class Manager extends Employe {
  address: string;

  constructor(id: number, name: string, age: number, address: string) {
    super(id, name, age); // Memanggil constructor dari class Employe (parent)
    this.address = address;
  }
}

const manager = new Manager(1, "AndryAriadi", 27, "Kota Malang");

console.log(manager);

// Interface Inheritance
interface HasName {
  name: string;
  age: number;
}

interface SayHello {
  sayHello(name: string): void;
}

class Person implements HasName, SayHello {
  name: string;
  age: number;

  constructor(name: string, umur: number) {
    this.name = name;
    this.age = umur;
  }

  sayHello(nama: string): void {
    console.log(`Hi ${nama}, my name is ${this.name}, i'm ${this.age} old.`);
  }
}

// Method Overriding
class Student extends Person {
  matkul: string;

  constructor(name: string, age: number, matkul: string) {
    super(name, age);
    this.matkul = matkul;
  }

  sayHello(nama: string): void {
    // console.log(`Hi Sir ${nama}, my name is ${this.name} i'm ${this.age} old, are you teacher for mata kuliah ${this.matkul} ?`);
    super.sayHello(nama); // --> jika memakai function dari parentnya
    console.log(`Are you teacher for mata kuliah ${this.matkul} ?`);
  }
}

const person = new Person("Andry", 13);
person.sayHello("Pak Akbar");

const student = new Student("Tasmiah", 17, "Frontend");
student.sayHello("Alvine Ramadhan");

// Visibility (public, private, protected):

class Counter {
  // private counter: number = 5;
  protected counter: number = 2; // bisa diakses diluar classnya krna memakai protected
  increment(): void {
    this.counter++;
  }

  private getCounter(): string {
    return `Nomer antrian selanjutnya adalah ${this.counter}`;
  }

  protected getCounter2(): string {
    return `Nomer antrian selanjutnya adalah ${this.counter}`;
  }
}

const counterNum = new Counter();
// counterNum.counter = 10; // --> tdk bisa diakses diluar classnya krna memakai private

console.log(counterNum);
// console.log(counterNum.getCounter());

class DoubleCounter extends Counter {
  increment(): void {
    this.counter += 2;
  }

  public getCounter2(): string {
    return `Nomer antrian selanjutnya adalah ${this.counter}`;
  }
}

const doubleCount = new DoubleCounter();

doubleCount.increment();
doubleCount.increment();
doubleCount.increment();
console.log(doubleCount.getCounter2());

// Operator instanceof
console.log(doubleCount instanceof DoubleCounter);
console.log(doubleCount instanceof Counter);
console.log(doubleCount instanceof Student);

// Abstract Class
abstract class Mahasiswa {
  readonly id: number;
  name: string;
  abstract age: number; // --> tdk wajib diisi di constructornya, kecuali kalo di class turunannya
  abstract email: string; // --> tdk wajib diisi di constructornya, kecuali kalo di class turunannya

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }

  abstract sayHi(nama: string): void;
}

class RegulerMhs extends Mahasiswa {
  age: number;

  constructor(id: number, name: string, ege: number, public email: string) {
    super(id, name);
    this.age = age;
  }

  sayHi(nama: string): void {
    console.log(`Hi Mom ${nama}, my name is ${this.name}, i'm a new student here.`);
  }
}

const regMahasiswa = new RegulerMhs(1, "Alvine Ramadhan", 27, "alvine23@gmail.com");
regMahasiswa.sayHi("Tasmiah");

console.log(regMahasiswa);

// Static
class Player {
  static Name: string = "Andry Ariadi";
  static Age: number = 27;
  static Position: string = "Striker";

  static sum(...values: number[]): number {
    let total = 0;
    for (let value of values) {
      total += value;
    }
    return total;
  }
}

console.log(Player.Name, Player.Age, Player.Position); // --> krna static maka bisa diakses secara langsung tanpa di instance
console.log(Player.sum(5, 5, 5, 5)); // --> krna static maka bisa diakses secara langsung tanpa di instance
