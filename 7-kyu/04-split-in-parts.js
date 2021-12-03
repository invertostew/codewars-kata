const splitInParts = (s, partLength) => {
    const regex = new RegExp(`.{1,${partLength}}`, 'g');
    const subStringArray = s.match(regex);
    return subStringArray.join(' ');
};
