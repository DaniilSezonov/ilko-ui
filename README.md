
# CLIENT

Проект состоит:
1. Клиентского приложения (NextJS)
И библиотек:
2. Библиотека компонентов lib/ui-kit
3. SCSS темы lib/scss-theme (для возможности быстрого конфигурирования темы через переменные)
4. Глобального story-book lib/storybook-host - для демонстрации отдельных компонентов. 

![nx-graph](https://i.ibb.co/JpHR3km/nx-graph.png)

# Порядок установки, пока такой.
1. Установить Bun
https://bun.sh/

2. Для установки зависимостей вызвать в корневой дирректории
```bash
bun i
```

3. Далее надо собрать основные библиотеки

### lib/ui-kit

```sh
bun nx run ui-kit:build
```

### lib/scss-theme
```sh
bun nx run scss-theme:build:
```
4. Теперь можно просмотреть, например storybook с отдельными компонентами

```sh
bun nx run bun nx run storybook-host:storybook
```

5. Или запустить само клиентское приложение (пока тестил только в dev режиме)
```sh
bun nx run client:dev
```

