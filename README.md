# React TypeScript Tailwind Starter

Стартовый проект для React с TypeScript, TailwindCSS, Jest и Vite.

## Технологии

- **React 18** - JavaScript библиотека для создания пользовательских интерфейсов
- **TypeScript** - типизированный JavaScript
- **TailwindCSS** - utility-first CSS фреймворк
- **Vite** - быстрый инструмент сборки
- **Jest** - фреймворк для тестирования
- **ESLint** - линтер для JavaScript/TypeScript
- **Prettier** - форматтер кода

## Быстрый старт

### Установка зависимостей

```bash
npm install
# или
yarn install
```

### Запуск локального сервера разработки

```bash
npm run dev
# или
yarn dev
```

Приложение будет доступно по адресу [http://localhost:3000](http://localhost:3000).

### Сборка для продакшена

```bash
npm run build
# или
yarn build
```

### Предварительный просмотр продакшен сборки

```bash
npm run preview
# или
yarn preview
```

## Доступные скрипты

- `dev` - запуск сервера разработки
- `build` - сборка для продакшена
- `preview` - предварительный просмотр продакшен сборки
- `type-check` - проверка типов TypeScript
- `format` - форматирование кода с Prettier
- `lint` - проверка кода с ESLint
- `test` - запуск тестов
- `test-all` - запуск всех проверок (lint, type-check, test)

## Структура проекта

```
src/
├── assets/          # Статические ресурсы
│   ├── images/      # Изображения
│   └── styles/      # CSS файлы
├── components/      # React компоненты
│   └── app/         # Основной компонент приложения
├── index.tsx        # Точка входа
└── vite-env.d.ts    # Типы Vite
```

## Конфигурация

- `vite.config.ts` - конфигурация Vite
- `tailwind.config.js` - конфигурация TailwindCSS
- `postcss.config.js` - конфигурация PostCSS
- `tsconfig.json` - конфигурация TypeScript
- `tsconfig.node.json` - конфигурация TypeScript для Node.js

## Лицензия

MIT
