# Basic example

This is a very minimal HTML5 application built with [Brunch](http://brunch.io) builder
that uses [Chaplin](http://chaplinjs.org) web framework on top of Backbone MVC library.

## Getting started
* Install [Brunch](http://brunch.io): `npm install -g brunch`.
* Install Brunch plugins: `npm install`
* Install Bower components: `bower install`
* Watch the project with continuous rebuild by
`brunch watch --server`. This will also launch HTTP server.
* Build the minified project with `brunch build --optimize`.
* Open the `public/` dir to see the result.
* Write your code in `app` dir, install dependencies with Bower.

See [Chaplin site](http://chaplinjs.org) for docs and more info.

## How it works
1. Route (URL) match.
2. Controller initialization.
3. Model and view initialization.

1. When you navigate to URL in Chaplin application,
Chaplin.Router instance tries to match URL against
all routes defined in `routes` property passed to
`Chaplin.Application` (see `app/initialize`).
2. If successful, Chaplin.Dispatcher loads corresponding controller.
If route specifies `users#show`, it will load `controllers/users-controller`.
3. Controller initializes models and views as instance properties.
Previous controller and its models / views are auto-cleaned-up.

## License
The MIT license.

Copyright (c) 2012 Paul Miller (http://paulmillr.com/)

Copyright (c) 2012 Moviepilot GmbH, 9elements GmbH et al.

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies
of the Software, and to permit persons to whom the Software is furnished to do
so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
