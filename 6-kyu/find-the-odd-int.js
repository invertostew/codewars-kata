/* 
    Given an array of integers, find the one that appears an odd number of times.

    There will always be only one integer that appears an odd number of times.
*/

const findOdd = (A) => {
    const counter = {};

    for (const num of A) {
        counter[num] = counter[num] ? counter[num] + 1 : 1
    }

    for (const [key, value] of Object.entries(counter)) {
        if (value % 2 !== 0) return Number(key);
    }
};