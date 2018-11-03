import * as React from 'react';
import ReactDOM from 'react-dom';
import {AppComponent} from './components/app.component.jsx';
import {store} from './state/store';
import {Provider} from 'react-redux';

const render = () => {
    ReactDOM.render(
        <Provider store={store}>
            <AppComponent />
        </Provider>,
        document.getElementById('root')
    );
};

store.subscribe(render);
render();
