const median = array => {
    const middleOfArray = Math.floor(array.length / 2);
    const sortedArray = array.sort((a, b) => a - b);

    if (sortedArray.length % 2 === 0) {
        return (sortedArray[middleOfArray - 1] + sortedArray[middleOfArray]) / 2;
    }

    return sortedArray[middleOfArray];
};
