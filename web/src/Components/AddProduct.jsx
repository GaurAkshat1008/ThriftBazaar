import '../Styles/addProduct.css'

const AddProduct = () => {
    return (
        <div className='addProductContainer'>
            <div className="sellProductHead">Sell a product</div>
            <form action="" className="addProductForm">
                <div className="addProductItem">
                    <div className="addProductHead">
                        Add Product Images
                    </div>
                    <input type="file" id="files" name="files" multiple />
                </div>
                {/* Input image here */}

                <div className="addProductItem">
                    <div className="addProductHead">
                        Product Name
                    </div>
                    <input type="text" placeholder="Enter Item Name" />
                </div>

                <div className="addProductItem">
                    <div className="addProductHead">
                        Product Price

                    </div>
                    <input type="number" placeholder="Enter Item Price" />
                </div>

                <div className="addProductItem">
                    <div className="addProductHead">

                        Item Description
                    </div>
                    <textarea type="text" placeholder="Enter Item Description" />
                </div>

                <button className="addProductBtn">ADD PRODUCT</button>
            </form>
        </div>
    )
}

export default AddProduct