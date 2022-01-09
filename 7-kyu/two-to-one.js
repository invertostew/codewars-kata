/* 
    Take 2 strings s1 and s2 including only letters from ato z.
    Return a new sorted string, the longest possible, containing
    distinct letters - each taken only once - coming from s1 or s2.
*/

const longest = (s1, s2) => {
    const s1s2Array = [...s1, ...s2];
    const uniqueArray = [...new Set(s1s2Array)];
    return uniqueArray.sort().join('');
};
