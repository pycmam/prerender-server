## Prerender server

Сервис для пререндеринга фронтенда

Запилено на базе [prerender/prerender](https://github.com/prerender/prerender).

### Настройка

#### Параметры `.env`:

```
# Порт сервера
PORT=3001

# Максимальное количество страниц в кэше
CACHE_MAXSIZE=1000

# Время жизни кэша, в секундах
CACHE_TTL=86400

# Интервал проверки полной загрузки стрнаницы, в миллисекундах
PAGE_DONE_CHECK_INTERVAL=500

# Таймаут полной загрузки страницы, в миллисекундах
PAGE_LOAD_TIMEOUT=20000

# Ожидание после выполения последнего запроса на странице
WAIT_AFTER_LAST_REQUEST=500

# Следовать редиректам
FOLLOW_REDIRECTS=true
```


### Установка и запуск

#### Установка Google Chrome на Ubuntu 18.04

```
sudo apt-get update
sudo apt-get install -y libappindicator1 fonts-liberation
wget https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb
sudo dpkg -i google-chrome*.deb
sudo apt-get install -f
```

```
npm install && npm start&
```
