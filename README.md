#  Redux DevTools persistState example
Basic example of using the persistState store enhancer of the [Redux DevTools](https://github.com/gaearon/redux-devtools). With persistState you can persist debug sessions across page reloads. The most important aspect is that actions are stored and dispatched automatically on reload.

## Usage
1. `npm install -g jspm`
1. `jspm install`
1. Start a webserver (like browser-sync)
1. Visit it on something like `localhost:3000?debug_session=foo`. You can give the session an id through the debug_session parameter. 
1. In a console use the global `add(String)` and `remove(String)` to dispatch actions and influence the state. 
1. Reload the browser
