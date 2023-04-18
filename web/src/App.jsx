import Autocomplete from "./Components/Search"
import ProductCards from "./Components/ProductCards"
import Product from "./Components/Product"
import User from "./Components/User"
import ForgotPassword from "./Components/ForgotPassword"

// import SignUp from "./Components/SignUp"
import './Styles/App.css'
import AddProduct from "./Components/AddProduct"



function App() {
  return (
    <div className="App">
        <Navbar />
        <ForgotPassword />
        {/* <ProductCards /> */}
        {/* <Product /> */}
        {/* <User /> */}
        {/* <AddProduct /> */}
        {/* <EmailSent /> */}
        {/* <ChangePassword /> */}
        {/* <Cart /> */}
    </div>
  )
}

export default App
