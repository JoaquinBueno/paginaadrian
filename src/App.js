import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import './App.css';
import Home from './pages/Home'
import Menu from './components/menu/index'
import {Buzos} from './pages/Buzos'
import {Chombas} from './pages/Chombas'
import {Camperas} from './pages/Camperas'
import {Joggins} from './pages/Joggins'
import {Remeras} from './pages/Remeras'
import ProductId from './pages/product';
import Cart from './pages/cart'
import { Provider } from 'react-redux';
import store from './store'
import Pago from './pages/Pago'
import { Joggers } from './pages/Joggers';
import { Canguros } from './pages/Canguros';
import { Checkout } from './pages/checkout';
function App() {
  return (
    <div className='page-container'>
      <Provider store={store}>
        <BrowserRouter>
          <Menu/>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/buzos' component={Buzos}/>
            <Route exact path='/chombas' component={Chombas}/>
            <Route exact path='/camperas' component={Camperas}/>
            <Route exact path='/joggins' component={Joggins}/>
            <Route exact path='/remeras' component={Remeras}/>
            <Route exact path='/joggers' component={Joggers}/>
            <Route exact path='/canguros' component={Canguros}/>
            <Route path='/buzos/:id' component={ProductId}/>
            <Route exact path='/cart' component={Cart}/>
            <Route exact path='/checkout/:id' component={Checkout}/>
            {/* <Route exact path='/pago' component={Pago}/> */}
          </Switch>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
