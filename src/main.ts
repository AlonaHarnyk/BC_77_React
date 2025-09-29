// let a: unknown;

// a = 5;

// if (typeof a === "string") {
//   a.toUpperCase();
// }

// interface Car {
//   color: string;
//   maxSpeed: number;
//   weight?: number;
//   readonly number: string;
// }

// const car: Car = {
//   color: "red",
//   maxSpeed: 200,
//   weight: 600,
//   number: "583476t834ABC",
// };

// const car1: Car = {
//   color: "yellow",
//   maxSpeed: 220,
//   weight: 700,
//   number: "585676t834ABC",
// };

// car.color = "orange";

// const array: number[] = [1, 2, 3];
// // const array: Array<number> = [1, 2, 3];

// const array1: (string | number | boolean)[] = [1, 2, "3", "4", true];

// const cars: Car[] = [car, car1];

// const data = cars.map(({ color, maxSpeed }) => ({
//   color,
//   maxSpeed,
// }));

// let obj: null | Car = null;

// obj = car;

// type PromiseStatus = "pending" | "resolved" | "rejected";

// let promiseStatus: PromiseStatus = "pending";

// promiseStatus = "resolved";

// interface PromiseType {
//   status: PromiseStatus;
// }

// const promise: PromiseType = {
//   status: "pending",
// };

// promise.status = "rejected";

const func = (name: string, age: number): void => {
  console.log(`My name is ${name}, I'm ${age}`);
};

func("John", 40);

interface User {
  name: string;
  age: number;
  presentJob?: (job: string) => void;
}

// const func1 = (user: User): string => {
//   return `My name is ${user.name}, I'm ${user.age}`;
// };

// const res = func1({ name: "Ann", age: 20 });

const olha: User = {
  name: "Olha",
  age: 15,
  presentJob: (job) => console.log(job),
};

if (olha.presentJob) {
  olha.presentJob("Lawyer");
}
