
import { BrowserRouter as Router, Route, /* Link, */ Routes } from 'react-router-dom';
import Home from './components/routes/home';

function App() {

  return (
    <Router>
    <Routes>
      <Route path='/' Component={Home}/>
    </Routes>

  </Router>
  )
}

export default App
