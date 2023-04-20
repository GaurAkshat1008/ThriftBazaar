// import '../Styles/productCards.css'
import ProductCard from "./ProductCard";
import { getItemsByUser } from "../axios/axios";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Grid, Box } from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";

const ProductCards = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function items() {
      const res = await getItemsByUser();
      setData(res);
    }
    items();
  }, []);
  const [selectedId, setSelectedId] = useState("");
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };
  return (
    <Box>
      <Grid
        as={motion.ul}
        variants={container}
        initial="hidden"
        animate="visible"
        m={"3rem auto"}
        pr={"10rem"}
        gap={6}
        w={"90%"}
        listStyleType="none"
        templateColumns={"repeat(auto-fit, minmax(200px, 1fr))"}
        mb={"10rem"}
      >
        {data.map((item, key) => {
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
                onClickbtn={() => console.log("clicked")}
                btnVal={<DeleteIcon  color={'red.800'} fontSize={'1rem'}/>}
              />
            </a>
          );
        })}
      </Grid>
    </Box>
  );
};

export default ProductCards;
