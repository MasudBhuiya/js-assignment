// 1.first 
// first get input positive number and second this input multiplyied by 3. Then this number operation by 10. And then this number divide by 2 and last this number substraction by 5.

function mindGame(number){
    if(typeof number !== 'number'){
        return 'Input should be a number';
    }
    else{
        const multiply = number * 3;
    const operation = multiply + 10;
    const divide = operation / 2;
    const substraction = divide - 5;
    result = substraction;
    return result;
    }
}
const input = 5;
const total = mindGame(input);
// console.log(total);


// second
//first, get a string input. then there how much character here, find this. if totalcharacers are even, return "even". if totalcharacers are odd, return "odd".

function evenOdd(str){
    if(typeof str !== 'string'){
        return 'Inter a string';
    }
    else if(str.length % 2 === 0){
        return 'Even';
    }
    else{
        return 'Odd';
    }
}
const myName = 'Rakibul';
const totalCharacers = evenOdd(myName);
// console.log(totalCharacers);






