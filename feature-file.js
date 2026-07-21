const arr = [1,2,3,4,5,6,7,8,9,10];

console.log(arr.map((item)=>item*2));
console.log(arr.reduce((prev,curr)=>prev+curr));
console.log(arr.filter((item ,index)=>item >3 && item <7));