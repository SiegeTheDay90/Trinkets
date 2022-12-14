import { Route } from 'react-router-dom';
import Navigation from './Components/Navigation/Navigation.jsx';
import Splash from './Pages/Splash/Splash.jsx';
// import Shop from './Shop/Shop';
// import Product from './Product/Product';
// import Cart from './Cart/Cart';
// import Search from './Search/Search';
import './App.css';


function App() {
  return (
    <div id="App" className="App">

      <header className="App-header">
        <Route path="/">
          <Navigation />
        </Route>
      </header>

      <div className='App-body'>
        {/* <Route path="/shops/:id">
          <Shop />
        </Route>
        <Route path="/products/:id">
          <Product />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
        <Route path="/search/:query">
          <Search />
        </Route> */}
        <Route exact path="/">
          <Splash />
        </Route>
      </div>
    </div>
  );
}

export default App;
