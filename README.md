![workflow](https://github.com/VladimirSolo/Movie_App/actions/workflows/worksflows.yml/badge.svg)

# Movie App

**Использованное API**: в приложении используется [The Open Movie Database](https://www.omdbapi.com/).

 **Основной функционал**:

> - **Регистрация и авторизация:** пользователи могут создать учетную запись и авторизоваться в приложении.
> - **Поиск фильмов:** приложение предоставляет возможность быстрого поиска фильмов.
> - **Избранные фильмы:** пользователи могут добавлять фильмы в избранное, чтобы собирать свою коллекцию.
> - **История поиска:** приложение сохраняет историю поиска, чтобы иметь возможность быстро вспомнить что искали.
> - **Поделиться фильмом:** приложение может предоставлять кнопку "Share Telegram" в карточке с персонажем.

## Если необходимо использовать приложение локально, то нужно сделать следующее:

- Зарегистрироваться [Firebase](https://firebase.google.com).
- Зарегистрироваться [The Open Movie Database](https://www.omdbapi.com/).
- Получить необходимые ключи и записать их в файл .env
```javascript
FIREBASE_API_KEY=
FIREBASE_AUTH_DOMAIN=
FIREBASE_PROJECT_ID=
FIREBASE_STORAGE_BUCKET=
FIREBASE_MESSAGING_SENDER_ID=
FIREBASE_APP_ID=
API_KEY=
```
- Ввести необходимые комманды в консоль
```javascript
npm install
npm run start
```

## **1 уровень (необходимый минимум)**

- Реализованы все требования к функциональности, описанные в задании:

## React

1. [x] Пишем функциональные компоненты c хуками в приоритете над классовыми.
2. [x] Есть разделение на умные и глупые компоненты : [Smart](https://github.com/VladimirSolo/Movie_App/tree/main/src/widgets)
, [Stupid](https://github.com/VladimirSolo/Movie_App/blob/main/src/shared/ui/).
3. [x] Есть рендеринг списков: [Main](https://github.com/VladimirSolo/Movie_App/blob/main/src/widgets/Main/ui/Main.tsx),
  [Search](https://github.com/VladimirSolo/Movie_App/blob/main/src/features/Search/ui/Search/Search.tsx), [History](https://github.com/VladimirSolo/Movie_App/blob/main/src/features/Search/ui/History/History.tsx), [Favorites](https://github.com/VladimirSolo/Movie_App/blob/main/src/features/FirebaseDB/ui/Favorite/Favorites.tsx)
4. [x] Реализована хотя бы одна форма: [Form](https://github.com/VladimirSolo/Movie_App/blob/main/src/features/Auth/ui/Form/Form.tsx).
5. [x] Есть применение Контекст API: [Context](https://github.com/VladimirSolo/Movie_App/blob/main/src/app/providers/FeatureTelegramProvider/lib/FeatureTelegramContext.ts), [Provider](https://github.com/VladimirSolo/Movie_App/blob/main/src/app/providers/FeatureTelegramProvider/ui/FeatureTelegramProvider.tsx), обернут [App](https://github.com/VladimirSolo/Movie_App/blob/main/src/app/App.tsx)
6. [x] Есть применение предохранителя: [ErrorBoundary](https://github.com/VladimirSolo/Movie_App/blob/main/src/app/providers/ErrorBoundary/ui/ErrorBoundary.tsx) обернут [IndexTs](https://github.com/VladimirSolo/Movie_App/blob/main/src/index.tsx)
7. [x] Есть хотя бы один кастомный хук: [AuthCheck](https://github.com/VladimirSolo/Movie_App/blob/main/src/widgets/lib/useAuthCheck.ts), [Debounce](https://github.com/VladimirSolo/Movie_App/blob/main/src/widgets/lib/useDebounce.ts).
8. [x] Хотя бы несколько компонентов используют PropTypes: [ProtectRoute](https://github.com/VladimirSolo/Movie_App/blob/main/src/widgets/ProtectedRoute/ui/ProtectedRoute.tsx), [Suggest](https://github.com/VladimirSolo/Movie_App/blob/main/src/widgets/Suggest/ui/Suggest.tsx)
9. [x] Поиск не должен триггерить много запросов к серверу: хук [Debounce](https://github.com/VladimirSolo/Movie_App/blob/main/src/widgets/lib/useDebounce.ts). использован в компоненте [SearchBar](https://github.com/VladimirSolo/Movie_App/blob/main/src/features/Search/ui/SearchBar/SearchBar.tsx).
10. [x] Есть применение lazy + Suspense: [Suspense](https://github.com/VladimirSolo/Movie_App/blob/main/src/app/providers/router/ui/AppRouter.tsx), [Lazy](https://github.com/VladimirSolo/Movie_App/blob/main/src/pages/MainPage/ui/MainLazy.tsx)

## Redux

1. [x] Используем Modern Redux with Redux Toolkit: [Store](https://github.com/VladimirSolo/Movie_App/blob/main/src/app/providers/store/config/store.ts).
2. [x] Используем слайсы: [AuthSlice](https://github.com/VladimirSolo/Movie_App/blob/main/src/features/Auth/model/slice/authSlice.ts), [SearchSlice](https://github.com/VladimirSolo/Movie_App/blob/main/src/features/Search/model/slice/searchSlice.ts)
3. [x] Есть хотя бы одна кастомная мидлвара или createListenerMiddleware: [AuthMiddleware](https://github.com/VladimirSolo/Movie_App/blob/main/src/features/Auth/model/services/authMiddleWare.ts).
4. [x] Используется RTK Query: [MoviesApi](https://github.com/VladimirSolo/Movie_App/blob/main/src/widgets/api/moviesApi.ts), [HistoryApi](https://github.com/VladimirSolo/Movie_App/blob/main/src/features/Search/services/historyApi.ts), [FavoriteApi](https://github.com/VladimirSolo/Movie_App/blob/main/src/features/FirebaseDB/model/services/favoritesApi.ts)
5. [x] Используется Transforming Responses: [TransformHistory](https://github.com/VladimirSolo/Movie_App/blob/main/src/features/Search/services/transform/transformResponse.ts).

## **2 уровень (необязательный)**

1. [x] Использование TypeScript: [TSConfig](https://github.com/VladimirSolo/Movie_App/blob/main/tsconfig.json).
2. [x] Использование Firebase для учетных записей: [AuthThunk](https://github.com/VladimirSolo/Movie_App/blob/main/src/features/Auth/model/actions/authThunk.ts), для обращение к базе данных избранного и истории поиска используется база firebase: [AuthThunk](https://github.com/VladimirSolo/Movie_App/blob/main/src/widgets/api/config/baseApi.ts)
[favorites.actions](https://github.com/afect13/aston-react-project/blob/main/src/features/favorites/favorites.actions.ts), [history.actions]3https://github.com/afect13/aston-react-project/blob/main/src/features/history/history.actions.ts).
3. [x]  Настроен CI: [CI](https://github.com/VladimirSolo/Movie_App/blob/main/.github/workflows/worksflows.yml)
4. [x] Feature Flags. Реализовать фичу “Поделиться в телеграм”, закрытую под фича флагом.
  - Если флаг с этой фичей включен, то у карточки единицы информации должна появиться кнопка “Поделиться” : [ServerApi](https://github.com/VladimirSolo/Movie_App/blob/main/src/widgets/api/serverApi.ts).
  - Флаг должен присылаться с локального сервера: [Server](https://github.com/VladimirSolo/Movie_App/blob/main/server/server.ts).
  - Флаг положить в react context, забрать из контекста в необходимом месте приложения: [FeatureTelegramProvider](https://github.com/VladimirSolo/Movie_App/blob/main/src/app/providers/FeatureTelegramProvider/ui/FeatureTelegramProvider.tsx).


## **Дополнительно**

- В проекте использовалась архитектурная методология **Feature-Sliced Design**.
- Для одновременного запуска клиентской и серверной частей проекта, использовалась библиотека **Concurrently**.
- Для управления формами использовалась библиотека **React Hook Form**.