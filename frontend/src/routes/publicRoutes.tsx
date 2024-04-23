import { BrowserRouter as Router, Route, /* Link, */ Routes } from 'react-router-dom';
import Home from '../components/routes/home';
import Login from '../components/routes/login';
import Register from '../components/routes/register';



export const PublicRoutes = () => {

  return (
    <Routes>
      <Route path='/' Component={Home}/>
      <Route path='/login' Component={Login}/>
      <Route path='/register' Component={Register}/>
    </Routes>

  )
}