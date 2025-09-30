// task - 1

function reverseArray<T>(arr: T[]): T[] {
  return arr.reverse();
}

reverseArray<number>([1, 2, 3]);

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

getUserByAge([{ name: "Mango", age: 20 }, { name: "Polo", age: 25 }])

// task -4
const arr: (string | number | boolean)[] = [1, 2, "a", "b", true, false];

function filterByType<T>(arr: T[], type: string): T[] {
return arr.filter(element => typeof element === type)
}

console.log(filterByType(arr, "string"));
console.log(filterByType(arr, "boolean"));

// task - 5

function getLenght(data: unknown): number | null{

  if (typeof data === "string" || Array.isArray(data)) {
    return data.length
  } 
  return null;
} 

getLenght( "Poly")