const getSum = numbers =>
    numbers
        .filter(numbers => !isNaN(numbers))
        .reduce((acc, num) => acc + Number(num), 0)

export const asyncSum = (...asyncNumbers) =>
    Promise.all(asyncNumbers)
        .then(getSum)
        .catch(() => Promise.reject(new Error('Can\'t calculate')));