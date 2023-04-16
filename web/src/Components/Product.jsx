import '../Styles/product.css'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PersonIcon from '@mui/icons-material/Person';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { Icon } from '@chakra-ui/react';

const Product = () => {
  return (
    <div className="productContainer">
        <div className="productLeft">
            <img src="/assets/shop.jpg" alt="product-img" />
        </div>
        <div className="productRight">
            <div className="productNameContainer">
                <div className="productName">Swift Dezire 970</div>
                <div className="productDesc">Maruti Swift Dzire Vxi 1.2 Petrol, Genuine 32,000 Kms Showroom Track, Chilled A/C Power Stering Power Windows Remote Locking 2Keys, Inbuilt Music System, Reverse Parking Sensor, Leather Seats, Valid Insurance, Hyd Reg, Smooth Running, Original Paint, 100% Non Accident, No Single Scratch As Like Brand New Car
                </div>
            </div>
            <div className="buyContainer">
                <div className="productPrice">₹ 3,35,000</div>
                <div className="buyButton">
                    <Icon as='ShoppingCartIcon' className='buyIcon' />
                    BUY NOW
                </div>
            </div>
            <div className="sellerContainer">
                <div className="sellerNameContainer">
                    <div className="sellerNameHead">Posted By</div>
                    <hr />
                    <div className="sellerName">
                        <Icon as='PersonIcon' className='personIcon' /> 
                    John Doe</div>
                </div>
                <div className="postedTime">
                    <Icon as='AccessTimeIcon' className='timeIcon' />
                 14 April 2023 at 12:01 PM</div>
            </div>
        </div>
    </div>
  )
}

export default Product