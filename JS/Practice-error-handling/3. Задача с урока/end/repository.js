const reposList = document.querySelector('.repo-list');

export const clearList = () => {
    reposList.innerHTML = '';
};

export const renderRepositories = repositoriesList => {
    const listElems = repositoriesList
        .map(({ name }) => {
            const listItem = document.createElement('li');
            listItem.classList.add('repo-list__item');
            listItem.textContent = name;
            return listItem;
        });
    clearList();
    reposList.append(...listElems);
};
