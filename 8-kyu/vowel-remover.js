/* 
    Create a function called shortcut to remove all the lowercase vowels in a given string.

    Don't worry about uppercase vowels.
*/

const shortcut = (string) => {
    return string.replace(/[aeiou]/g, ''); // /gi if uppercase needed to be taken into consideration
};
