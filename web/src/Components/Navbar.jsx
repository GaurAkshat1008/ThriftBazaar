// import '../Styles/navbar.css';
import Autocomplete from './Search';

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="navbarWrapper">
            <div className="logo">
                <span>Thrift</span>Bazaar
            </div>
            <div className="search">
                <Autocomplete />
            </div>
            <a href="/signin">
              <button className="login-btn">Login</button>
            </a>
            <button  className="sell-btn">+ SELL</button>
        </div>
    </div>
  )
}

export default Navbar