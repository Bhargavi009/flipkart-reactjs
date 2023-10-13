
import './App.css';
import './css/bootstrap1.css';
import Side from './components1/Side';
import Banner from './components1/Banner';
import Scroll from './components1/Scroll'
import Products1 from './components1/Products1';
import Form from './components1/Form';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { createContext,useState  } from 'react';
export const Store=createContext();
function App() {
  return (
    <>
    <BrowserRouter>
    <div class="container-fluid">
    <Side/>
      <Banner/>
      <Scroll/>
      <Products1/>
      <Routes>
         <Route path='/' element={<Form/>} />  
      </Routes>
    </div>
    </BrowserRouter>
    </>
  );
}

export default App;
