# Тестовое задание на Django Rest Framework


Запускаем проект на своей машине: 

1. Клонируем репозиторий `git clone https://github.com/Dmitriy-Rassol/movieApp_project.git`
2. Переходим в папку с проектом `cd movie_backend` (здесь и далее приводятся команды в bash-терминале на машине под win)
3. Устанавливаем виртуальное окружение `python -m venv venv`
4. Запускаем виртуальное окружение `source venv/Scripts/activate`
5. Обновляем pip `python -m pip install --upgrade pip`
6. Устанавливаем в виртуальном окружении зависимости для проекта `python -m pip install --no-cache-dir -r requirements.txt`
7. Делаем миграции для создания базы данных `python manage.py makemigrations && python manage.py migrate`
8. Запускаем локальный сервер `python manage.py runserver`
10. По адресу `http://localhost:8000/api/movies` будет доступен список записей о фильмах

11. Открываем новый терминал и переходим в папку `cd movie_frontend`

12. Устанавливаем зависимости командой `npm install`

13. 