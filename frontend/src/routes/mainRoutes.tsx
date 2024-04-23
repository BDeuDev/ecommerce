import { BrowserRouter as Router} from 'react-router-dom';
import { PublicRoutes } from './publicRoutes';
import { PrivateRoutes } from './privateRoutes';



export const Rooter = () =>{

  return (
    <Router>
        <PublicRoutes/>
        <PrivateRoutes/>
    </Router>
  )
}