import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux'; // Import useSelector hook
import Home from './pages/Home';
import Products from './pages/Products';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Header from './components/Header';
import AddProduct from './pages/AddProduct';
import ProductView from './pages/ProductView';
import Dashboard from './pages/Dashboard';
import DashProfile from './components/DashProfile';

export default function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/all" element={<Products />} />
        <Route path="/product/add" element={<AddProduct />} />
        <Route path="/product/:productId" element={<ProductView />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<DashProfile />} />
      </Routes>
    </Router>
  );
}
