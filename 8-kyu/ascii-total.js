/* 
    You'll be given a string, and have to return the sum of
    all characters as an int. The function should be able
    to handle all ASCII characters.
*/

const uniTotal = (string) => {
    const arrayOfCharacters = string.split('');
    const total = arrayOfCharacters.reduce((total, character) => {
        return total + character.charCodeAt();
    }, 0);

    return total;
};
