/**
 * Problem-3: With a single integer as the input, generate the following until a = x [series of numbers as shown in below examples]
 
  Output: (examples)
    1) input a = 1, then output : 1
    2) input a = 2, then output : 1
    3) input a = 3, then output : 1, 3, 5
    4) input a = 4, then output : 1, 3, 5
    5) input a = 5, then output : 1, 3, 5, 7, 9
    6) input a = 6, then output : 1, 3, 5, 7, 9
    .
    .
    7) input a = x, then output : 1, 3, 5, 7, .......
 */

function generateSeriesByEvenOdd(a){
    let value = a % 2 === 0 ? a - 1 : a;
    let result = [];
    for(let i = 1; i <= value * 2; i += 2){
        result.push(i);
    }
    return result.join(", ");
}

//Testing
let input = 1;
console.log(`Input a = ${input}, then output: ${generateSeriesByEvenOdd(input)}`);

let input1 = 2;
console.log(`Input a = ${input1}, then output: ${generateSeriesByEvenOdd(input1)}`);

let input2 = 3;
console.log(`Input a = ${input2}, then output: ${generateSeriesByEvenOdd(input2)}`);

let input3 = 4;
console.log(`Input a = ${input3}, then output: ${generateSeriesByEvenOdd(input3)}`);

let input4 = 5;
console.log(`Input a = ${input4}, then output: ${generateSeriesByEvenOdd(input4)}`);

let input5 = 6;
console.log(`Input a = ${input5}, then output: ${generateSeriesByEvenOdd(input5)}`);