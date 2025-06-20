// 1
class NumbersAnalyzer {
    numbersCount(arr) {
        return arr.length;
    }
    numbersSum(arr) {
        let sum = 0;
        for (let i=0; i<arr.length; i++) {
            sum += arr[i];
        }
        return sum;
    }
    numbersAverage(arr) {
        if (this.numbersCount(arr)) {
            return this.numbersSum(arr) / this.numbersCount(arr);
        } else return 0;
    }
    numbersMax(arr) {
        return Math.max(...arr);
    }
    numbersMin(arr) {
        return Math.min(...arr);
    }
    numbersHarmonicMean(arr) {
        let sum = 0;
        for (let i = 0; i < arr.length; i++)
            sum = sum + (1 / arr[i]);

        return arr.length/sum;
    }
}

const numbersAnalyzer =  new NumbersAnalyzer();
const arr1 = [1,2,3,4,5,6,7,8,9,10]
console.log(numbersAnalyzer.numbersCount(arr1));
console.log(numbersAnalyzer.numbersSum(arr1));
console.log(numbersAnalyzer.numbersAverage(arr1));
console.log(numbersAnalyzer.numbersMax(arr1));
console.log(numbersAnalyzer.numbersMin(arr1));

// 2
function findMissingNumbers(arr, min, max) {
    let missingNums = [];
    for (let i=min; i<=max; i++) {
        if(arr.indexOf(i) === -1) {
            missingNums.push(i);
        }
    }
    return missingNums;
}
const map = [0, 2, 3, 6, 7, 9, 11, 15, 16, 20];
console.log(findMissingNumbers(map, 1, 5))

// 3
function wybierzZaklecia(arr) {
    let zaklecia = [];
    for (let i=0; i<arr.length; i++) {
        if (/\d/.test(arr[i])) {
            zaklecia.push(arr[i]);
        }
    }
    return zaklecia;
}
const staraKsiega = [
    "ognista kula 5",
    "asdfasdf",
    "tarcza ochronna 3",
    "xd",
    "zamrozenie 4",
    "uASJGDKAfJG)#W!;",
    "legendarna ochrona 30"
]
console.log(wybierzZaklecia(staraKsiega));

// 4
function sum(arr, target) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === target) {
                result.push([arr[i], arr[j]]);
            }
        }
    }
    return result;
}

nums2 = [1, 4, 3, 2, 5, 7]
target = 6
console.log(sum(nums2, target))
