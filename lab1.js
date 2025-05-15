// Praca domowa - Zadanie 9, 10, 11, 12
// 1, 2
let a = 10;
console.log(a == 10)
console.log(a == "10")
console.log(a != 20)
console.log(a != 10)
console.log(a != "10")
console.log(a === 10)
console.log(a === "10")
console.log(a !== 10)
console.log(a !== "10")

// 3
function printNumbers(nr) {
    let result = ``;
    for (let i = 0; i <= nr; i++) {
        result += i;
        if (i !== result) {
            result += ` `;
        }
    }
    return result;
}
console.log(printNumbers(10));

// 4
function generateRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const arr = [];
for (let i =0; i < 10; i++) {
    arr.push(generateRandom(1, 20));
}
console.log(arr);
const moreThan10 = arr.filter(num => num > 10).length;
if (moreThan10 >= 5) {
    console.log(`Udało się!`);
} else {
    console.log(`Niestety nie.`);
}

// 5
function checkPalindrom(txt) {
    const cleanedTxt = txt.toLowerCase();
    const reversedTxt = cleanedTxt.split("").reverse().join("");
    return cleanedTxt === reversedTxt;
}
console.log(checkPalindrom("Anna"));

// 6
function random(max) {
    return Math.floor(Math.random() * (max + 1));
}

const arr2 = new Array(20);
for (let i=0; i<20; i++) {
    arr2[i] = random(20);
}
console.log(arr2);
arr2.sort((a, b) => a - b);
console.log(arr2);
const sum = arr2.reduce((acc, val) => acc + val, 0);
console.log(`Suma: ${sum}`);
const avg = sum / arr2.length;
console.log(`Średnia: ${avg}`);

// 7
function removeDuplicates(nums) {
    let i = 0;
    for (let j = 1; j < nums.length; j++) {
        if (nums[j] !== nums[i]) {
            i++;
            nums[i] = nums[j];
        }
    }
    return i + 1;
}

const nums = [1, 1, 2, 2, 3, 4, 4]
console.log(nums);
console.log(removeDuplicates(nums));
console.log(nums);

// 8
function longestCommonPrefix(strs) {
    if (!strs.length) return "";          // pusta tablica → pusty prefiks

    let prefix = strs[0];
    for (let i = 1; i >= 0; i--) {
        while (strs[i].indexOf(prefix) !== 0) {
            prefix = prefix.slice(0, prefix.length - 1);
            if (prefix === "") return "";
        }
    }
    return prefix;
}

const strs = ["flower","flow","flight"];
const strs2 = ["dog","racecar","car"]
console.log(longestCommonPrefix(strs));
console.log(longestCommonPrefix(strs2));

// 9
function romanToInt(s) {
    function getIntValue(c) {
        switch (c) {
            case "I": return 1;
            case "V": return 5;
            case "X": return 10;
            case "L": return 50;
            case "C": return 100;
            case "D": return 500;
            case "M": return 1000;
            default: return 0;
        }
    }

    let result = 0;

    for (let i =0; i < s.length; i++) {
        const curr = getIntValue(s[i]);
        const next = getIntValue(s[i + 1]);

        if (curr !== undefined && curr < next) {
            result += next - curr;
            i++;
        } else {
            result += curr;
        }
    }
    return result;
}

const roman = "MCMXCIV";
console.log(romanToInt(roman));

// 10
function decode(arr, str) {
    let posX = 0;
    let posY = 0;
    let result = [arr[0][0]];

    for (let i = 0; i < str.length; i++) {
        if (str[i] === "r") {
            posY++;
        } else if (str[i] === "l") {
            posY--;
        } else if (str[i] === "d") {
            posX++;
        } else if (str[i] === "u") {
            posX--;
        }
        result.push(arr[posX][posY]);
    }
    for (let i = 0; i < result.length; i++) {
        result[i] = String.fromCharCode(result[i]);
    }
    return result.join("");
}

const secretArr = [
    [ 66,  97, 114, 100,   4,   2, 110,  11,   1,   6,  20, ],
    [ 99,   3,  10, 122,  76, 101, 111,   3,  32, 100,   0, ],
    [  6,  22,   1, 111,  32,  10, 110,   7,  97,  97,  67, ],
    [ 60,  97, 116,  32, 100,  23,  97, 114, 100,  32,  34, ],
    [  2, 106,  15,   6, 111,  56,  80,  20,  10,  86,  10, ],
    [ 20, 110,  121, 32, 107,  55,  50,  99, 110, 105,   8, ],
    [ 12,   9,  22, 102,  66, 100,  12, 105,  50,  76, 110, ],
    [ 42,  81, 123,  92,  26,  98,  20,   1,  20,  11,  10, ],
]
const str = "rrrdddllddrrruuuurrddrruurddddlld";
console.log(decode(secretArr, str));

// 11
function getLastWordLength(s) {
    let length = 0;
    let i = s.length - 1;
    while (i >= 0 && s[i] === ' ') {
        i--;
    }
    while (i >= 0 && s[i] !== ' ') {
        length++;
        i--;
    }
    return length;
}
const s = "   fly me   to   the moon  ";
console.log(`"` + getLastWordLength(s) + `"`);

// 12
function stairs(steps) {
    if (steps <= 2) return steps;

    let step1 = 1; // f(i-2)
    let step2 = 2; // f(i-1)
    let step3;

    for (let i = 3; i <= steps; i++) {
        // Ciąg Fibonacciego
        step3 = step1 + step2; // f(i) = f(i-1) + f(i-2)
        step1 = step2
        step2 = step3
    }
    return step3;
}
console.log(stairs(3));
console.log(stairs(5));
console.log(stairs(45));