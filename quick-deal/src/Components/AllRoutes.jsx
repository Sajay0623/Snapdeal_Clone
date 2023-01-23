import { Routes, Route } from 'react-router-dom'
import Signup from '../Pages/Signup'
import Login from '../Pages/Login'
import Body from '../Body'
import Order from "../Pages/Order"
import Product from "../Pages/Product"
import Seller from "../Pages/SellOnUs"
import Admin from "../Pages/AdminPost"
import Single from "../Pages/SingleProd"
export default function AllRoutes() {

    return (



        <Routes>
            <Route path="/" element={<Body />}></Route>
            <Route path="/signup" element={<Signup />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/order" element={<Order />}></Route>
            <Route path="/product" element={<Product />} ></Route>
            <Route path="/single" element={<Single />} ></Route>
            <Route path="/seller" element={<Admin />} ></Route>
            {/* <Route path="/admin" element={<Admin />} ></Route> */}


        </Routes>

    )
}