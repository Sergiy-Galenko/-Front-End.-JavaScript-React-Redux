export const getLocalStorageData = () =>
    Object.entries(localStorage)
        .reduce((acc, [key, value]) => {
            let resultValue;
            try {
                resultValue = JSON.parse(value);
            } catch (e) {
                resultValue = value;
            }
            return {
                ...acc,
                [key]: resultValue,
            };
        }, {});