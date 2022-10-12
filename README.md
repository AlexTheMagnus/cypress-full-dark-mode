# cypress-full-dark-mode [![Run example specs][test-workflow-badge]][test-workflow-url] [![cypress version][cypress-version]][cypress-url]

A full dark mode for Cypress 10 or higher.


[![NPM][npm-icon]][npm-url]

[![semantic-release][semantic-image]][semantic-url]
[![standard][standard-image]][standard-url]

![Cypress dark](images/cypress-full-dark-mode.png)


## Install

> Requires:
> - [Node](https://nodejs.org/en/) version 6 or above.
> - [Cypress][cypress-url] version 10 or above.

Add the package to your project dev dependencies:
```sh
npm install --save-dev @alexmagnus/cypress-full-dark-mode
```

Then, add to your [cypress/support/e2e.js](cypress/support/e2e.js) the line:

```js
require('@alexmagnus/cypress-full-dark-mode')
```


## Small print

Author:  [**AlexTheMagnus**](https://github.com/AlexTheMagnus).

Based on: [cypress-dark](https://github.com/bahmutov/cypress-dark) from [Gleb Bahmutov ](https://github.com/bahmutov).

License: MIT - do anything with the code, but don't blame me if it does not work.

Support: if you find any problems with this module please [open issue](https://github.com/AlexTheMagnus/cypress-full-dark-mode/issues) on Github.


## MIT License

Copyright (c) 2022 AlexMagnus &lt;https://github.com/AlexTheMagnus&gt;

Permission is hereby granted, free of charge, to any person
obtaining a copy of this software and associated documentation
files (the "Software"), to deal in the Software without
restriction, including without limitation the rights to use,
copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the
Software is furnished to do so, subject to the following
conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.

[test-workflow-badge]: https://github.com/AlexTheMagnus/cypress-full-dark-mode/actions/workflows/semantic-release.yml/badge.svg
[test-workflow-url]: https://github.com/AlexTheMagnus/cypress-full-dark-mode/actions/workflows/semantic-release.yml
[npm-icon]: https://nodei.co/npm/@alexmagnus/cypress-full-dark-mode.svg?downloads=true
[npm-url]: https://www.npmjs.com/package/@alexmagnus/cypress-full-dark-mode
[cypress-version]: https://img.shields.io/badge/cypress-^10.0.2-brightgreen
[cypress-url]: https://www.cypress.io/
[semantic-image]: https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg
[semantic-url]: https://github.com/semantic-release/semantic-release
[standard-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg
[standard-url]: http://standardjs.com/
