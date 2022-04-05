import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from "./components/Header/Header";
import Home from './components/Home/Home';
import Orders from './components/Orders/Orders';
import Shop from './components/Shop/Shop';

function App() {
  return (
    <div className="container">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/shop' element={<Shop></Shop>}></Route>
        <Route path='/orders' element={<Orders></Orders>}></Route>
      </Routes>
    </div>
  );
}

export default App;
