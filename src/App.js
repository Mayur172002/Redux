import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Feature/Website/Pages/Home'
import Dashboard from './Feature/Admin/Dashboard';
import Shop from './Feature/Website/Pages/Shop';
import About from './Feature/Website/Pages/About';
import Blog from './Feature/Website/Pages/Blog';
import Contact from './Feature/Website/Pages/Contact';
import Manage_categories from './Feature/Admin/Manage_categories';
import Add_categories from './Feature/Admin/Add_categories';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Add_product from './Feature/Admin/Add_product';
import { Profiler } from 'react';
import Product from './Feature/Admin/Product';
import Login from './Feature/Website/Pages/Login';
import Signup from './Feature/Website/Pages/Signup'
import Profile from './Feature/Website/Pages/Profile';
import EditUser from './Feature/Website/Pages/EditUser';
import Admin_User from './Feature/Admin/Admin_User';
import Aduser_edit from './Feature/Admin/Aduser_edit';
function App() {
  return (
    <div >
      <BrowserRouter>
      <ToastContainer />
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/shop' element={<Shop/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/blog' element={<Blog/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/profile' element={<Profile/>}/>
      <Route path='/editprofile/:id' element={<EditUser/>}/>

      {/* Admin Side */}
      <Route path='/dashboard' element={<Dashboard/>}/>
      <Route path='/manage_categories' element={<Manage_categories/>}/>
      <Route path='/add_categories' element={<Add_categories/>}/>
      <Route path='/add_product' element={<Add_product/>}/>
      <Route path='/manage_product' element={<Profiler/>}/>
      <Route path='/product' element={<Product/>}/>
      <Route path='/adprofile' element={<Admin_User/>}/>
      <Route path='/edituser/:id' element={<Aduser_edit/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
