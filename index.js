// 1.First 
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
const input = 50;
const total = mindGame(input);
console.log(total);


// Second
//first, get a string input. then there how much character here, find this. if totalcharacers are even, return "even". if totalcharacers are odd, return "odd".
function evenOdd(str){
    if(typeof str !== 'string'){
        return 'Input should be a string';
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
console.log(totalCharacers);


// Third
// first, get a input number. then the input substracted by 7. if result less then 7, return the result number. if result greaterthen 7, return the inputs double.
function isLGSeven(number){
let numberDistance = number - 7;
if(typeof number !== 'number'){
    return 'Input should be a number';
}
else if(numberDistance < 7){
    return numberDistance;
}
else if(numberDistance >= 7){
    return number * 2;
}
}
const number = 15;
const totalResult = isLGSeven(number);
console.log(totalResult);


//Four
//first, get a input number. there are Good or Bad numbers in this array. search the bad numbers and return how much Bad numbers on this array.
function findingBadData(arra){
    let badNumbers = [];
    if(Array.isArray(arra) !== true){
        return 'Input should be an array';
    }
    for(let i = 0; i < arra.length; i++){
        const number = arra[i];
        if(number <= -1){
            badNumbers.push(number);
        }
    }
    return badNumbers.length;
}
const numbers = [12, 66, -54, -45, 67, -76, 56, 24, -56, -95];
const badData = findingBadData(numbers);
console.log(badData);


//five
// first, take friends 3 gems number. get out the total gems and find how much diamond get. if total diamond greaterthen 2000, then substracted the result by 2000 and return last result. 
function gemsToDiamond(friend1, friend2, friend3){
    const friend1Gems = 21;
    const friend2Gems = 32;
    const friend3Gems = 43;

    const friend1Diamond = friend1 * friend1Gems;
    const friend2Diamond = friend2 * friend2Gems;
    const friend3Diamond = friend3 * friend3Gems;
    let totalDiamond = friend1Diamond + friend2Diamond + friend3Diamond;
    // console.log(totalDiamond);
    if(typeof friend1 !== 'number' || typeof friend2 !== 'number' || typeof friend3 !== 'number'){
        return 'Please provide all valid number';
    }
    else if(totalDiamond > 1000 * 2){
        return totalDiamond - 2000;
    }
    else{
        return totalDiamond;
    }
}
const friendsNumbers = gemsToDiamond(1, 1, 1);
console.log(friendsNumbers);