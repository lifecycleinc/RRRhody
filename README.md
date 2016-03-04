RRRhody
=======
[rrrhody.org](http://rrrhody.org)

## Installation
Install [node.js & npm](http://blog.npmjs.org/post/85484771375/how-to-install-npm)
```bash
$ npm i -g bower
$ npm i -g gulp
```

## Initial Setup
```bash
$ bower i && npm i
$ touch .env
```
Add API URL to .env
```
API_URL=https://rrrhody-api-staging.herokuapp.com
```

## Development
```bash
$ npm start
```

## Clean public directory
```bash
$ npm run clean
```

## Build public directory
```bash
$ npm run build
```

## Deployment
Source branch is the development branch because gh-pages needs master to publish
```bash
$ npm run deploy
```
