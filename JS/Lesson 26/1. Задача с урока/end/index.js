const daysOfWeek = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'St'];

export const dayOfWeek = (date, days) => {
    const dateClone = new Date(date);
    dateClone.setDate(date.getDate() + days);

    return daysOfWeek[dateClone.getDay()];
};