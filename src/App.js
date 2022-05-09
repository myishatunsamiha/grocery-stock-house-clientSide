import logo from './logo.svg';
import './App.css';
import Header from './components/Shared/Header/Header';
import Footer from './components/Shared/Footer/Footer';
import { Route, Routes } from 'react-router-dom';
import Inventories from './components/ManageInventory/Inventories/Inventories';
import Home from './components/Home/Home/Home';
import Login from './components/UserAccounts/Login/Login';
import Register from './components/UserAccounts/Register/Register';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import RequireAuth from './components/UserAccounts/RequireAuth/RequireAuth';
import AddItem from './components/ManageInventory/AddItem/AddItem';
import InventoryItem from './components/ManageInventory/InventoryIterm/InventoryItem';
import NotFound from './components/NotFound/NotFound';
import Blogs from './components/Blogs/Blogs';


function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/inventories' element={
          <RequireAuth><Inventories></Inventories></RequireAuth>
        }></Route>

        <Route path='/additem' element={
          <RequireAuth><AddItem></AddItem></RequireAuth>
        }></Route>

        <Route path='/inventory/:id' element={
          <RequireAuth><InventoryItem></InventoryItem></RequireAuth>
        }></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
}

export default App;
