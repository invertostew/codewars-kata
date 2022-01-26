/*
 * Given a random non-negative number, you have to return the digits of this number within an array in reverse order.
 */

const digitize = n => {
    // note could also pass Number to Array.from as a mapping fn
    return Array.from(String(n)).map(Number).reverse();
};

