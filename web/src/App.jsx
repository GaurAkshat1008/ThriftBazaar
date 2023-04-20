import Autocomplete from "./Components/Search";
import ProductCards from "./Components/ProductCards";
import Product from "./Components/Product";
import User from "./Components/User";
import ForgotPassword from "./Components/ForgotPassword";
// import SignUp from "./Components/SignUp"
import "./Styles/App.css";
import AddProduct from "./Components/AddProduct";
import { EmailSent } from "./Components/EmailSent";
import { ChangePassword } from "./Components/ChangePassword";
import { Cart } from "./Components/Cart";
import { Box, Code, Flex, Heading, Image, Text } from "@chakra-ui/react";

function App() {
  return (
    <Flex
      backgroundImage={"/vite.svg"}
      backgroundPosition={"center"}
      backgroundRepeat={"no-repeat"}
      backgroundSize={"cover"}
    >
      <Flex
        minH={"70vh"}
        flexDir={"row"}
        justifyContent={"center"}
        className="App"
        p={8}
        m={"auto"}
        w={"70vw"}
      >
        <Flex flex={0.6} m={8} flexDir={"column"}>
          <Code
            w={"fit-content"}
            colorScheme={"telegram"}
            borderRadius={"sm"}
            mb={4}
          >
            A simple App
          </Code>
          <Heading fontSize={"4rem"} ml={8} m={4}>
            ThriftBazaar
          </Heading>
          <Box background={'linear-gradient(to bottom, #FF69B4, #00ADB5)'} bgClip={'text'}>
            <Text mt={12} ml={12} fontSize={"2rem"} fontWeight={'bold'}>
              One man's garbage
            </Text>{" "}
            <Text ml={16} fontSize={"2rem"} fontWeight={'bold'}>
              {" "}
              is another man's treasure
            </Text>
          </Box>
        </Flex>
        <Flex flex={0.4}>
          <Box display={"block"} boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px"}>
            <Image
              src={"/assets/hero.jpg"}
              alt="asd"
              position={"relative"}
              w={"100%"}
            />
            <Image
              src={
                "https://www.daysoftheyear.com/wp-content/uploads/thrift-shop-day1-scaled.jpg"
              }
              alt="asd"
              pos={"absolute"}
              w={"30%"}
              top={"50%"}
              left={"50%"}
              borderRadius={"2xl"}
            />
          </Box>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default App;
