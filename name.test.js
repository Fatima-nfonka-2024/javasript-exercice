/*const guestNum=require('./filterArray') // ex 1
describe('guestNum', () => {
    beforeAll(() => {
        jest.spyOn(Math, 'random').mockReturnValue(0.5); 
    });

    afterAll(() => {
        Math.random.mockRestore();
    });

    test('returns "Good Work" for valid input between 1 and 10', () => {
        expect(guestNum(6)).toBe("Good Work");
    });

    test('returns "Not Match" for input less than 1', () => {
        expect(guestNum(0)).toBe("Not Match");
    });

    test('returns "Not Match" for input greater than 10', () => {
        expect(guestNum(11)).toBe("Not Match");
    });

    test('returns "Not Match" for non-numeric input', () => {
        expect(guestNum("abc")).toBe("Not Match");
    });
});


const Calculate = require('./filterArray'); //ex 2

describe('Calculate', () => {
    test('returns correct multiplication and division results for valid numbers', () => {
        const result = Calculate(10, 2);
        expect(result).toEqual({ multiplicationResult: 20, divisionResult: 5 });
    });

    test('returns undefined for NaN inputs', () => {
        expect(Calculate(NaN, 2)).toBeUndefined();
        expect(Calculate(10, NaN)).toBeUndefined();
        expect(Calculate(NaN, NaN)).toBeUndefined();
    });

    test('returns correct results for negative numbers', () => {
        const result = Calculate(-10, 2);
        expect(result).toEqual({ multiplicationResult: -20, divisionResult: -5 });
    });

    test('returns correct results for zero', () => {
        const result = Calculate(0, 5);
        expect(result).toEqual({ multiplicationResult: 0, divisionResult: 0 });
    });

    test('returns correct results for decimal numbers', () => {
        const result = Calculate(5.5, 2);
        expect(result).toEqual({ multiplicationResult: 11, divisionResult: 2.75 });
    });
});

const findTheLongestString = require('./filterArray'); // ex 3
describe('findTheLongestString', () => {
    test('returns the longest string from an array of strings', () => {
        expect(findTheLongestString(['apple', 'banana', 'cherry'])).toBe('banana');
    });

    test('returns an empty string for an empty array', () => {
        expect(findTheLongestString([])).toBe('');
    });

    test('returns the only string in a single-element array', () => {
        expect(findTheLongestString(['single'])).toBe('single');
    });

    test('returns the longest string when there are multiple strings of the same length', () => {
        expect(findTheLongestString(['cat', 'dog', 'elephant'])).toBe('elephant');
    });

    test('handles strings with spaces correctly', () => {
        expect(findTheLongestString(['hello world', 'hi', 'greetings'])).toBe('hello world');
    });
});

const findLargestEvenNum = require('./filterArray');// ex 4

describe('findLargestEvenNum', () => {
    test('returns the largest even number from an array of even and odd numbers', () => {
        expect(findLargestEvenNum([2, 3, 4, 5, 6])).toBe(6);
    });

    test('returns null when there are no even numbers', () => {
        expect(findLargestEvenNum([1, 3, 5, 7])).toBeNull();
    });

    test('returns the only even number when the array has one even number', () => {
        expect(findLargestEvenNum([2])).toBe(2); 
    });

    test('returns the largest even number when there are multiple even numbers', () => {
        expect(findLargestEvenNum([10, 15, 20, 25, 30])).toBe(30);
    });

    test('handles negative even numbers correctly', () => {
        expect(findLargestEvenNum([-2, -4, -6, -1, -3])).toBe(-2);
    });

    test('returns null for an empty array', () => {
        expect(findLargestEvenNum([])).toBeNull();
    });
});


const removeDuplicates = require('./filterArray'); //ex 5

describe('removeDuplicates', () => {
    test('returns characters that appear only once', () => {
        expect(removeDuplicates('abcabc')).toBe(''); 
        expect(removeDuplicates('aabbcc')).toBe('');
        expect(removeDuplicates('abc')).toBe('abc'); 
        expect(removeDuplicates('aabbc')).toBe('c');
        expect(removeDuplicates('hello world')).toBe('he wrd'); 
        expect(removeDuplicates('swiss')).toBe('wi'); 
    });

    test('handles special cases like empty strings and single characters', () => {
        expect(removeDuplicates('')).toBe(''); 
        expect(removeDuplicates('a')).toBe('a');
    });

    test('handles special characters and numbers', () => {
        expect(removeDuplicates('123321')).toBe(''); 
        expect(removeDuplicates('abc!@#abc')).toBe('!@#'); 
        expect(removeDuplicates('!@#$%^&()')).toBe('!@#$%^&()'); 
    });

    test('handles mixed characters', () => {
        expect(removeDuplicates('abc123abc')).toBe('123'); 
        expect(removeDuplicates('a1b2c3')).toBe('a1b2c3'); 
    });
});


/*
const cubeSum = require('./filterArray'); //ex 6

describe('cubeSum', () => {
    test('calculates the sum of cubes for n = 1', () => {
        expect(cubeSum(1)).toBe(1); 
    });

    test('calculates the sum of cubes for n = 2', () => {
        expect(cubeSum(2)).toBe(9); 
    });

    test('calculates the sum of cubes for n = 3', () => {
        expect(cubeSum(3)).toBe(36); 
    });

    test('calculates the sum of cubes for n = 4', () => {
        expect(cubeSum(4)).toBe(100); 
    });

    test('returns 0 for n = 0', () => {
        expect(cubeSum(0)).toBe(0); 
    });

    test('handles larger numbers correctly', () => {
        expect(cubeSum(5)).toBe(225);
    });
});

const objectsEquivalent = require('./filterArray'); // ex 7

describe('objectsEquivalent', () => {
    test('returns true for equivalent objects', () => {
        const obj1 = { a: 1, b: 2, c: 3 };
        const obj2 = { a: 1, b: 2, c: 3 };
        expect(objectsEquivalent(obj1, obj2)).toBe(true);
    });

    test('returns false for objects with different keys', () => {
        const obj1 = { a: 1, b: 2, c: 3 };
        const obj2 = { a: 1, b: 2, d: 4 };
        expect(objectsEquivalent(obj1, obj2)).toBe(false);
    });

    test('returns false for objects with same keys but different values', () => {
        const obj1 = { a: 1, b: 2, c: 3 };
        const obj2 = { a: 1, b: 2, c: 4 };
        expect(objectsEquivalent(obj1, obj2)).toBe(false);
    });

    test('returns true for empty objects', () => {
        const obj1 = {};
        const obj2 = {};
        expect(objectsEquivalent(obj1, obj2)).toBe(true);
    });

    test('returns false when one object is a subset of another', () => {
        const obj1 = { a: 1, b: 2 };
        const obj2 = { a: 1, b: 2, c: 3 };
        expect(objectsEquivalent(obj1, obj2)).toBe(false);
    });
});
const filterArray = require('./filterArray'); // ex 8

describe('filterArray', () => {
    
    test('removes specified values from the array', () => {
        expect(filterArray([1, 2, 3, 4], [2, 4])).toEqual([1, 3]);
        expect(filterArray(['apple', 'banana', 'cherry'], ['banana'])).toEqual(['apple', 'cherry']);
        expect(filterArray(['a', 'b', 'c'], ['d', 'e'])).toEqual(['a', 'b', 'c']); 
    });

    test('returns the original array if all elements are filtered out', () => {
        expect(filterArray([1, 2, 3], [1, 2, 3])).toEqual([]); 
    });

    test('works with empty arrays', () => {
        expect(filterArray([], [1, 2, 3])).toEqual([]); 
        expect(filterArray([1, 2, 3], [])).toEqual([1, 2, 3]);
    });

    test('handles mixed data types', () => {
        expect(filterArray([1, '2', '3', 4], ['2', 4])).toEqual([1, '3']); 
        expect(filterArray([true, false, 1, 0], [false, 1])).toEqual([true, 0]);
        expect(filterArray(['text', 0, 1, null], [0, null])).toEqual(['text', 1]);
    });
});

const extractValuesAtIndexes=require('./filterArray') //ex 9
describe('extractValuesAtIndexes', () => {

    test('returns correct values for valid indexes', () => {
        expect(extractValuesAtIndexes(['a', 'b', 'c', 'd'], [0, 2])).toEqual(['a', 'c']); 
        expect(extractValuesAtIndexes([10, 20, 30, 40], [1, 3])).toEqual([20, 40]); 
        expect(extractValuesAtIndexes([true, false, true], [0, 1])).toEqual([true, false]); 
    });

    test('ignores out of range indexes', () => {
        expect(extractValuesAtIndexes(['a', 'b', 'c'], [3, 5])).toEqual([]); 
        expect(extractValuesAtIndexes(['x', 'y', 'z'], [1, 2, 4])).toEqual(['y', 'z']);
    });

    test('handles empty arrays', () => {
        expect(extractValuesAtIndexes([], [0, 1])).toEqual([]); 
        expect(extractValuesAtIndexes([1, 2, 3], [])).toEqual([]); 
    });

    test('handles mixed data types and undefined values', () => {
        expect(extractValuesAtIndexes([1, null, 3, undefined], [0, 1, 3, 4])).toEqual([1, null]);
        expect(extractValuesAtIndexes([100, 200, 'three', true], [2, 3])).toEqual(['three', true]); 
    });
});

const DeleteObj=require('./filterArray'); //ex 10
describe('DeleteObj', () => {
    test('removes the rollno property from the student object', () => {
        const student = {
            name: 'John Doe',
            rollno: '12345',
            age: 21
        };
        
        DeleteObj(student);
        
        expect(student.rollno).toBeUndefined(); // Check if rollno is undefined
    });

    test('does not affect other properties of the student object', () => {
        const student = {
            name: 'Jane Smith',
            rollno: '54321',
            age: 22
        };
        
        DeleteObj(student);
        
        expect(student.name).toBe('Jane Smith'); 
        expect(student.age).toBe(22); 
    });

    test('handles student object without rollno property', () => {
        const student = {
            name: 'Alex Johnson',
            age: 20
        };
        
        DeleteObj(student);
        
        expect(student.rollno).toBeUndefined();
    });
});

const daysLeftUntilNextChristmas=require('./filterArray') // ex 11
describe('daysLeftUntilNextChristmas', () => {
    beforeAll(() => {
        jest.useFakeTimers();
    });

    afterAll(() => {
        jest.useRealTimers();
    });

    test('should return the correct number of days when today is before Christmas', () => {
        const exampleDate = new Date(2023, 11, 1); 
        jest.setSystemTime(exampleDate);
        expect(daysLeftUntilNextChristmas()).toBe(24); 
    });
})

const Cylinder=require('./filterArray'); // ex 12
describe('Cylinder', () => {

    test('calculates volume correctly for given height and radius', () => {
        const cylinder1 = new Cylinder(10, 5);
        expect(cylinder1.CalculateVolume()).toBe('785.3982'); 
        

        const cylinder2 = new Cylinder(1, 1);
        expect(cylinder2.CalculateVolume()).toBe('3.1416'); 

        const cylinder3 = new Cylinder(0, 1);
        expect(cylinder3.CalculateVolume()).toBe('0.0000');

        const cylinder4 = new Cylinder(5, 0);
        expect(cylinder4.CalculateVolume()).toBe('0.0000'); 
    });

    test('handles large values gracefully', () => {
        const largeCylinder = new Cylinder(1e6, 1e6);
        const expectedVolume = Math.PI * Math.pow(1e6, 2) * 1e6;
        expect(largeCylinder.CalculateVolume()).toBe(expectedVolume.toFixed(4));
    });

});

const fetchData=require('./filterArray');// ttest failed ex 13
describe('fetchData', () => {
    it('should resolve with "Data fetched successfully!" after a random delay', async () => {
     const data = await fetchData();
     expect(data).toBe("Data fetched successfully!");
    });
   
    it('should take between 2 and 8 seconds to resolve', async () => {
     const startTime = Date.now();
     await fetchData();
     const endTime = Date.now();
     const elapsedTime = endTime - startTime;
     expect(elapsedTime).toBeGreaterThanOrEqual(2000);
     expect(elapsedTime).toBeLessThanOrEqual(8000);
    });
   }); 


   const Clock=require('./filterArray')// ex 14 faile
describe('Clock function', () => {
    let clockElement;

    beforeEach(() => {
        clockElement = document.createElement('div');
        clockElement.id = 'clock';
        document.body.appendChild(clockElement);
    });

    afterEach(() => {
        document.body.innerHTML = '';
    });

    test('Clock updates the time in the DOM', () => {
        const mockDate = new Date(2024, 10, 12, 10, 5, 30); // 10:05:30
        jest.spyOn(global, 'Date').mockImplementation(() => mockDate);

        Clock();

        expect(clockElement.textContent).toBe('10:05:30');

        jest.restoreAllMocks();
    });

    test('Clock updates every second using setInterval', () => {
        jest.useFakeTimers();

        let mockDate = new Date(2024, 10, 12, 10, 5, 30);
        jest.spyOn(global, 'Date').mockImplementation(() => mockDate);

        clockUpdate(); // Mise à jour initiale

        expect(clockElement.textContent).toBe('10:05:30');

        mockDate = new Date(2024, 10, 12, 10, 5, 31); // 10:05:31
        jest.advanceTimersByTime(1000);

        clockUpdate();
        expect(clockElement.textContent).toBe('10:05:31');

        jest.restoreAllMocks();
        jest.useRealTimers();
    });
});


const bookFilter = require('./filterArray'); // ex 15

   describe('bookFilter', () => {
    it('should return an empty array if no books have more than 300 pages', () => {
     const books = [
      { title: 'Book 1', pages: 200 },
      { title: 'Book 2', pages: 250 },
     ];
     expect(bookFilter(books)).toEqual([]);
    });
   
    it('should return only books with more than 300 pages', () => {
     const books = [
      { title: 'Book 1', pages: 200 },
      { title: 'Book 2', pages: 400 },
      { title: 'Book 3', pages: 350 },
      { title: 'Book 4', pages: 280 },
     ];
     const expected = [
      { title: 'Book 2', pages: 400 },
      { title: 'Book 3', pages: 350 },
     ];
     expect(bookFilter(books)).toEqual(expected);
    });
   
    it('should handle an empty array input', () => {
     expect(bookFilter([])).toEqual([]);
    });
   });
   
const wordReverse=require('./filterArray'); // 16

describe('wordReverse', () => {
  
  it('should reverse each word in the array', () => {
    const words = ['apple', 'banana', 'cherry'];
    const reversedWords = wordReverse(words);
    
    expect(reversedWords).toEqual(['elppa', 'ananab', 'yrrehc']);
  });

  it('should return an empty array when an empty array is passed', () => {
    const words = [];
    const reversedWords = wordReverse(words);
    
    expect(reversedWords).toEqual([]);
  });

  it('should handle a single word in the array', () => {
    const words = ['hello'];
    const reversedWords = wordReverse(words);
    
    expect(reversedWords).toEqual(['olleh']);
  });
  

  it('should handle words with special characters', () => {
    const words = ['!apple$', '@banana#', '#cherry!'];
    const reversedWords = wordReverse(words);
    
    expect(reversedWords).toEqual(['$elppa!', '#ananab@', '!yrrehc#']);
  });

  it('should handle a word with a single character', () => {
    const words = ['a', 'B', 'c'];
    const reversedWords = wordReverse(words);
    
    expect(reversedWords).toEqual(['a', 'B', 'c']);
  });

});


const averageScore = require('./filterArray');// ex 17
describe('averageScore', () => {
  it('should return the average of a list of scores', () => {
    expect(averageScore(10, 20, 30)).toBe('20.00');  
    expect(averageScore(50, 60, 70, 80, 90)).toBe('70.00');  
  });

  it('should return NaN if no scores are provided', () => {
    expect(averageScore()).toBe('NaN');  
  });

  it('should return the average with two decimal points', () => {
    expect(averageScore(1, 2, 3, 4, 5)).toBe('3.00');  
    expect(averageScore(3, 8, 5, 9)).toBe('6.25'); 
  });
});

const Cycle = require('./filterArray'); // ex 18

describe('Cycle', () => {
  it('should return the area of a circle when a valid radius is provided', () => {
    
    expect(Cycle(5)).toBeCloseTo(78.5398, 4);  
  });

  it('should return "Radius is missing!" if no radius is provided', () => {
    
    expect(Cycle()).toBe("Radius is missing!");
  });

  it('should handle negative radius correctly (should still return positive area)', () => {
    expect(Cycle(-3)).toBeCloseTo(28.2743, 4); 
  });
});

  const myArray = require('./filterArray'); // ex 19
  
  describe('myArray function', () => {
    
    /*test('should return an empty array', () => {
        expect(myArray()).toEqual([]);
       });
  
    test('should return a sorted array when input arrays contain numbers', () => {
      const myArray = () => {
        const arr1 = [3, 1];
        const arr2 = [2, 1];
        const combinedArr = [...new Set([...arr1, ...arr2])].sort((a, b) => a - b);
        return combinedArr;
      };
      expect(myArray()).toEqual([1, 2, 3]);
    });
  
    test('should remove duplicates from combined arrays', () => {
      const myArray = () => {
        const arr1 = [1, 2, 2];
        const arr2 = [2, 3];
        const combinedArr = [...new Set([...arr1, ...arr2])].sort((a, b) => a - b);
        return combinedArr;
      };
      expect(myArray()).toEqual([1, 2, 3]);
    });
  });

  const Car =require('./filterArray') // ex 20
describe('Car object', () => {
  test('should have correct make', () => {
    expect(make).toBe("toyota");
  });

  test('should have correct model', () => {
    expect(model).toBe("hummer");
  });

  test('should have correct year', () => {
    expect(year).toBe("2013");
  });

  test('should default year to unknown if not provided', () => {
    const { year = "unknown" } = {}; 
    expect(year).toBe("unknown");
  });
});  

const CalculatePrice = require('./filterArray'); 

   describe('CalculatePrice', () => {
    it('should calculate the total price correctly', () => {
     const product = { price: 10, qty: 2 };
     expect(CalculatePrice(product)).toBe(20);
    });
   
    it('should handle a quantity of 0', () => {
     const product = { price: 10, qty: 0 };
     expect(CalculatePrice(product)).toBe(0);
    });
   
    it('should handle a price of 0', () => {
     const product = { price: 0, qty: 5 };
     expect(CalculatePrice(product)).toBe(0);
    });
   
   
    it('should handle decimal prices and quantities', () => {
     const product = { price: 12.50, qty: 2.5 };
     expect(CalculatePrice(product)).toBe(31.25);
    });
   
    it('should return an empty object', () => {
     expect(() => CalculatePrice({})).toEqual({});
     
    });
   
   });
   
 
/*
const findMax = require('./filterArray');// 22

test('trouve le maximum dans un tableau de nombres', () => {
    expect(findMax([1, 2, 3, 4, 5])).toBe(5);
    expect(findMax([-1, -2, -3, -4, -5])).toBe(-1);
    expect(findMax([0, 0, 0])).toBe(0);
    expect(findMax([100, 200, 300])).toBe(300);
}); */