import { Provider } from 'react-redux';
import store from './redux/store';
import Products from './components/Products';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <Products />
    </Provider>
  );
}

export default App;
