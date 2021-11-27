const number = busStops => {
    let totalPeople = 0;
    for (let i = 0; i < busStops.length; i += 1) {
        totalPeople += busStops[i][0];
        totalPeople -= busStops[i][1];
    }
    return totalPeople;
};
