/* 
    Your non-profit company has assigned you the task of calculating
    some simple statistics on donations. You have an array of integers,
    representing various amounts of donations your company has been given.
    In particular, you're interested in the median value for donations.

    The median is the middle number of a sorted list of numbers.
    If the list is of even length, the 2 middle values are averaged.

    Write a function that takes an array of integers as an argument
    and returns the median of those integers.
*/

const median = array => {
    const middleOfArray = Math.floor(array.length / 2);
    const sortedArray = array.sort((a, b) => a - b);

    if (sortedArray.length % 2 === 0) {
        return (sortedArray[middleOfArray - 1] + sortedArray[middleOfArray]) / 2;
    }

    return sortedArray[middleOfArray];
};
