# About

This is the repository for the front-end.

# First time setup

## React setup

1. Install [Node.js](https://nodejs.org/en/) ([>=15](https://nodejs.org/dist/v15.12.0/node-v15.12.0-x64.msi))

1. Install `create-react-app` (globally)

```shell
npm i -g create-react-app
```

1. Run `create-react-app` (it may take a while). You won't need the new app, but this makes sure that you can work with React.

```shell
npx create-react-app test-app
```

1. Remove the newly-created `test-app` directory.

## Project setup

1. Clone this repository anywhere.

```shell
git clone https://github.com/Fake-News-Detection-2B5/front-end

cd front-end
```

1. Install the  project Node dependencies

```shell
npm i
```

1. Test if the project works

```shell
yarn start
```

1. If `yarn` wasn't found, manually install it (globally)

```shell
npm i -g yarn
```

# Scripts

## `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

## `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

## `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.


# Team

- [Zaborilă Andrei](https://github.com/Andreizabo)
- [Tudose George-Daniel](https://github.com/BeterNerfIrelia)
- [Mihai Constantin](https://github.com/UnexomWid)
- [Huțu Alexandru-Dumitru](https://github.com/PrEaDiVviN)

# Standards

Please use the following standards when contributing:

- [EXDS-0011](https://std.exom.dev/0011) - git commit messages
- [EXDS-0040](https://std.exom.dev/0040) - JavaScript syntax