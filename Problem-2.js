/**
 * Problem-2: With a single integer as the input, generate the following until a = x [series of numbers as shown in below examples]
 * Output: (examples)
    1) input a = 1, then output : 1
    2) input a = 2, then output : 1, 3
    3) input a = 3, then output : 1, 3, 5
    4) input a = 4, then output : 1, 3, 5, 7
    .
    .
    5) input a = x, then output : 1, 3, 5, 7, ......
 */

function generateSeries(a){
    let result = [];
    for(let i = 1; i <= a * 2; i += 2){
        result.push(i);
    }
    return result.join(", ");
}

//Testing
let input = 1;
console.log(`Input a = ${input}, then output: ${generateSeries(input)}`);

let input1 = 2;
console.log(`Input a = ${input1}, then output: ${generateSeries(input1)}`);

let input2 = 3;
console.log(`Input a = ${input2}, then output: ${generateSeries(input2)}`);

let input3 = 4;
console.log(`Input a = ${input3}, then output: ${generateSeries(input3)}`);