import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    //useRouteMatch,
    //useParams
} from 'react-router-dom';
import './App.css';
import LogIn from './components/Login';
import DisplayProducts from './components/DisplayProducts';
//import RemoveProduct from './components/RemoveProduct';
import UpdateProduct from  './components/UpdateProduct';
//import AddProduct from './components/AddProduct';

function App() {
    return (
        <div className="App">
            <div className="App-header"> <strong> María Products Inventory </strong></div> 
            <Router>
            <div className="links">
                <ul>
                    <li>
                        <Link to="/login">Login</Link>
                    </li>
                    <li>
                        <Link to="/api/products"> Display products </Link>
                    </li>
                    <li>
                        <Link to="/api/product/:productId">Update product</Link>
                    </li>

                </ul>
            </div> 
            <Switch>
                <Route path="/login">
                    <LogIn></LogIn>
                </Route>
                <Route path="/api/products">
                    <DisplayProducts></DisplayProducts>
                </Route>
                <Route path="/api/product/:productId">
                    <UpdateProduct></UpdateProduct>
                </Route>
            </Switch>
            </Router>
        </div>
    );
}

export default App;