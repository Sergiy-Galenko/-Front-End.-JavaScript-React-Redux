export const fetchRepositories = async url => {
    const response = await fetch(url);
    if (response.ok) {
        return await response.json();
    }
    throw new Error('Failed to load data');
};

export const fetchUserData = async userId => {
    const response = await fetch(`https://api.github.com/users/${userId}`);
    if (response.ok) {
        return await response.json();
    }
    throw new Error('Failed to load data');
};