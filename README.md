# Лендинг-подарок для Лины

Одностраничный сайт-поздравление с 23-летием (4 июля 2026).

## Локальный запуск

```bash
npm install
npm run dev
```

Откройте адрес из терминала. Для корректных путей к картинкам в dev используется `base: /lina-birthday/`.

## Замена фотографий

Положите свои фото в папку `public/images/` с такими именами:

| Файл | Содержание |
|------|------------|
| `lesha.jpg` | Лёша |
| `mountain-group.jpg` | Группа на горе |
| `gown.jpg` | Платье на празднике |
| `beer-throne.jpg` | Трон из пива |
| `selfie.jpg` | Селфи |
| `couple.jpg` | Пара |
| `party-baby.jpg` | С праздника |
| `certificate-origin.jpg` | Оригинал SPA-сертификата |

После замены пересоберите: `npm run build`.

## Деплой на GitHub Pages

1. Создайте репозиторий на GitHub с именем **`lina-birthday`** (или измените `base` в `vite.config.js` под своё имя).

2. Запушьте код:

```bash
git add .
git commit -m "Birthday landing for Lina"
git branch -M main
git remote add origin https://github.com/<ваш-username>/lina-birthday.git
git push -u origin main
```

3. В репозитории: **Settings → Pages → Build and deployment → Source: GitHub Actions**.

4. После успешного workflow сайт будет доступен по адресу:

```
https://<ваш-username>.github.io/lina-birthday/
```

## Структура сайта

- Hero с анимацией счётчика до 23
- Интерактивное письмо в конверте
- Карусель фотографий с пожеланиями
- Подарочная коробка → SPA-сертификат Талисман
