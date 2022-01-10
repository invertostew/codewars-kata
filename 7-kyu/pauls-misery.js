/* 
    Paul is an excellent coder and sits high on the CW leaderboard.
    He solves kata like a banshee but would also like to lead
    a normal life, with other activities. But he just can't
    stop solving all the kata!!

    Given an array (x) you need to calculate the Paul Misery Score.
    The values are worth the following points:

    kata = 5
    Petes kata = 10
    life = 0
    eating = 1
*/

const paul = (x) => {
    let total = 0;
    
    x.forEach((activity) => {
        if (activity === 'kata') {
            total += 5;
        }

        if (activity === 'Petes kata') {
            total += 10;
        }

        if (activity === 'life') {
            total += 0;
        }

        if (activity === 'eating') {
            total += 1;
        }
    });

    if (total < 40) return 'Super happy!';
    else if (total < 70) return 'Happy!';
    else if (total < 100) return 'Sad!';
    else if (total >= 100) return 'Miserable!';
};
