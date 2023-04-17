import "../Styles/product.css";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PersonIcon from "@mui/icons-material/Person";
import { TimeIcon } from "@chakra-ui/icons";
import { Icon, Flex, Spinner, Text } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getItem, getUser } from "../axios/axios";

const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState("");
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
        console.log(product);
        const getUserData = async () => {
          const userData = await getUser(product.user);
          setUser(userData.name);
        };
        console.log(user);
        getUserData();
      }
  }, [product])
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
          <img src="/assets/shop.jpg" alt="product-img" />
        </div>
        <div className="productRight">
          <div className="productNameContainer">
            <div className="productName">{product.name}</div>
            <div className="productDesc">{product.description}</div>
          </div>
          <div className="buyContainer">
            <div className="productPrice">₹ {product.price}</div>
            <div className="buyButton">
              <Icon as={ShoppingCartIcon} className="buyIcon" />
              BUY NOW
            </div>
          </div>
          <div className="sellerContainer">
            <div className="sellerNameContainer">
              <div className="sellerNameHead">Posted By</div>
              <hr />
              <div className="sellerName">
                <Icon as={PersonIcon} />
                {user}
              </div>
            </div>
            <div className="postedTime">
              <TimeIcon mr={2} />
              14 April 2023 at 12:01 PM
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default Product;
