## Live demo for a contacts manager tool.

[Here's the app](https://contacts-manager-a5c89.firebaseapp.com) Create an user or login to get started.

> This repo is the solution for the [Ultimate Angular 1.x Pro course](https://ultimateangular.com/angular-1-pro#description)

## Setup and install the project

Follow the steps below for setting everything up (if you have some of these already, skip to the next step where appropriate):

1. Download and install [Node.js here](https://nodejs.org/en/download/)
2. Install Firebase CLI on the command-line with `npm install -g firebase-tools`
3. Install Gulp CLI on the command-line with `npm install -g gulp`

That's about it for tooling you'll need to run the project, let's move onto the project install.

#### Project installation and server

You'll need to `cd` into the directory that you cloned the repo into and run some quick tasks:

```
cd <your-app-folder>
npm install
```

This will then setup all the development and production dependencies we need.

Now simply run this to boot up the server:

```
npm start
```

## Tasks

A quick reminder of all tasks available:

#### Running the local server

```
npm start
```

#### Running the tests

```
npm test
```

#### Deploying to Firebase

You'll need to ensure you're logged into Firebase first (if you are prompted, otherwise skip to next step):

```
firebase login
```

To deploy:

```
npm run deploy
```

This will then use the `gulpfile.babel.js` tasks to build the project and deploy it all fully minified to your Firebase account. You'll then be shown the full URL of your project in the terminal for viewing your live app!

## Firebase rules

You can copy and paste this into your `database.rules.json` file generated by Firebase:

```json
{
  "rules": {
    ".read": true,
    "contacts": {
      "$uid": {
        ".read": "$uid === auth.uid",
        ".write": "$uid === auth.uid"
      }
    }
  }
}
```

## Resources

There are several resources used inside this project, of which you can read further about to dive deeper or understand in more detail what they are:

* [Firebase Docs](https://firebase.google.com/docs/)
* [Firebase CLI](https://firebase.google.com/docs/cli/)
* [AngularFire Repo/Docs](https://github.com/firebase/angularfire)
* [npm](https://www.npmjs.com/)
* [Gulp.js](http://gulpjs.com)
* [ui-router](https://github.com/angular-ui/ui-router)
* [ngAnnotate](https://github.com/olov/ng-annotate)
* [ngTemplateCache](https://github.com/miickel/gulp-angular-templatecache)
