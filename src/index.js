import React from 'react';
import ReactDOM from 'react-dom';
import createStore from './redux/createStore';
import { Provider } from 'react-redux';
// import reducer from './Reducer';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();
let store = createStore();

window.s = store;

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

if (process.env.NODE_ENV !== 'production') {
  if (module.hot) {
    module.hot.accept('./App', () => {
      ReactDOM.render(
        <Provider store={store}>
          <App />
        </Provider>,
        document.getElementById('root')
      );
    });
  }
}

store.dispatch({
  type: 'NEW_FOOD',
  content: {
    'f400558e-251a-4f7e-8d05-66e35btomato': {
      name: 'tomato',
      fat: 50,
      protein: 100,
      carbs: 50,
      id: 'f400558e-251a-4f7e-8d05-66e35btomato'
    }
  }
});

store.dispatch({
  type: 'NEW_FOOD',
  content: {
    'f400558e-251a-4f7e-8d05-66e35b729egg': {
      name: 'egg',
      fat: 100,
      protein: 50,
      carbs: 100,
      id: 'f400558e-251a-4f7e-8d05-66e35b729egg'
    }
  }
});

store.dispatch({
  type: 'SAVE_PREFERENCES',
  content: {
    kcal: 12345,
    meals: [
      {
        name: 'Breakfast',
        seconds: 25200000
      },
      {
        name: 'Morning snack',
        seconds: 34200000
      },
      {
        name: 'Lunch',
        seconds: 45000000
      },
      {
        name: 'Dinner',
        seconds: 61200000
      },
      {
        seconds: 73800000,
        name: 'Evening snack'
      }
    ]
  }
});

registerServiceWorker();
