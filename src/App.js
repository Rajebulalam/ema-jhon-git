import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from "./components/Header/Header";
import Shop from './components/Shop/Shop';

function App() {
  return (
    <div className="container">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Shop></Shop>}></Route>
        <Route path='/shop' element={<Shop></Shop>}></Route>
      </Routes>
    </div>
  );
}

export default App;
