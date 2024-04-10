import { BrowserRouter as Router, Route, /* Link, */ Routes } from 'react-router-dom';
import Home from './components/routes/home';
import Cart from './components/routes/cart';
import Login from './components/routes/login';
import Register from './components/routes/register';

function App() {

  return (
    <Router>
    <Routes>
      <Route path='/' Component={Home}/>
      <Route path='/cart' Component={Cart}/>
      <Route path='/login' Component={Login}/>
      <Route path='/register' Component={Register}/>
    </Routes>

  </Router>
  )
}

export default App
