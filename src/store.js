import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './root-reducer';
import { composeWithDevTools } from 'redux-devtools-extension';

export function configureStore(initialState = {}) {
    const enahancers = [
        applyMiddleware(thunk),
    ];
    
    // Enable DevTools only when rendering on client and during development.
	// if (process.env.CLIENT && process.env.NODE_ENV === 'development') {
	// 	enhancers.push(window.devToolsExtension ? window.devToolsExtension() : DevTools.instrument());
	// }

    const store = createStore(rootReducer, initialState, composeWithDevTools(
        applyMiddleware(thunk)
    ));

    if (module.hot) {
        // Enable Webpack hot module replacement for reducers
        module.hot.accept('./root-reducer', () => {
            const nextReducer = require('./root-reducer').default; // eslint-disable-line global-require
            store.replaceReducer(nextReducer);
        });
    }

    return store;
}