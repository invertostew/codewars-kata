/* 
    Given an input of an array of digits, return the array with
    each digit incremented by its position in the array:
    the first digit will be incremented by 1,
    the second digit by 2, etc.
    Make sure to start counting your positions from 1 (and not 0).

    Your result can only contain single digit numbers, so if adding a digit
    with it's position gives you a multiple-digit number, only the last
    digit of the number should be returned.
*/

const incrementer = nums => {
    const numbers = nums.map((num, index) => {
        return (num + (index + 1)) % 10;
    });

    return numbers;
};
