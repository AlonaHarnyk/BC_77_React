// function getName<T extends { name: string }>(user: T): string {
//   return user.name;
// }

// getName({ name: "Ann", age: 20 });
// getName({ name: "John", id: 20 });
// getName({ name: "John", weight: 70, height: 175 });
// getName({ username: "John" }); // error

// function getLength<T extends { length: number }>(data: T): number {
//   return data.length;
// }

// getLength("Hello");
// getLength(["Hello"]);
// getLength(5); // error

// function logger<T, Y>(a: T, b: Y): void {
//   console.log(a);
//   console.log(b);
// }

// logger<number, number>(1, 3);
// logger<string, boolean>("4", true);
// logger<(number | string)[], { a: number }>([1, "3"], { a: 7 });

// interface HttpResp<T> {
//   data: T;
//   code: number;
//   message: string;
// }

// // GET /person

// interface Person {
//   id: number;
//   name: string;
//   age: number;
// }

// const getPersonResp: HttpResp<Person> = {
//   data: { id: 1, name: "Olha", age: 50 },
//   code: 200,
//   message: "Success",
// };

// // POST /todo

// interface ToDo {
//   id: number;
//   title: string;
//   description: string;
// }

// const postToDoResp: HttpResp<ToDo> = {
//   data: { id: 2, title: "Olha", description: "test" },
//   code: 201,
//   message: "Created",
// };

// // GET /username

// const getNameResp: HttpResp<string> = {
//   data: "Olha",
//   code: 200,
//   message: "Success",
// };
