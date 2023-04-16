import Autocomplete from "./Components/Search"
import Navbar from "./Components/Navbar"
import Footer from "./Components/Footer"
import ProductCards from "./Components/ProductCards"
import Product from "./Components/Product"
import User from "./Components/User"
import ForgotPassword from "./Components/ForgotPassword"

// import SignUp from "./Components/SignUp"
import './Styles/App.css'
import AddProduct from "./Components/AddProduct"
import ChangePassword from "./Components/ChangePassword"



function App() {
  return (
    <div className="App">
        <Navbar />
        {/* <ForgotPassword /> */}
        <ChangePassword />
        {/* <ProductCards /> */}
        {/* <Product /> */}
        {/* <User /> */}
        {/* <AddProduct /> */}
        <Footer />
    </div>
  )
}

export default App
