/* 
    Check to see if a string has the same amount of 'x's and 'o's.
    The method must return a boolean and be case insensitive.
    The string can contain any char.
*/

const XO = str => {
    const xoArray = Array.from(str);
    const noOfX = xoArray.filter(character => {
        return character.toLowerCase() === 'x';
    });
    const noOfO = xoArray.filter(character => {
        return character.toLowerCase() === 'o';
    });
    return noOfX.length === noOfO.length ? true : false;
};
