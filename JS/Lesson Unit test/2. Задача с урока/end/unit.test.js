it("17 and in Africa 17", () => {
    expect(17).toEqual(17);
});

const getOddNumbers = (numbers) => numbers.filter((num) => num % 2 === 1);

it("should get only odd numbers from array", () => {
    const result = getOddNumbers([1, 2, 3, 4]);
    expect(result).toEqual([1, 3]);
});

