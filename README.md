# Jparty

An Ember front-end for [jservice](http://jservice.io/)

_________________________________________________

### TODO:

- import sample data with mirage (following jservice api)([THIS SEEMS LIKE "THE WAY"](https://github.com/chancancode/hn-reader/blob/master/app/adapters/article.js))
- create board, 6 categories, 5 clues each. (pull categories at random somehow.../api/categories?count=100&offset=18100) (oh it would be cool to be easily able to "make yr own")
- create player component that has name/$
- viewing a clue: category/:category_id/clue/:$_amount (fetch on demand)
- store state of board in LS?
- hook up [this](https://www.npmjs.com/package/ember-websockets) to [this](https://github.com/websockets/ws) so the "host" can see answers. sync via game_id? (could this be "same app"-different-route?)
- maybe make a mini buzzer/timer/drawing/betting app...cordova?
- daily doubles/double/final rounds...


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

