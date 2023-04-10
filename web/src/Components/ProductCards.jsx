import '../Styles/productCards.css'
import ProductCard from './ProductCard';
import { getItems }  from '../axios/axios'
import { useEffect, useState } from 'react';

const ProductCards = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        async function items(){
            const res = await getItems();
            setData(res)
        }
        items()
    }, [])
    // console.log(data)
    return ( 
        <div className='productCards'>
            <div className="productCardsWrapper">
                {   
                    data.map((item, key) => {
                        return (<ProductCard id={item._id} />)
                    })

                }
            </div>
        </div>
    )
}

export default ProductCards