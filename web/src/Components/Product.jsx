import "../Styles/product.css";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PersonIcon from "@mui/icons-material/Person";
import { TimeIcon, DeleteIcon } from "@chakra-ui/icons";
import { Icon, Flex, Spinner, Text, Button, Box } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getItem, getUser, addToCart, deleteItem } from "../axios/axios";
import { useAuth } from "../../utils/useAuth";

const Product = () => {
  const { id } = useParams();
  const auth = useAuth();
  // console.log(auth.user)
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState({});
  useEffect(() => {
    const getProduct = async () => {
      const productData = await getItem(id);
      setProduct(productData);
      setTimeout(() => {
        setLoading(false);
      }, 1500);
    };
    getProduct();
  }, []);
  useEffect(() => {
    if (product._id) {
      // console.log(product.user);
      const getUserData = async () => {
        const userData = await getUser(product.user);
        setUser(userData);
      };
      getUserData();
    }
  }, [product]);

  if (loading) {
    return (
      <Flex h={"70vh"} justifyContent={"center"} alignItems={"center"}>
        <Spinner size={"xl"} thickness="5px" speed="0.65s" color="button" />
      </Flex>
    );
  } else if (!loading && product.error) {
    return (
      <Flex h={"70vh"} justifyContent={"center"} alignItems={"center"}>
        <Text fontSize={"3xl"}>No product found...</Text>
      </Flex>
    );
  } else {
    return (
      <div className="productContainer">
        <div className="productLeft">
          <img src={product.imgUrls} alt="product-img" />
        </div>
        <div className="productRight">
          <div className="productNameContainer">
            <Flex justifyContent={"space-between"} alignItems={"center"}>
              <Box fontSize={"2rem"} fontFamily={"monte"} fontWeight={"bolder"}>
                {product.name}
              </Box>
              {auth.user && auth.user._id === product.user && (
                // <DeleteIcon as={Button} fontSize={"1.5rem"} color={"red.800"} />
                <Button colorScheme="gray" onClick={async () => {
                  const response = await deleteItem(id);
                  console.log(response);
                  window.location.href = "/"
                }}>
                  <DeleteIcon fontSize={"1.5rem"} color={"red.800"} />
                </Button>
              )}
            </Flex>
            {/* <div className="productName">{product.name}</div> */}
            <div className="productDesc">{product.description}</div>
          </div>
          <div className="buyContainer">
            <div className="productPrice">₹ {product.price}</div>
            <Button
              w={"100%"}
              h={"60px"}
              bg={"button"}
              p={8}
              fontSize={"1.25rem"}
              color={"whitesmoke"}
              onClick={async () => {
                const response = await addToCart(id);
                if(response){
                  window.location.href = "/cart"
                }
                console.log(response);
              }}
            >
              <Icon
                as={ShoppingCartIcon}
                className="buyIcon"
                fontSize={"1.5rem"}
              />
              BUY NOW
            </Button>
          </div>
          <div className="sellerContainer">
            <div className="sellerNameContainer">
              <div className="sellerNameHead">Posted By</div>
              <hr />
              <div className="sellerName">
                <Icon as={PersonIcon} color={"button"} />
                {/* <PersonIcon /> */}
                {user.name}
              </div>
            </div>
            <div className="postedTime">
              <TimeIcon mr={2} color={"button"} />
              14 April 2023 at 12:01 PM
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default Product;
