import logo from './logo.svg';
import './App.css';
import Page1 from './components/Page1';
import Page2 from './components/Page2';
import Page3 from './components/Page3';
import Page4 from './components/Page4';
import Deposite from './components/Deposite';
import Withdraw from './components/Withdraw';
import Balance from './components/Balance';
import Admin from './components/Admin';
import Remove from './components/Remove';
import { BrowserRouter,Routes,Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      <Route path='/' element={<Page1/>}></Route>
      <Route path='/Page2' element={<Page2/>}></Route>
      <Route path='/Page3' element={<Page3/>}></Route>
      <Route path='/Page4' element={<Page4/>}></Route>
      <Route path='/Deposite' element={<Deposite/>}></Route>
      <Route path='/Withdraw' element={<Withdraw/>}></Route>
      <Route path='/Balance' element={<Balance/>}></Route>
      <Route path='/Admin' element={<Admin/>}></Route>
      <Route path='/Remove' element={<Remove/>}></Route>
      </Routes>
      </BrowserRouter>
      
      
    </div>
  );
}

export default App;
