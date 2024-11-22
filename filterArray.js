/*function guestNum(guestInput) {
    const randomNum = Math.floor(Math.random() * 10) + 1;
    let guestNumber = Number(guestInput); 
    return (!isNaN(guestNumber) && guestNumber >= 1 && guestNumber <= 10) ? "Good Work" : "Not Match";
}
module.exports = guestNum;

const Calculate = (num1, num2) => {
    if (isNaN(num1) || isNaN(num2)) return;
    return { multiplicationResult: num1 * num2, divisionResult: num1 / num2 };
};

module.exports = Calculate;

const findTheLongestString = (arr) => {
    let longestString = '';
    for (let str of arr) {
        longestString = str.length > longestString.length ? str : longestString;
    }
    return longestString;
};
module.exports = findTheLongestString;


const findLargestEvenNum = (arr) => {
    let largestNum = null;
    for (let num of arr) {
        if (num % 2 === 0) {
            largestNum = largestNum === null ? num : Math.max(largestNum, num);
        }
    }
    return largestNum; 
};
module.exports = findLargestEvenNum;


const removeDuplicates = (str) => {
    const counts = {};
    for (const char of str) {
        counts[char] = (counts[char] || 0) + 1;
    }
    return Array.from(str).filter(char => counts[char] === 1).join('');
};
module.exports = removeDuplicates;

function cubeSum(n){
    let sum=0;
    for (let i=1; i<=n; i++){
        sum+=i**3;
    }
    return sum;
}
module.exports=cubeSum;

function objectsEquivalent(obj1, obj2) {
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);

    return keys2.every(key =>  keys1.includes(key) && obj1[key] === obj2[key]) 
}
module.exports=objectsEquivalent;

function filterArray(originalArray, valuesToFilter) {
    
    return originalArray.filter(item => !valuesToFilter.includes(item));
}
module.exports=filterArray;


function extractValuesAtIndexes(array, indexes) {
    return indexes.map(index => array[index]).filter(value => value !== undefined);
}
module.exports=extractValuesAtIndexes;


const DeleteObj=(student)=>{
    delete student.rollno;
 }
module.exports=DeleteObj;

const daysLeftForChristmas = () => {
    const presentDay = new Date();
    const christmasDay = new Date(presentDay.getFullYear(), 11, 25);
    if (presentDay > christmasDay) christmasDay.setFullYear(christmasDay.getFullYear() + 1);
    return Math.round((christmasDay - presentDay) / (1000 * 3600 * 24));
};
module.exports =daysLeftForChristmas;

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
module.exports=Cylinder;

const fetchData=()=>{
    return new Promise((resolve)=>{
        const delay=Math.floor(Math.random()*(8000-2000 + 1))+ 2000;
        setTimeout(()=>{
            resolve("Data fetched succesfully!");
        },delay)
    });
}     
module.export=fetchData;

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
module.exports=Clock;

const bookFilter = (books) => {
    return books.filter(book => book.pages > 300);
  };
  
  module.exports=bookFilter;

  function wordReverse(words) {
    return words.map(word => word.split('').reverse().join(''));
  }
  
  module.exports = wordReverse;
  

function averageScore(...score) {
    const total = score.reduce((acc, score) => acc + score, 0);
    return (total / score.length).toFixed(2);
  }
  
module.exports= averageScore;

const Cycle=(radius)=>{
    return radius === undefined ? "Radius is missing!" : radius * radius * Math.PI;

}
module.exports=Cycle;

function myArray(){
    const arr1 = [];
const arr2 = [];
const combinedArr = [...new Set([...arr1, ...arr2])].sort((a, b) => a - b);
}
module.exports=myArray;

/*const Car = { make: "toyota", model: "hummer", year: "2013" };
const { make, model, year = "unknown" } = Car;
module.exports = Car;*/

const CalculatePrice = (product) =>{
    /*`Total price: ${product.price}* ${product.qty}`;*/
        return product.price * product.qty;
       
   }
   module.exports=CalculatePrice;

   /*const findMax=(number)=>Math.max(...number);
   module.exports=findMax;*/

   