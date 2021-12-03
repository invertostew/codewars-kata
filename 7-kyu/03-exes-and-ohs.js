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
