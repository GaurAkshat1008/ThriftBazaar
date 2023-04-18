import React, { useEffect, useState } from "react";
import { getCart } from "../axios/axios";
import { motion } from "framer-motion";
import { Grid, Box, Flex, Text } from "@chakra-ui/react";
import ProductCard from "./ProductCard";
import { useAuth } from "../../utils/useAuth";

export const Cart = () => {
  const [cart, setCart] = useState([]);
  const { user, loading } = useAuth();
  useEffect(() => {
    const getCartData = async () => {
      const cartData = await getCart();
      setCart(cartData);
    };
    getCartData();
  }, []);
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };
  let body;
  if (!loading && user) {
    if (cart.length === 0) {
      body = (
        <Flex h={'30vh'} justifyContent={'center'} alignItems={'center'}>
          <Text fontSize={'3xl'}>Your cart is empty...</Text>
        </Flex>
      )
    } else {
      body = (
        <Grid
          m={"3rem auto"}
          as={motion.ul}
          variants={container}
          initial="hidden"
          animate="visible"
          p={8}
          gap={6}
          w={"90%"}
          listStyleType="none"
          templateColumns={"repeat(auto-fit, minmax(200px, 1fr))"}
          mb={"10rem"}
        >
          {cart.map((item, key) => {
            return (
              <a href={`/item/${item._id}`}>
                <ProductCard
                  key={key}
                  name={item.name}
                  price={item.price}
                  description={item.description}
                  imgUrls={item.imgUrls}
                  user={item.user}
                  onClick={() => setSelectedId(item._id)}
                />
              </a>
            );
          })}
        </Grid>
      );
    }
  }
  return (
    <>
      <Box>{body}</Box>
    </>
  );
};
