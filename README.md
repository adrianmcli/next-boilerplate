# next-boilerplate
A modern universal boilerplate for React applications using Next.js.

### Warning

This boilerplate is in heavy development. The next step will be to refactor some of the Redux logic into its own module. Please keep that in mind as you evaluate this repository and read the following paragraphs.

# Conventions

As per Next.js convention, everything starts at the `pages` directory. Beyond this (and other default conventions), we have decided to add some additional conventions to improve the developer experience.

## Feature-based folder structure 📁

A module is just a folder underneath the `modules` directory.

The most important thing to remember is: **Each feature of the app should reside in its own module.**

Within each of these modules, there should only be a **single point of entry**: the `index.js` file. This is where the module will expose its contents to the rest of the app.

You should only import from `index.js` and not any of the module's internal files. The idea is to maximize reusability and remain flexible to future changes by having a single file that holds the interface to the entire module.

### Actions and Reducers

All Redux-related items such as actions and reducers should reside in their own feature-based modules. This also includes more advanced objects/functions/files like Sagas ([Redux-Saga](https://github.com/redux-saga/redux-saga)) and Epics ([Redux-Observable](https://github.com/redux-observable/redux-observable)).

The idea is to ensure that **each module fully contains everything required for the implementation of its feature**. That way, when you need to go change something, you'll know that everything you need will be inside that module.

### Importing conventions

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

### Exporting conventions

Inside each module, the `index.js` file will have **named exports** for anything that the module chooses to expose to the rest of the app.

For all other files inside the module, they should all have **default exports** so that each file's responsibility is made clear by what it is exporting.

## Container-Component folder structure 📐

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

#### `containers/Counter.js`:

```js
import { connect } from 'react-redux'
import Component from '../components/Counter'

const mapDispatchToProps = (dispatch) => ({
  increment: () => dispatch({ type: 'INCREMENT' }),
  decrement: () => dispatch({ type: 'DECREMENT' }),
})

export default connect(state => state, mapDispatchToProps)(Component)
```

#### `components/Counter.js`:

```js
export default ({ count = 0, increment, decrement }) =>
  <div>
    <h1>{ count }</h1>
    <button onClick={ increment }>Increment</button>
    <button onClick={ decrement }>Decrement</button>
  </div>
```
