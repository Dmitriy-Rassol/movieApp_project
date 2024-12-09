# Тестовое задание на Django Rest Framework
1. реализовать бэкенд на технологии Python Django REST API
2. сделать версию фронта с каталогом фильмов, где данные будут браться с реализованного бэкенда 
3. бэкенд может хранить данные локально (например, в файлах или СУБД)
4. Задачи:
  - сделать отображение списка фильмов
  - сделать добавление нового фильма
  - сделать удаление фильмов
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
### Фронтенд (Vite ,Vue3 Composition, Ts)
1. Открываем новый терминал и переходим в папку `cd movie_frontend`
2. Устанавливаем зависимости командой `npm install`
3. Запускаем сервер: `npm run dev`
4. Фронтенд будет доступен по адресу `http://localhost:5174/`
