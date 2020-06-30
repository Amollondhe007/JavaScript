let numbers = [1, 2, 3, 4, 5];
console.log (numbers);

let fruits = ['Apple','Banana','Grapes']
console.log (fruits);

let cars = new Array('Food','Toyota','Mercedes');
console.log(cars);

console.log (cars[1]);
cars[1] = 'Honda';
console.log (cars[1]);
console.log(cars);

fruits.push('cherry');
console.log (fruits);
console.log (fruits.length);

numbers.pop(2);
console.log(numbers);

let x;
for (x of fruits){
    console.log(x);
}

for (x in fruits){
    console.log(fruits[x]);
}