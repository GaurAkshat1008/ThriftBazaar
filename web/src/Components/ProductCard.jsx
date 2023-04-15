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
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE3P4qDCx-svWdblH1p3ptnYVkQ9-sUXinrLDiKpLN&s" className="productImg" alt="product-img" />
        <div className="productPrice">{price}</div>
        <div className="productName">{name}</div>
        <div className="productDesc">{description}</div>
        <div className="productUser">Posted by {user}</div>
    </div>
  )
}

export default ProductCard