const arr = [1,2,3,4,5,6,7,8,9,10];

// console.log(arr.map((item)=>item*2));
// console.log(arr.reduce((prev,curr)=>prev+curr));
// console.log(arr.filter((item ,index)=>item >3 && item <7));

const arr2 = [10,20,40];
console.log(arr.concat(arr2));
console.log(arr.find((item,index)=>item>5));

const depthArray =[1,2,[3,[4],2]];
console.log(depthArray.flat(1));
console.log(depthArray.flat(2));


