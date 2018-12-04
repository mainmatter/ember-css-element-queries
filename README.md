ember-css-element-queries
==============================================================================

Automatically adds
[css-element-queries](https://github.com/marcj/css-element-queries#readme) to
your application and initialises it at boot time. 

Installation
------------------------------------------------------------------------------

```
ember install ember-css-element-queries
```


Usage
------------------------------------------------------------------------------

This addon adds the following code to the header

```
<script src="/assets/css-element-queries.js"></script>
<script>
  if(typeof FastBoot === 'undefined') {
    ElementQueries.listen();
    ElementQueries.init();
  }
</script>
```

and makes sure that the css-element-queries code is available for download in
your application.


Contributing
------------------------------------------------------------------------------

### Installation

* `git clone <repository-url>`
* `cd ember-css-element-queries`
* `npm install`

### Linting

* `npm run lint:hbs`
* `npm run lint:js`
* `npm run lint:js -- --fix`

### Running tests

* `ember test` – Runs the test suite on the current Ember version
* `ember test --server` – Runs the test suite in "watch mode"
* `ember try:each` – Runs the test suite against multiple Ember versions

### Running the dummy application

* `ember serve`
* Visit the dummy application at [http://localhost:4200](http://localhost:4200).

For more information on using ember-cli, visit [https://ember-cli.com/](https://ember-cli.com/).

License
------------------------------------------------------------------------------

This project is licensed under the [MIT License](LICENSE.md).
