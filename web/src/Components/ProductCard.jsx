// import '../Styles/productCard.css';
import { GridItem, Divider, Image } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { Card, CardHeader, CardBody, CardFooter, Stack, Heading, Button, Text } from "@chakra-ui/react";

const ProductCard = ({
  id,
  name,
  price,
  description,
  imgUrls,
  user,
  onClick,
  onClickbtn,
  btnVal,
}) => {
  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };
  return (
    <GridItem
      as={motion.li}
      variants={item}
      maxW={'300px'}
      h="400"
      bg={"blackAlpha.400"}
      p={4}
      borderRadius={8}
      cursor="pointer"
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
    >
      {/* <Image src={imgUrls} className="productCardImg" alt="product-img" mb={4} w={400} bgPosition={'center'}/>
      <Divider />
      <Divider />
      <Divider />
      <Divider />
      <Divider mb={4}/>
      <div className="productCardPrice">₹ {price}</div>
      <div className="productCardName">{name}</div>
      <div className="productCardDesc">{description}</div>
      <div className="productCardUser">Posted by {user}</div> */}
      <Card maxW="sm" minH={'100%'} >
        <CardBody>
          <Image
            src={imgUrls}
            alt=""
            borderRadius="lg"
          />
          <Stack mt="6" spacing="3">
            <Heading size="md">{name}</Heading>
            <Text>
              {description}
            </Text>
            <Text color="blue.600" fontSize="2xl">
              {price}
            </Text>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
            <Button variant="solid" colorScheme="blue" onClick={onClickbtn}>
              {btnVal}
            </Button>
        </CardFooter>
      </Card>
    </GridItem>
  );
};

export default ProductCard;
