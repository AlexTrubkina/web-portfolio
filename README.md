

## Лабортаорные работы по веб-проектированию.

1. Установка Node

![picture](node_installation.png)

![picture](node_installation1.png)

2. Задачи из учебника
   * Упражнение 1-1
   
  ![task1](hello_world.jpg)
  
### Домашняя работа
[https://kodaktor.ru/29102019_c8f2f](https://kodaktor.ru/29102019_c8f2f)
### Лабораторные работы
[https://kodaktor.ru/07112019_9da15](https://kodaktor.ru/07112019_9da15)

[https://kodaktor.ru/07112019_eafdc](https://kodaktor.ru/07112019_eafdc)

## Компьютерный практикум.

### Лабораторные работы.

#### Тема 1. Структура экосистемы веб-языков и технологий.

- Развёртывание проекта на JavaScript, включающего модули
   1. Создайте новый проект:
   
   ![](lab1nameproject.png)
   
   2. Добавьте зависимости babel-cli и babel-preset-env в раздел девелоперских зависимостей
   
   ![](lab1bable.png)
   
   3. Создайте простейшую настройку babel в файле .babelrc
   
   ![](lab1echo.png)
   
   4. Добавьте к проекту библиотеку moment для работы с датами/временем.
   
   ![](lab1moment.png)
   
   5. Разместите файлы, находящиеся в отношении нативной модульности, в папке./src
   
   ![](lab1mainsrc.png)
   
   6. Выполните команду транспиляции:
   
   ![](lab1build.png)
   
   7. Убедитесь, что получена папка lib с транспилированными файлами, в которых вместо  import и export будут require и module.exports и что вызов файла main.js с помощью node не вызывает ошибок:
   
   ![](lab1lib.png)
   
- Преобразование кода на JavaScript,  содержащего конструкции из следующих версий стандарта ECMAScript.

   1. Добавьте поддержку class properties.
   
   ![](lab2/lab2properties.png)
   
   2. Изменитефайл .babelrc
   
   ![](lab2/lab2babelrc.png)
   
   3. Создайте вариант экспортируемого класса без конструктора: namer2.js
   
   ![](lab2/lab2namer2.png)
   
   4. Осуществите его импорт в файле index.js
   
   
   
   5. Таблицы файлов package.json и .eslintrc
   
   ![](lab2/lab2package.png)
   
   6. Получение оттранспилированных файлов
   
   
   
   7. Убедитесь, что всё выполняется без ошибок:
   
   ![](lab2/lab2build.png)
 
