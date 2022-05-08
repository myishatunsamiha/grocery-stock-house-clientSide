import logo from './logo.svg';
import './App.css';
import Header from './components/Shared/Header/Header';
import Footer from './components/Shared/Footer/Footer';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';


function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
