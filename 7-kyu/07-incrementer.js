const incrementer = nums => {
    const numbers = nums.map((num, index) => {
        return (num + (index + 1)) % 10;
    });

    return numbers;
}
