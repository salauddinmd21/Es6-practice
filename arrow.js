// function doubleIt (num){
//     return num *2;
// }
//  const doubleIt = function(num){
//      return num* 5
//  }
const doubleIt = num => num*2;
const add = (x, y) => x + y ;

const doMath = (x,y) => {
    const sum = x + y;
    const difference = x - y;
    const result = sum * difference;
    return result;
}

const result = doMath(5, 2);
console.log(result);

