import { Box, Button, Flex, Image, Link, Text } from "@chakra-ui/react";
import React from "react";
import { motion, isValidMotionProp } from "framer-motion";
import { useRef } from "react";

export const EmailSent = () => {
  return (
    <Flex h={"100vh"} justifyContent={"center"}>
      <Flex
        backgroundColor={"blackAlpha.200"}
        h={500}
        w={750}
        mt={50}
        borderRadius={"2xl"}
        direction={"column"}
        justifyContent={"center"}
        alignItems={"center"}
        boxShadow={"lg"}
      >
        <Box
          as={motion.div}
          initial={{ y: 1000, x: -1000, scale: 0.1, opacity: 0.2 }}
          animate={{
            opacity: 1,
            y: 0,
            x: 0,
            scale: 1,
            transition: {
              duration: 1,
              type: "spring",
              stiffness: 100,
              damping: 20,
            },
          }}
        >
          <Image src="/assets/plane.svg" w={"15vw"} />
        </Box>
        <Text fontSize={"2xl"}>Update link is on the way!</Text>
        <Text>
          for security reasons we have sent an email that contains a link to
          update your password
        </Text>
        <Link href="/" as={Button} colorScheme={"teal"} color={"teal.700"}>
          Back to home
        </Link>
        {/* <Button colorScheme="teal">Back to home</Button> */}
      </Flex>
    </Flex>
  );
};
