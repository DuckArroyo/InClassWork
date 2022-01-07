import React from 'react';
import { Provider } from 'react-redux';
// Replace StoreProvider here and in App()
// import { StoreProvider } from './utils/GlobalState';
// Import the Redux store you created
//
import store from './utils/store';

function App() {
  return (
    <div>
      <Provider store={store}>
        <h4>Check the console</h4>
        <div className='container'>{console.log(store.getState())}</div>
      </Provider>
    </div>
  );
}

export default App;
