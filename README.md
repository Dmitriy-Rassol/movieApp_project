# Тестовое задание на Django Rest Framework

## Установка и запуск

### Бэкенд (Django REST API)

1. Клонируем репозиторий `git clone https://github.com/Dmitriy-Rassol/movieApp_project.git`
2. Переходим в папку с проектом `cd movie_backend/backend` 
3. Устанавливаем виртуальное окружение `python -m venv venv`
4. Запускаем виртуальное окружение `
source venv/bin/activate  # Для Linux/Mac
./venv/Scripts/activate  # Для Windows`
5. Обновляем pip `python -m pip install --upgrade pip`
6. Устанавливаем в виртуальном окружении зависимости для проекта `pip install -r requirements.txt`
7. Делаем миграции для создания базы данных `python manage.py makemigrations 
python manage.py migrate`
8. Запускаем локальный сервер `python manage.py runserver`
10. По адресу `http://localhost:8000/api/movies` будет доступен список записей о фильмах
### Фронтенд (Vue3 Composition, Ts)
1. Открываем новый терминал и переходим в папку `cd movie_frontend`
2. Устанавливаем зависимости командой `npm install`
3. Запускаем сервер: `npm run dev`
4. Фронтенд будет доступен по адресу `http://localhost:5173/`
