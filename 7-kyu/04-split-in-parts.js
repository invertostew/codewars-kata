/* 
    The aim of this kata is to split a given string into
    different strings of equal size
    (note size of strings is passed to the method)
*/

const splitInParts = (s, partLength) => {
    const regex = new RegExp(`.{1,${partLength}}`, 'g');
    const subStringArray = s.match(regex);
    return subStringArray.join(' ');
};
