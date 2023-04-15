import '../Styles/productCards.css'
import ProductCard from './ProductCard';
import { getItems } from '../axios/axios'
import { useEffect, useState } from 'react';

const ProductCards = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        async function items() {
            const res = await getItems();
            setData(res)
        }
        items()
    }, [])
    // console.log(data)
    return (
        <div className='productCards'>
            {
                data.map((item, key) => {
                    return (
                        <a href={`/item/${item._id}`}>
                            <ProductCard
                                key={key}
                                name={item.name}
                                price={item.price}
                                description={item.description}
                                imgUrls={item.imgUrls}
                                user={item.user}
                            />
                        </a>
                    )
                })
            }
        </div>
    )
}

export default ProductCards