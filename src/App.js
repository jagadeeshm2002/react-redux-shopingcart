
import { Routes ,Route } from 'react-router-dom';
import './App.css';
import Cart from './pages/cart';
import Home from './pages/home';
import Header from './components/header';

function App() {
  return (
    <div >
      <Header/>
      <Routes>
        <Route exact path='/' element ={ <Home /> }/>
        <Route path='/cart' element={<Cart /> } />



      </Routes>
    </div>
  );
}

export default App;
