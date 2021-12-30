/* 
    Write function alternateCase which switch every letter in
    string from upper to lower and from lower to upper.
    E.g: Hello World -> hELLO wORLD
*/

const alternateCase = s => {
    const arrayString = [...s];
    const newArrayString = arrayString.map(character => {
        return (character === character.toLowerCase()) ? character.toUpperCase() : character.toLowerCase();
    });
    return newArrayString.join('');
};
