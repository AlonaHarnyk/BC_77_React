// task - 1

function reverseArray<T>(arr: T[]): T[] {
  return arr.reverse();
}

reverseArray([1, 2, 3]);

// task - 2

interface User {
    name: string,
    age: number
}

function getUsersByAge(users: User[]): User[] {
  return users.filter((user) => user.age > 20);
}

getUsersByAge([{name: "Mango", age: 20}, {name: "Polo", age: 25}])

// task - 3

function getUserByAge(users: User[]): User | undefined {
 return users.find(user => user.age > 20)   
}

getUserByAge([{name: "Mango", age: 20}, {name: "Polo", age: 25}])