# Jparty

An Ember front-end for [jservice](http://jservice.io/)

![demo](./jparty-demo.gif)

_________________________________________________

## Web Sockets

[Run this thing](https://github.com/coleww/websocket-message-passer-thing) to pass messages between "game" and "host".

### TODO: convert all the WS stuff to two-tab localstorage events...

http://stackoverflow.com/questions/1366483/javascript-sharing-data-between-tabs
https://www.npmjs.com/package/ember-local-storage

(also: persist game state in this fashion...)

## setting up a jService

This project uses [Ember-CLI Mirage](https://github.com/samselikoff/ember-cli-mirage) to run a mock server in test/development. Just run `ember s` and it works like magic (but serves the same categories/clues every time).

You can also run the app against a local version of jService:

- [clone jservice](https://github.com/sottenad/jService) && `cd jservice`
- edit database.yml (delete username/password or replace with yr own)
- `rake db:create`
- `pg_restore -Fc -d jarchive_development jarchive-jan-20-2015.bak`
- `rails s`
- visit http://localhost:3000/ and you should see "137,800 Trivia Questions" if everything worked
- in yr jparty directory, run `ember serve --proxy http://localhost:3000/`

Or to run the app directly against jservice.io (not recommended)

- `ember serve --environment=production`

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](http://git-scm.com/)
* [Node.js](http://nodejs.org/) (with NPM)
* [Bower](http://bower.io/)
* [Ember CLI](http://www.ember-cli.com/)
* [PhantomJS](http://phantomjs.org/)

## Installation

* `git clone <repository-url>` this repository
* change into the new directory
* `npm install`
* `bower install`

## Running / Development

* `ember server`
* Visit your app at [http://localhost:4200](http://localhost:4200).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

Specify what it takes to deploy your app.

## Further Reading / Useful Links

* [ember.js](http://emberjs.com/)
* [ember-cli](http://www.ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)

