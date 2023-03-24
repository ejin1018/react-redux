import { Provider } from 'react-redux';
import store from './redux/store';
import Products from './components/Products';
import Display from './components/Display';
import Carts from './components/Carts';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <Products />
      <Display />
      <Carts />
    </Provider>
  );
}

export default App;
