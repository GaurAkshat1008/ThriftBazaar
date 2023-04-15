import '../Styles/productCard.css';

const ProductCard = ({
    id,
    name, 
    price, 
    description,
    imgUrls, 
    user
}) => {
  return (
    <div className='productCard'>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE3P4qDCx-svWdblH1p3ptnYVkQ9-sUXinrLDiKpLN&s" className="productCardImg" alt="product-img" />
        <div className="productCardPrice">₹ {price}</div>
        <div className="productCardName">{name}</div>
        <div className="productCardDesc">{description}</div>
        <div className="productCardUser">Posted by {user}</div>
    </div>
  )
}

export default ProductCard