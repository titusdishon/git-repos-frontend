# Github Repos Frontend

This repo holds the codebase for the github repos Frontend.
After inputing username on the home pag you should be able to get a list of repos owned by that specific user.

### Project Structure

[Live Version ](https://git-repos-frontend.web.app)

```
├── README.md
├── node_modules [1181 entries exceeds filelimit, not opening dir]
├── package-lock.json
├── package.json
├── public
│   ├── favicon.ico
│   ├── index.html
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.json
│   └── robots.txt
├── src
│   ├── App.tsx
│   ├── components
│   │   ├── LoadingSpinner.tsx
│   │   ├── MainPage.tsx
│   │   ├── NavBar.tsx
│   │   ├── NotFound.tsx
│   │   └── Pagination.tsx
│   ├── index.tsx
│   ├── pages
│   │   ├── Home.tsx
│   │   ├── ReadMe.tsx
│   │   ├── Repos.tsx
│   │   └── ReposView.tsx
│   ├── react-app-env.d.ts
│   ├── reportWebVitals.ts
│   ├── store
│   │   ├── configureStore.ts
│   │   ├── riposSlice.ts
│   │   └── rootReducer.ts
│   ├── theme
│   │   ├── ThemeProvider.tsx
│   │   ├── base.ts
│   │   └── schemes
│   │       └── PureLightTheme.ts
│   └── utils
│       ├── api.ts
│       ├── config.ts
│       ├── fetch.ts
│       └── useGracefulAPIErrorHandling.ts
└── tsconfig.json

9 directories, 33 files

```

### Techstack

1. Typescript
2. Redux
3. Material Ui
4. React Testing Library
5. React query

#### Local set up

1. Clone the repo, then run the following commands in order in your Terminal

```

cd git-repos-backend
git checkout <branch-of-interest>
npm install

```

Then run:

```
npm start

```

2. Navigate to [http://localhost:3000/](http://localhost:3000/) on your browser and you should see the application.

### screens

### Home

![Home](https://raw.githubusercontent.com/titusdishon/git-repos-frontend/main/files/home.png)

### Home when no username is provided

![Home](https://raw.githubusercontent.com/titusdishon/git-repos-frontend/main/files/home-error.png)

### Repos listing

![Repos page](https://raw.githubusercontent.com/titusdishon/git-repos-frontend/main/files/repos.png)

### Readme Page

![Readme](https://raw.githubusercontent.com/titusdishon/git-repos-frontend/main/files/readme.png)

How to:

1. In Terminal, do this in the root directory of the project

```bash
git checkout -b feature/short-description
```

##### Branch naming convention\*

Preface you branch name with

- `feature` for branches that introduce new functionality
- `chore` for branches that perform a useful general improvement, not tied to any specific functionality
- `fix` for branches that fix broken functionality
- `tests` for branches that only add developer tests

2. Raise a PR on GitHub, making sure to follow the inbuilt PR template.

3. Your changes will be merged into `main` on condition that:

- they do not break existing functionality
- they do not lower test coverage (unreasonably)

### sample test coverage
