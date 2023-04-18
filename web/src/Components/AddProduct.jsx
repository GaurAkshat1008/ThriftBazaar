import "../Styles/addProduct.css";
import { Form, Formik } from "formik";
import { InputField } from "./InputField";
import { Box, Button, Flex, Text } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useAuth } from "../../utils/useAuth";
import { addItem } from "../axios/axios";
import { toErrorMap } from "../../utils/toErrorMap";

const AddProduct = () => {
  const { user, loading } = useAuth();
  useEffect(() => {
    if (!loading && !user) {
      console.log("not logged in");
      window.location.href = "/signin";
    }
  }, [loading]);

  const [images, setImages] = useState([]);
  const [imgUrls, setImageUrl] = useState("");
  const updloadImages = async (files) => {
    console.log(files[0]);
    const formData = new FormData();
    formData.append("file", files[0]);
    formData.append("upload_preset", "etolo2cg");
    const response = await axios.post(
      import.meta.env.VITE_CLOUDINARY_URL,
      formData
    );
    // console.log(response.data.url);
    setImageUrl(response.data.url);
  };
  return (
    <Flex minH={"70vh"} fontFamily={"monte"} justifyContent={"center"} mb={4}>
      <Box>
        <Formik
          initialValues={{
            name: "",
            price: 0,
            description: "",
          }}
          onSubmit={async (values, { setErrors }) => {
            updloadImages(images);
            if(imgUrls !== ""){
                console.log(imgUrls)
                const response = await addItem(values.name, values.price, imgUrls, values.description);
                if (response.errors) {
                    setErrors(toErrorMap(response.errors));
                }
            }
          }}
        >
          {(props) => (
            <Form>
              {/* <h1>Sign in</h1> */}
              <Text fontSize="2xl" fontWeight="bold" color="black" mb="10px">
                Add Item
              </Text>
              <Box mt={4}>
                <InputField
                  name="name"
                  type="text"
                  placeholder="Name"
                  label="Name"
                  w={"400px"}
                  required={true}
                />
              </Box>
              <Box mt={4}>
                <InputField
                  name="price"
                  type="number"
                  placeholder="Price"
                  label="Price"
                  w={"400px"}
                  required={true}
                />
              </Box>
              <Box mt={4}>
                <InputField
                  name="description"
                  type="text"
                  textarea={true}
                  placeholder="Description"
                  label="Description"
                  w={"400px"}
                  required={true}
                />
              </Box>
              <Box mt={4}>
                <InputField
                  name="image"
                  type="file"
                  placeholder="Image"
                  label="Image"
                  w={"400px"}
                  multiple={true}
                  onChange={(e) => {
                    setImages(e.target.files);
                  }}
                />
              </Box>
              <Button
                type="submit"
                backgroundColor={"button"}
                isLoading={props.isSubmitting}
                mt={4}
              >
                Add Item
              </Button>
            </Form>
          )}
        </Formik>
      </Box>
    </Flex>
    // <div className='addProductContainer'>
    //     <div className="sellProductHead">Sell a product</div>
    //     <form action="" className="addProductForm">
    //         <div className="addProductItem">
    //             <div className="addProductHead">
    //                 Add Product Images
    //             </div>
    //             <input type="file" id="files" name="files" multiple />
    //         </div>
    //         {/* Input image here */}

    //         <div className="addProductItem">
    //             <div className="addProductHead">
    //                 Product Name
    //             </div>
    //             <input type="text" placeholder="Enter Item Name" />
    //         </div>

    //         <div className="addProductItem">
    //             <div className="addProductHead">
    //                 Product Price

    //             </div>
    //             <input type="number" placeholder="Enter Item Price" />
    //         </div>

    //         <div className="addProductItem">
    //             <div className="addProductHead">

    //                 Item Description
    //             </div>
    //             <textarea type="text" placeholder="Enter Item Description" />
    //         </div>

    //         <button className="addProductBtn">ADD PRODUCT</button>
    //     </form>
    // </div>
  );
};

export default AddProduct;
