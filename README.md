# Playwright Tests for Demo Form

Этот проект содержит end-to-end тесты для формы на сайте [demoqa.com](https://demoqa.com/automation-practice-form) с использованием Playwright (TypeScript).

## Описание

Тесты проверяют обязательные поля (имя, email, пол, мобильный, дата рождения), отправку формы и модальное окно подтверждения. Также покрыты опциональные поля (предметы, хобби).

## Установка

1. Клонируйте репозиторий: `git clone https://github.com/yourusername/playwright-demo-form-tests.git`
2. Перейдите в папку: `cd playwright-demo-form-tests`
3. Установите зависимости: `npm install`

## Запуск тестов

- Все тесты: `npx playwright test`
- Конкретный файл: `npx playwright test tests/form.spec.ts`
- С UI: `npx playwright test --ui`
- Отчёт: `npx playwright show-report`

## Конфигурация

Файл `playwright.config.ts` настроен для Chromium, Firefox и WebKit.

## Требования

- Node.js
- Playwright browsers (устанавливаются автоматически)
