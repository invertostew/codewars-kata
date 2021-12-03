const ballCollector = detritus => {
    const sack = { weight: 0 };

    detritus.filter(el => {
        if (el === 58) sack.weight += 58;
    });
    
    return sack;
};
