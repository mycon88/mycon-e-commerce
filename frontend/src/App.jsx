import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import Products from './pages/Products'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import MyCart from './pages/MyCart'
import Header  from "./components/Header"


export default function App() {
  return (
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/my-cart" element={<MyCart />} />
        <Route path="/products" element={<Products />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        </Routes>
    </BrowserRouter>
  )
}
