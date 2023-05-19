# Тестовое задание
React-приложение для отслеживания запросов

React · TypeScript

## Описание задания

Реализовать SPA приложение:

Меню (навигация по страницам приложения):
- get
- post
- delete

Пункт меню get = страница get:
Страница с кнопкой для отправки запроса, при нажатии на которую происходит вызов https://httpbin.org/#/HTTP_Methods/get_get

Пункты меню post, delete по аналогии с get.

Область для отображения ответа должна представлять из себя сворачиваемую панель, в которой должна отображаться информация о всех обращениях к апи в виде строчек:
- время обращения, урл запроса

Стили по своему усмотрению (не обязательно)

Использовать: React, TypeScript

Не использовать: Bootstrap, State Manager

## Запуск проекта

- Установить зависимости
  ```shell
  npm install
  ```
- Запустить dev-сервер
  ```shell
  npm start
  ```