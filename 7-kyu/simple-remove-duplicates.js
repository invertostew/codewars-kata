/* 
    Remove the duplicates from a list of integers, keeping
    the last ( rightmost ) occurrence of each element.
*/

const solve = (arr) => {
    const lastOccurances = arr.filter((num, index) => {
        return arr.lastIndexOf(num) === index;
    });

    return lastOccurances;
};
