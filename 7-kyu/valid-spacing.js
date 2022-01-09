/* 
    Your task is to write a function called valid_spacing() or validSpacing()
    which checks if a string has valid spacing. The function should return
    either True or False.

    For this kata, the definition of valid spacing is one space
    between words, and no leading or trailing spaces.
    Below are some examples of what the function should return.

    Note - there will be no punctuation or digits in the input string, only letters.
*/

const validSpacing = (s) => {
    const hasSpaceAtStartOrEnd = /(^\s+)|(\s+$)/;
    if (hasSpaceAtStartOrEnd.test(s)) {
        return false;
    } else {
        const hasMoreThanOneSpace = /[ ]{2,}/;
        if (hasMoreThanOneSpace.test(s)) {
            return false;
        } else {
            return true;
        }
    }
};
