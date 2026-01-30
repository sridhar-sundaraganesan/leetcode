// /1- Palindrome

const { reject, uniq, reverse } = require("lodash");

function palindrome(num) {
  return num.toString().split('').join('') === num.toString().split('').reverse().join('')
}

console.log(palindrome(121));
console.log(palindrome(221));


///2- Sqrt

function sqrt(x) {
  return Math.floor(Math.sqrt(x))
}

console.log(sqrt(4));
console.log(sqrt(8));

///3- Reversal of strings

function reverse(s) {
  return s.reverse()
}

console.log(reverse(['h', 'e', 'l', 'l', 'o']))


// /4- Reversal 2

function reversal(str, k) {
  re
}

console.log(reversal('abcd', 2));


function secondLargest(arr) {
  const unique = [...new Set(arr)]
  if (unique.length > 1) {
    return unique.sort((a, b) => b - a)[1]
  } else {
    return -1
  }

}

console.log(secondLargest([1, 3, 5, 8, 11, 4]));
console.log(secondLargest([5, 5, 10]));
console.log(secondLargest([10, 10, 10]));



function segregateOddEven(arr) {

  let grpEven = []
  let grpOdd = []
  for (let a of arr) {
    if (a % 2 == 0) {
      grpEven.push(a)
    } else {
      grpOdd.push(a)
    }
  }
  const orderEven = grpEven.sort((a, b) => a - b)
  const orderOdd = grpOdd.sort((a, b) => a - b)

  let i = 0;
  for (let num of grpEven) {
    arr[i++] = num;
  } for (let num of grpOdd) {
    arr[i++] = num;
  }
}

console.log(segregateOddEven([8, 35, 20, 12, 55, 71, 51]));

console.log(segregateOddEven([12, 34, 45, 9, 8, 90, 3]));

function eliminate(str) {
  const arr = str.split('').reverse()
  const unique = [...new Set(arr)]
  return unique.join('').replaceAll(' ', '')
}

console.log(eliminate('GEEKS FOR GEEKS'));


function palindromeChecker(s) {
  const valid = s.replace(/[^a-z0-9]/gi, '').toLowerCase()
  const reverse = valid.split('').reverse('').join('')
  return valid === reverse
}


console.log(palindromeChecker('A man, a plan, a canal: Panama'));
console.log(palindromeChecker('race a $car'));
console.log(palindromeChecker(''));
console.log(palindromeChecker('a.'));



function validAnagram(s, t) {

  return s.split('').reverse().sort().join('') === t.split('').reverse().sort().join('')

}

console.log(validAnagram('car', 'rat'));
console.log(validAnagram('listen', 'silent'));



function truncateSentence(s, k) {

  return s.split(' ').slice(0, k).join(' ')
}


console.log(truncateSentence('Hello How are you Contenstant', 4));




function words(str, x) {
  let res = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i].includes(x)) {
      res.push(i)
    }
  }
  return res;
}

console.log(words(['leet', 'code'], 'e'));

console.log(words(["abc", "bcd", "aaaa", "cbc"], 'a'));

["abc", "bcd", "aaaa", "cbc"]


// answer[i] == "FizzBuzz" if i is divisible by 3 and 5.
// answer[i] == "Fizz" if i is divisible by 3.
// answer[i] == "Buzz" if i is divisible by 5.
// answer[i] == i (as a string) if none of the above conditions are true.


// Code
// Testcase
// Test Result
// Test Result
// 412. Fizz Buzz
// Easy
// Topics
// premium lock icon
// Companies
// Given an integer n, return a string array answer(1 - indexed) where:

// answer[i] == "FizzBuzz" if i is divisible by 3 and 5.
// answer[i] == "Fizz" if i is divisible by 3.
// answer[i] == "Buzz" if i is divisible by 5.
// answer[i] == i(as a string) if none of the above conditions are true.


// Example 1:

// Input: n = 3
// Output: ["1", "2", "Fizz"]
// Example 2:

// Input: n = 5
// Output: ["1", "2", "Fizz", "4", "Buzz"]
// Example 3:

// Input: n = 15
// Output: ["1", "2", "Fizz", "4", "Buzz", "Fizz", "7", "8", "Fizz", "Buzz", "11", "Fizz", "13", "14", "FizzBuzz"]

function fizzBuzz(num) {

  let res = [];
  for (let i = 1; i <= num; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      res.push('FizzBuzz')
    } else if (i % 5 == 0) {
      res.push('Buzz')
    } else if (i % 3 == 0) {
      res.push('Fizz')
    }
    else {
      res.push(i)
    }
  }
  return res
}


console.log(fizzBuzz(15));
console.log(fizzBuzz(3));

function countingPrefix(words, pref) {
  let sum = 0;
  for (let i = 0; i < words.length; i++) {
    if (words[i].startsWith(pref)) {
      sum++;
    }
  }
  return sum
}

console.log(countingPrefix(["pay", "attention", "practice", "attend"], 'at'));
console.log(countingPrefix(["leetcode", "win", "loops", "success"], 'code'));


function length(s) {
  return s.trim().replace(/\s+/g, ' ').split(' ').reverse()[0].length
}

console.log(length("Hello World"));
console.log(length("   fly me   to   the moon  "));
console.log(length("luffy is still joyboy"));



const str = '    Hello World    Hi   india'


let Result = str.trim().replace(/\s+/g, ' ')

console.log(Result);



// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000

function reverseWords(s) {
  const arr = s.split('').reverse().join('').split(' ')
  let result = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    result.push(arr[i])
  }
  return result.join(' ')
}

console.log(reverseWords('leetcode is fun'));
console.log(reverseWords('Let"s take LeetCode contest'));



const string = 'leetcode is fun'

console.log(string.split('').reverse().join(''));



function uncommonSentence(s1, s2) {
  const str1 = s1.split(' ')
  const str2 = s2.split(' ')

  let result = [];


  for (let k = 0; k < str2.length; k++) {
    if (str1[k] !== str2[k]) {
      result.push(str1[k], str2[k])
    }
  }
  return result

}

console.log(uncommonSentence('this apple is sweet', 'this apple is sour'));
console.log(uncommonSentence('this is the plot', 'this is the building'));
console.log(uncommonSentence('this is villa in the g sqare', 'I am talented'));

console.log(uncommonSentence('apple apple', 'banana'));


function plusOne(digits) {
  const res = BigInt(digits.join('')) + 1n
  const result = res.toString()

  let finalResult = [];
  for (let i = 0; i < result.length; i++) {
    finalResult.push(Number(result[i]))
  }

  return finalResult;
}

console.log(plusOne([4, 3, 2, 1]));
console.log(plusOne([1, 2, 3]));
console.log(plusOne([6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3]));


function append(word1, word2) {
  if (word1.length === word2.length) {
    const s1 = word1.split('')
    const s2 = word2.split('')

    const res = [];
    for (let i = 0; i < s1.length; i++) {
      res.push(s1[i])
      res.push(s2[i])
    }
    return res.join('')
  } else if (word1.length < word2.length) {
    const s1 = word1.split('')
    const s2 = word2.split('')

    const res = [];
    for (let i = 0; i < s2.length; i++) {
      res.push(s1[i])
      res.push(s2[i])
    }
    return res.join('')
  } else if (word1.length > word2.length) {
    const s1 = word1.split('')
    const s2 = word2.split('')

    const res = [];
    for (let i = 0; i < s1.length; i++) {
      res.push(s1[i])
      res.push(s2[i])
    }
    return res.join('')
  }
}

console.log(append('abc', 'pqr'));
console.log(append('ab', 'pqrs'));
console.log(append('abcd', 'pq'));





function thirdMax(num) {
  const result = [...new Set(num)].sort((a, b) => b - a)
  return result.length <= 2 ? result[0] : result[2]
}

console.log(thirdMax([1, 2, 2, 3]));
console.log(thirdMax([1, 3, 2, 3]));



function wordsEx(str, x) {
  let res = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i].includes(x)) {
      res.push(i)
    }
  }
  return res;
}

console.log(wordsEx(['leet', 'code'], 'e'));

console.log(wordsEx(["abc", "bcd", "aaaa", "cbc"], 'a'));

["abc", "bcd", "aaaa", "cbc"]