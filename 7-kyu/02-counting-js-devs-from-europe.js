/* 
    You will be given an array of objects (hashes in ruby)
    representing data about developers who have signed up to
    attend the coding meetup that you are organising for the first time.

    Your task is to return the number of JavaScript developers coming from Europe.
*/

const countDevelopers = list => {
    let europeanJSDevCount = 0;

    list.forEach(developer => {
        if (developer.continent === 'Europe' && developer.language === 'JavaScript') europeanJSDevCount += 1;
    });

    return europeanJSDevCount;
};
