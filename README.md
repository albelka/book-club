# BookClub

#### BookClub is a way for members of a book club to keep track of their members. 1.27.17

#### By **Anne Belka**

## Description
This project was generated with [angular-cli](https://github.com/angular/angular-cli) version 1.0.0-beta.26. BookClub is an exercise in Angular2 using angular-cli. It includes full CRUD functionality and utilizes dynamic routing.

## Setup/Installation Requirements

* _In the Command Line, run:_
```
git clone https://github.com/albelka/book-club
cd club-manager
npm install
bower install
npm install angularfire2 firebase --save
touch src/app/api-keys.ts
```
* _Create a New project in Firebase. Select 'Add Firebase to your web app'. In api-keys.ts file, add your unique key values:_
```
export var masterFirebaseConfig = {
    apiKey: "xxxx",
    authDomain: "xxxx.firebaseapp.com",
    databaseURL: "https://xxxx.firebaseio.com",
    storageBucket: "xxxx.appspot.com",
    messagingSenderId: "xxxx"
  };
```

* _In the Command Line, run:_
```
ng serve
```
* _Then, in any modern browser, open:_
```
localhost:4200
```
Or navigate to https://book-club-f0081.firebaseapp.com/ in your browser.

## Technologies Used
* Typescript
* Angular 2
* Firebase

## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Deploying to GitHub Pages

Run `ng github-pages:deploy` to deploy to GitHub Pages.

## Further help

To get more help on the `angular-cli` use `ng help` or go check out the [Angular-CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

### License

GPL

Copyright (c) 2017 **_Anne Belka_**
