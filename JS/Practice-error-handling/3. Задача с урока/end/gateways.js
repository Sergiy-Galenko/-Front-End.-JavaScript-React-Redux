export const fetchRepositories = url => fetch(url)
    .then(response => {
        if (response.ok) {
            return response.json()
        }
        throw new Error('Failed to load data');
    });

export const fetchUserData = userId => {
    return fetch(`https://api.github.com/users/${userId}`)
        .then(response => {
            if (response.ok) {
                return response.json()
            }
            throw new Error('Failed to load data');
        });
};