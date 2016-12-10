## heroku-angular2-seed

A simple starter project demonstrating the basic concepts of Angular 2.


### Usage
- Clone or fork this repository
- Make sure you have [node.js](https://nodejs.org/) installed version 5+
- Make sure you have NPM installed version 3+
- `WINDOWS ONLY` run `npm install -g webpack webpack-dev-server typescript` to install global dependencies
- run `npm install` to install dependencies
- run `npm start` to fire up dev server
- open browser to [`http://localhost:3000`](http://localhost:3000)
- if you want to use other port, open `package.json` file, then change port in `--port 3000` script

### Deployment to Heroku
First of all, this project is not forked from `angular/angular2-seed` for Heroku deployment requires some changes that look critically irrelevant to the original project.

- Meet all Heroku prerequisites i.e. free [Heroku account](https://signup.heroku.com/signup/dc) and Heroku CLI [installed](https://devcenter.heroku.com/articles/getting-started-with-nodejs#set-up)
- Clone or fork this repository
- Run dev server the same way as above
- Create Heroku application with `heroku create`
- Add Node.js buildpack: `heroku buildpacks:add heroku/nodejs`
- Add static buildpack: `heroku buildpacks:add https://github.com/hone/heroku-buildpack-static`
- At the settings page of your app at Heroku set value for `CONFIG_VAR` config var
- Deploy the app with `git push heroku master`
- Use `.env` file for config vars of development environment

### Heroku troubleshooting
Removing failing `@types/core-js` is a little bit tricky. Heroku `node_modules` caching is awesomely helpful. You can delete them whichever way you like with `heroku run bash` — they'll never die. The key to their immortality is accessible only from Heroku cache:
```bash
$ heroku plugins:install heroku-repo
$ heroku repo:purge_cache -a appname
```

### Optionally

- Take a look at [heroku-static-buildpack](https://github.com/heroku/heroku-buildpack-static)
- Take a look at pretty self-explaining commits
