Promise handlers (подписчики на результат выполнения промиса)

**Условие**

Напишите функцию, которая принимает id пользователя и устанавливает проимс в определенное состояние

**Задание:**

    - Файл должен экспортировать функцию под именем `requestUserData`
    - Сигнатура: `requestUserData(userId)`, где единственный аргумент - строка - идентификатор пользователя
    - `requestUserData` должна вернуть Promise
    - `requestUserData` должна перевести промис в состояние **"rulfilled"** через 1000ms c данными в виде объекта `{ name: 'John', age: 17, userId: 'userid777', email:  'userid777@example.com' }`, где **'userid777'** был передан ф-ции в аргументе
    - Ф-ция `requestUserData` должна перевести промис в состояние **"rejected"** c ошибкой `new Error('User not found')` через 500ms, если переданный userId равен **'broken'**

Полезные статьи:

    - http://latentflip.com/loupe/?code=Y29uc29sZS5sb2coJ0NvZGUgYmVmb3JlIHByb21pc2UnKTsKCmNvbnN0IG15UHJvbWlzZSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkgewogICAgcmVzb2x2ZSgnUHJvbWlzZSByZXN1bHQnKTsKfSk7Cgpjb25zb2xlLmxvZygnU29tZSB0ZXh0Jyk7CgpteVByb21pc2UudGhlbihmdW5jdGlvbiBvblN1Y2Nlc3MocmVzdWx0KSB7CiAgICBjb25zb2xlLmxvZyhyZXN1bHQpOyAKfSk7Cgpjb25zb2xlLmxvZygnQWZ0ZXIgcHJvbWlzZSBjYWxsYmFjaycpOw%3D%3D!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D" (Последовательность выполнения промиса)
    - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise" (Promise)
    - https://learn.javascript.ru/promise-basics (Promise)
