import { showSpinner, hideSpinner } from './spinner.js';
import { renderUser } from './user.js';
import { renderRepositories, clearList } from './repository.js';
import { fetchRepositories, fetchUserData } from './gateways.js';

const showUserBtnElem = document.querySelector('.name-form__btn');
const userNameInputElem = document.querySelector('.name-form__input');

const userPlaceholder = {
    avatar_url: 'https://avatars3.githubusercontent.com/u10001',
    name: '',
    location: ''
};

const onSearchUser = async () => {
    clearList();
    renderUser(userPlaceholder);
    showSpinner();
    const userId = userNameInputElem.value;
    try {
        const userData = await fetchUserData(userId);
        renderUser(userData);
        const repositoriesData = await fetchRepositories(userData.repos_url);
        renderRepositories(repositoriesData);
    } catch (error) {
        alert(error.message)
    } finally {
        hideSpinner();
    }
    
    
    // fetchUserData(userId)
    //     .then(userData => {
    //         renderUser(userData);
    //         return userData.repos_url;
    //     })
    //     .then(fetchRepositories)
    //     .then(repositoriesData => renderRepositories(repositoriesData))
    //     .catch(() => alert('Failed to load data'))
    //     .finally(() => {
    //         hideSpinner();
    //     });
};

renderUser(userPlaceholder);
showUserBtnElem.addEventListener('click', onSearchUser);