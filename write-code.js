/*
1) Sum Zero
    Write a function that takes in an array of numbers. The function should return True if any two numberss in list sum to 0, and false otherwise.

    For example:

    addToZero([]);
    // -> False

    addToZero([1]);
    // -> False

    addToZero([1, 2, 3]);
    // -> False

    addToZero([1, 2, 3, -2]);
    // -> True
*/

const addToZero = (arr) => {
    if (arr.length > 1) {
        for(let i = 0; i < arr.length; i++) {
            for(let j = 1; j < arr.length; j++) {
                if (i !== j) {
                    if (arr[i] + arr[j] === 0) {
                        return true
                    }
                } 
            }
        } return false
    } else {
        return false
    }
}

// console.log(addToZero([1]));
// console.log(addToZero([1, 2, 3]));
// console.log(addToZero([1, 2, 3, -2]));
// console.log(addToZero([28, 43, -12, 30, 4, 0, 12]));
// console.log(addToZero([28, 43, -11, 30, 4, 0, 12]));

// Runtime: O(n^2)
// Q: What is the space complexity of this function?
// ANSWER: O(1)

/*
2) Unique Characters
    Write a function that takes in a single word, as a string. It should return True if that word contains only unique characters. Return False otherwise.

    For example:

    hasUniqueChars("Monday");
    // -> True

    hasUniqueChars("Moonday");
    // -> False
*/

const hasUniqueChars = (word) => {
    for (let i = 0; i < word.length; i++) {
        for (let j = 1; j < word.length; j++) {
            if (i !== j) {
                if (word[i] === word[j]) {
                    return false
                }
            }
        }
    }

    return true
}

console.log(hasUniqueChars("Monday"));
console.log(hasUniqueChars("Moonday"))

// Runtime: O(n^2)
// Q: What is the space complexity of this function?
// ANSWER: O(1)

/*
3) Pangram Sentence
    A pangram is a sentence that contains all the letters of the English alphabet at least once, like “The quick brown fox jumps over the lazy dog.”

    Write a function to check a sentence to see if it is a pangram or not.

    For example:

    isPangram("The quick brown fox jumps over the lazy dog!");
    // -> True

    isPangram("I like cats, but not mice");
    // -> False
*/

const isPangram = (sentence) => {
    let sentArr = sentence.toLowerCase();
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');

    for (let i = 0; i < alphabet.length; i++) {
        if(sentArr.indexOf(alphabet[i]) < 0) {
            return false;
        }
    }
    return true
}

console.log(isPangram("The quick brown fox jumps over the lazy dog!"));


// Runtime: O(n)
// Q: What is the space complexity of this function?
// ANSWER: O(1)

/*
4) Longest Word
    Write a function, find_longest_word, that takes a list of words and returns the length of the longest one.

    For example:

    findLongestWord(["hi", "hello"]);
    // -> 5
*/

const findLongestWord = (wordList) => {
    let longestWord = wordList[0];

    for (let i = 1; i < wordList.length; i++) {
        if (wordList[i].length > longestWord.length) {
            longestWord = wordList[i];
        }
    }
    return longestWord.length
}

console.log(findLongestWord(["hi", "hello"]))

// Runtime: O(n^2)
// Q: What is the space complexity of this function?
// ANSWER: O(n)