//ex 1
        function guestNum(guestInput) {
    const randomNum = Math.floor(Math.random() * 10) + 1;
    let guestNumber = Number(guestInput); 
    return (!isNaN(guestNumber) && guestNumber >= 1 && guestNumber <= 10) ? "Good Work" : "Not Match";
}

//ex 2
const daysLeftForChristmas = () => {
    const presentDay = new Date();
    const christmasDay = new Date(presentDay.getFullYear(), 11, 25);
    if (presentDay > christmasDay) christmasDay.setFullYear(christmasDay.getFullYear() + 1);
    return Math.round((christmasDay - presentDay) / (1000 * 3600 * 24));
};
module.exports =daysLeftForChristmas;
//ex 3 
        const Calculate = (num1, num2) => {
            if (isNaN(num1) || isNaN(num2)) return;
            return { multiplicationResult: num1 * num2, divisionResult: num1 / num2 };
        };

    //ex 4
       const findTheLongestString=(arr)=>{
        longestString='';
        for (let str of arr){
         return str.length > longestString.length ? str : longestString;
        }
       
       }

 //ex 5
 const findLargestEvenNum = (arr) => {
    let largestNum = null;
    for (let num of arr) {
        if (num % 2 === 0) {
            largestNum = largestNum === null ? num : Math.max(largestNum, num);
        }
    }
    return largestNum; 
};
   

   //ex 6
   function removeDuplicates(inputString) {
    
    const charCount = [];
    for (const char of inputString) {
        charCount[char] = (charCount[char] || 0) + 1;
    } 
    let result = '';
    for (const char of inputString) {
        if (charCount[char] === 1) {
            result += char;
        }
    }
    
    return result;
}


   //ex 7
   function cubeSum(n){
    let sum=0;
    for (let i=1; i<=n; i++){
        sum+=i**3;
    }
    return sum;
}

//ex 8
function objectsEquivalent(obj1, obj2) {
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);

    return keys2.every(key =>  keys1.includes(key) && obj1[key] === obj2[key]) 
}


//ex 9
function filterArray(originalArray, valuesToFilter) {
    
    return originalArray.filter(item => !valuesToFilter.includes(item));
}

//ex 10
function extractValuesAtIndexes(array, indexes) {
    return indexes.map(index => array[index]).filter(value => value !== undefined);
}

//ex 11
const DeleteObj=(student)=>{
   delete student.rollno;
}

    
//ex 12
class Cylinder{
    constructor(height,radius){
        this.height=height;
        this.radius=radius;
    }
    CalculateVolume(){
        const volume=Math.PI*Math.pow(this.radius,2)*this.height;
        return volume.toFixed(4);
    }
}

//ex 13
function Clock() {
    const today = new Date();
    const hours = today.getHours();
    let minutes = today.getMinutes(); 
    let seconds = today.getSeconds(); 

    
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

   
    const time = hours + ':' + minutes + ':' + seconds;
    document.getElementById('clock').textContent = time; 
}


function clockUpdate() {
    Clock();
}

clockUpdate();
setInterval(clockUpdate, 1000);

//ex 14
function isLowerCase(str) {
    return str === str.toLowerCase();
}

//ex 15
const add=(a,b)=>{
    return new Promise((resolve,reject)=>{
        (a === undefined && b === undefined) 
            ? reject("must provide two parameters") 
            : resolve(a + b);
    });
}


//ex1
const decimal = () => {
    const euler = 2.71828;
    return euler.toFixed(4);
};

//ex 2
const findMax=(number)=>Math.max(...number);

//ex3
const CalculatePrice = (product) =>{
 `Totalo price: ${product.price}* ${product.qty}`;
}


//ex 4 
function myArray(){
    const arr1 = [];
const arr2 = [];
const combinedArr = [...new Set([...arr1, ...arr2])].sort((a, b) => a - b);
}

//ex 5

// car.js
const Car = { make: "toyota", model: "hummer", year: "2013" };

function getCarDetails() {
  const { make, model, year = "unknown" } = Car;
  return { make, model, year };
}



//ex 6
const Cycle=(radius)=>{
    return radius === undefined ? "Radius is missing!" : radius * radius * Math.PI;

}

//ex 7
function averageScore(...score) {
    const total = score.reduce((acc, score) => acc + score, 0);
    return (total / score.length).toFixed(2);
  }
  
    

//ex 8
function wordReverse(){
    const word=[];
const reverseString=word.map(word=>word.split('').reverse().join(''));

}


//ex 9
const bookFilter=(books)=>{
  books.filter(book => book.pages > 300);
}


//ex 10
const fetchData=()=>{
    return new Promise((resolve)=>{
        const delay=Math.floor(Math.random()*(8000-2000 + 1))+ 2000;
        setTimeout(()=>{
            resolve("Data fetched succesfully!");
        },delay)
    });
}     
