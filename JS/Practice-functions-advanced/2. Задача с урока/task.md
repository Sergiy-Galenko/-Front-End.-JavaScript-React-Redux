Проход по дереву с помощью рекурсии

**Условие**

Напишите функцию, которая каждый узел дерева каталога помечает в зависимости от настройки

**Задание:**

    - Функция должна экспортироваться под именем `markFavorites`
    - Сигнатура `markFavorites(tree, favorites)`, где tree - древовидная структура каталога, favorites - массив идентификаторов любимых разделов каталога
    - Функция должна пометить свойством `isFavorite: true`, если раздел входит в список любимых и `isFavorite: false` в противном случае
    - Пример работы:
        ```
            const favorites = ['id-2'];
            const tree = {
                id: 'id-1',
                name: 'Products',
                nodes: [
                    {
                        id: 'id-2',
                        name: 'Food',
                        nodes: []
                    },
                ],
            };
            const result = markFavorites(tree, favorites);
            result; // {
                id: 'id-1',
                name: 'Products',
                isFavorite: false,
                nodes: [
                    {
                        id: 'id-2',
                        isFavorite: true,
                        name: 'Food',
                        nodes: []
                    },
                ],
            };
        ```
    
    - Функция должна поддерживать любой уровень вложенности узлов
