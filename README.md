# Next Boilerplate 📐
A modern universal boilerplate for React applications using [Next.js](https://github.com/zeit/next.js).

### Features 🎉

* Isolated package-based development
* Redux + Redux-Observable for state management
* Server-side rendering (comes out of the box from Next.js)
* Linting with [AirBnB](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb) and [CleanJS](https://github.com/bodil/eslint-config-cleanjs)

### Warning

This boilerplate is in heavy development. Please keep this in mind as you evaluate this repository and read the following paragraphs.

### Table of Contents

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
<!-- https://github.com/thlorenz/doctoc -->

- [Modules](#modules-)
- [Conventions](#conventions)
  - [Feature-based modules](#feature-based-modules)
    - [Actions and Reducers](#actions-and-reducers)
    - [Importing](#importing)
    - [Exporting](#exporting)
  - [Container-Component model](#container-component-model)
    - [Number of files](#number-of-files)
    - [Example](#example)
      - [`containers/Counter.js`](#containerscounterjs)
      - [`components/Counter.js`](#componentscounterjs)
  - [Namespaced Modules](#namespaced-modules)
    - [Example](#example-1)
- [Asynchronicity with Observables](#asynchronicity-with-observables)
    - [Example](#example-2)
    - [Redux Thunks](#redux-thunks)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

# Modules 📦

There are currently four modules in this boilerplate example:

* `core` — Holds a simple string variable in order to demonstrate importing from a module.
* `redux-config` — Configures Redux; It is also where all the reducers and initial app states are combined.
* `counter` — Implements a Redux-based increment/decrement counter with its own actions, reducers, and initial state.
* `todoapp` — Implements a simple Redux-based todo app similar to the `counter` module, but with more complex containers and components.
* `fetch` — Implements an asynchronous fetching example. It fetches from an API endpoint and displays the resulting data.

# Conventions

As per Next.js convention, everything starts at the `pages` directory. Beyond this (and other default conventions), we have decided to add some additional conventions to improve the developer experience.

## Feature-based modules

A module is just a folder underneath the `modules` directory.

The most important thing to remember is: **Each feature of the app should reside in its own module.**

Within each of these modules, there should only be a **single point of entry**: the `index.js` file. This is where the module will expose its contents to the rest of the app.

You should only import from `index.js` and not any of the module's internal files. The idea is to maximize reusability and remain flexible to future changes by having a single file that holds the interface to the entire module.

### Actions and Reducers

Redux actions and reducers should reside in their own feature-based modules. This also includes more advanced objects/functions/files like Sagas ([Redux-Saga](https://github.com/redux-saga/redux-saga)) and Epics ([Redux-Observable](https://github.com/redux-observable/redux-observable)).

The idea is to ensure that **each module fully contains everything required for the implementation of its feature**. That way, when you need to go change something, you'll know that everything you need will be inside that module.

The `redux-config` module is then configured to pull in the necessary reducers and initial state from each feature module.

### Importing

Importing from a feature-based module is simple. We use a Babel plugin (`babel-plugin-root-import`) so that we can minimize our usage of relative paths.

For example, if there is a `counter` module with an `index.js` like this:

```js
import Container from './containers/Counter'
import CounterReducer from './reducer'

export const Counter = Container
export const reducer = CounterReducer
```

We can import it from our `pages` directory (or inside any other modules) like this:

```js
import { Counter, reducer } from '~/counter'
```

Note that we use the `~` symbol to mark `counter` as an internal app module. The Babel transform will convert the above line to something like this:

```js
import { Counter, reducer } from '../modules/counter'
```

You should never be using relative imports unless you are only working with the internals of a module.

### Exporting

Inside each module, the `index.js` file will have **named exports** for anything that the module chooses to expose to the rest of the app.

For all other files inside the module, they should all be **default exports** so that each file's responsibility is made clear by what it is exporting. Note that this is not a hard rule, as Redux actions can be considered an exception to this rule. The reasoning for this exception is due to the fact that actions usually are not large enough to warrant their own file. As a result, we group them all into one `actions.js` file and use named exports to expose them.

## Container-Component model

Inside each React-based module, there should be two folders: `components` and `containers`.

`components` is where all the presentational or "dumb" components will live. These components must be **functional stateless components**.

`containers` is where all the "smart" components will live. These are components that may contain state, and also will be tasked with `connect()`-ing to the redux store so that we can provide the appropriate props and actions to a consuming component.

If these containers become too complicated, split the file into two containers instead, with one in charge of connecting to the redux store, and the other to handle local component state.

### Number of files

Ideally, there shouldn't be more than five files inside each of the `components` and `containers` folders.

If you find that you require more files to implement your feature, try to split out the feature into another module with a namespaced prefix.

For example, if your `counter` module gets complicated enough to require data-fetching and more fancy presentational components, consider splitting your one `counter` module into several modules like this:

```
modules/counter-core/
modules/counter-data/
modules/counter-components/
```

### Example

#### `containers/Counter.js`

```js
import { connect } from 'react-redux'
import Component from '../components/Counter'

const mapDispatchToProps = (dispatch) => ({
  increment: () => dispatch({ type: 'INCREMENT' }),
  decrement: () => dispatch({ type: 'DECREMENT' }),
})

export default connect(state => state, mapDispatchToProps)(Component)
```

#### `components/Counter.js`

```js
export default ({ count = 0, increment, decrement }) =>
  <div>
    <h1>{ count }</h1>
    <button onClick={ increment }>Increment</button>
    <button onClick={ decrement }>Decrement</button>
  </div>
```

## Namespaced Modules

When your app grows larger and more complex, you might end up having a long list of modules. This is not ideal, and it's probably a good time to refactor some of these modules into their own namespaced modules.

Taking inspiration from NPM, the convention we have decided to use is the `@` symbol. In short, this is basically nested modules, but with only one level of depth allowed and it must be explicitly stated by using the `@` symbol.

For an example of this, please see the `my-feature` page.

### Example

Inside your `modules` folder, create a namespace by creating a directory named `@my-feature`, where `my-feature` is the name of your namespace. Inside this directory, you can place your namespaced modules. Importing from these modules should look something like this:

```js
import { hello } from '~/@my-feature/core'
import { add } from '~/@my-feature/utils'
```

Note that there is nothing different or special about these modules, they simply sit within another folder.

# Asynchronicity with Observables

[Redux-Observable](https://github.com/redux-observable/redux-observable/) is used along with [RxJS](http://reactivex.io/rxjs/) for handling asynchronicity in the app. This means that asynchronous activity is handled as streams inside files called "epics". Please note that epics are run *after* actions have been handled by the reducers.

Each module that requires asynchronous support will require an epic file. These epic files are then combined inside the `redux-config` module, much like the case for redux reducers.

The `fetch` page and module is a good demonstration of this architecture.

### Example

Here is an example `epic.js`, referenced from the `fetch` module:

```js
import { START_REQUEST, responseReceived } from './actions'

const request$ = Observable
  .ajax({ url: 'https://jsonplaceholder.typicode.com/posts/1' })
  .map(data => data.response)

export default action$ =>
  action$.filter(action => action.type === START_REQUEST)
    .exhaustMap(() => request$)
    .map(responseReceived)
```

All actions come through the `action$` stream after they have already passed through the redux reducer. We begin by filtering for the action we are specifically concerned with. Once we detect that action, we fire off our AJAX request via a nested observable called `request$`.

`request$` is then merged back onto the main stream by `exhaustMap`, and its response is sent through to the `responseReceived` function, thereby dispatching a `RESPONSE_RECEIVED` action with the data payload. Note that you can also use `mergeMap` or `switchMap` depending on your desired behaviour.

### Redux Thunks

Redux-Observable may be overkill for certain simple use-cases. As a result, you may choose to use [Redux-Thunk](https://github.com/gaearon/redux-thunk), but do try to isolate your asynchronous code in a specific file for ease of reasoning.
