import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import App from './App';
import Login from './container/FormLogin';
const AppRouter = () => {
 return (
  <BrowserRouter basename="/deploy-react">
   <div >
        {/* <nav>
            <ul>
                <li>
                <Link to='/'>Register</Link>
                </li>
                <li>
                <Link to='/login'>Login</Link>
                </li>
            </ul>
        </nav> */}
    
    <Route path='/' exact component={App} />
    <Route path='/login' component={Login} />
   </div>
  </BrowserRouter>
 );
};
export default AppRouter; 