import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PrivateRoute from '../components/utils/privateRoute';
import Cart from '../components/routes/cart';



export const PrivateRoutes = () => {

  return (
    <Routes>
        <Route path='/cart' element={<PrivateRoute component={Cart}/>}/>
    </Routes>

  )
}