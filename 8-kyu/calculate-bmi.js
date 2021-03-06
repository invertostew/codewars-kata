/* 
    Write function bmi that calculates body mass index (bmi = weight / height2).

    if bmi <= 18.5 return "Underweight"

    if bmi <= 25.0 return "Normal"

    if bmi <= 30.0 return "Overweight"

    if bmi > 30 return "Obese"
*/

const bmi = (weight, height) => {
    const result = weight / Math.pow(height, 2);

    return (result <= 18.5) ? 'Underweight' :
           (result <= 25.0) ? 'Normal' :
           (result <= 30.0) ? 'Overweight' :
                              'Obese';
};
