/*
 * Build a function that returns an array of integers from n to 1 where n > 0
 */

const reverseSeq = n => {
  const arr = [];

  for (let i = n; i >= 1; i -= 1) {
    arr.push(i);
  }

  return arr;
};

