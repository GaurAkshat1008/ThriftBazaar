import { useEffect, useState } from "react";
import { searchItems } from "../axios/axios";
import { Flex, Text, Spinner, Grid } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import ProductCard from "./ProductCard";
import { motion } from "framer-motion";

export const SearchResults = () => {
  const { query } = useParams();
  const [loading, setLoading] = useState(true);
  const [items, setItems] = useState([]);
  useEffect(() => {
    const getItems = async () => {
      const items = await searchItems(query);
      setItems(items);
      setTimeout(() => {
        setLoading(false);
      }, 1500);
    };
    getItems();
  }, []);
  console.log(items.length);
  let body;
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration:0.5,
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };
  if (loading) {
    return (
      <Flex h={"70vh"} justifyContent={"center"} alignItems={"center"}>
        <Spinner size={"xl"} thickness="5px" speed="0.65s" color="button" />
      </Flex>
    );
  } else if (!loading && items.length === 0) {
    body = (
      <Flex justifyContent={"center"} alignItems={"center"} w={"100%"}>
        <Text fontSize={"3xl"}>No items match your search...</Text>
      </Flex>
    );
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
        {items.map((item, key) => {
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
  return (
    <Flex w={"100%"} minH={"70vh"} flexDir={"column"} p={4}>
      <Flex flexDir={"row"} justifyContent={"space-between"}>
        <Text fontSize={"xl"} color={"button"} fontWeight={"bold"}>
          Search results for {query}{" "}
        </Text>
        <Text>{items.length} items matched your search</Text>
      </Flex>
      {body}
    </Flex>
  );
};
