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

const onSearchUser = () => {
    clearList();
    renderUser(userPlaceholder);
    showSpinner();
    const userId = userNameInputElem.value;
    fetchUserData(userId)
        .then(userData => {
            renderUser(userData);
            return userData.repos_url;
        })
        .then(fetchRepositories)
        .then(repositoriesData => renderRepositories(repositoriesData))
        .catch(error => alert(error.message))
        .finally(() => {
            hideSpinner();
        });
};

renderUser(userPlaceholder);
showUserBtnElem.addEventListener('click', onSearchUser);