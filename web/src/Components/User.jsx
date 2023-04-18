import { EmailIcon, TimeIcon } from "@chakra-ui/icons";
import {
  Avatar,
  Box,
  Divider,
  Flex,
  Skeleton,
  SkeletonCircle,
  Spinner,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useAuth } from "../../utils/useAuth";
import "../Styles/user.css";
import { Cart } from "./Cart";
import ProductCards from "./ProductCards";

const User = () => {
  const { user, loading } = useAuth();
  const [pagePending, setPagePending] = useState(true);
  const [userPending, setUserPending] = useState(true);
  let userDetails;
  useEffect(() => {
    setTimeout(() => {
      setPagePending(false);
    }, 1000);
    setTimeout(() => {
      setUserPending(false);
    }, 1500);
  }, []);
  if (loading || pagePending) {
    return (
      <Flex h={"70vh"} justifyContent={"center"} alignItems={"center"}>
        <Spinner size={"xl"} thickness="5px" speed="0.65s" color="button" />
      </Flex>
    );
  }
  if (userPending) {
    userDetails = (
      <Flex h={"40%"} w={"95vw"} flexDir={"row"} m={4}>
        <Flex
          justifyContent={"center"}
          flex={0.1}
          bgColor={"white"}
          p={2}
          borderRadius={"xl"}
          mr={8}
        >
          <SkeletonCircle size="150" />
        </Flex>
        <Box
          flex={1}
          bgColor={"white"}
          w={"100%"}
          justifyContent={"center"}
          alignItems={"center"}
          borderRadius={"xl"}
          p={4}
        >
          <Skeleton height="40px" mr={2} ml={2} mt={4} mb={4} />
          <Skeleton height="20px" m={2} />
          <Skeleton height="20px" m={2} />
        </Box>
      </Flex>
    );
  }
  if (!user && !loading && !pagePending && !userPending) {
    window.location.href = "/signin";
  } else if (user && !loading && !pagePending && !userPending) {
    userDetails = (
      <div className="userTop">
        <div className="userImg">
          <Avatar name={user.name} size="2xl" />
        </div>
        <div className="userDetails">
          <div className="userName">{user.name}</div>
          <div className="userEmail">
            <EmailIcon mr={2} color={"button"} />
            {user.email}
          </div>
          <div className="userTime">
            <TimeIcon mr={2} color={"button"} />
            Member Since {user.createdAt.slice(0, 10)}
          </div>
        </div>
      </div>
    );
  }
  return (
    <Box p={2} bg={"#f5f5f5"}>
      {userDetails}
      <Divider />
      <Divider />
      <Divider />
      <Divider />
      <Divider />
      <Tabs variant={"enclosed-colored"} size={"lg"} isFitted isManual isLazy>
        <TabList mb={4}>
          <Tab>Posted Ads</Tab>
          <Tab>Cart</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <ProductCards />
          </TabPanel>
          <TabPanel>
            <Cart />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};

export default User;
