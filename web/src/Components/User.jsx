import "../Styles/user.css";
import ScheduleIcon from "@mui/icons-material/Schedule";
import ProductCards from "./ProductCards";
import {
  Flex,
  Icon,
  Spinner,
  Skeleton,
  SkeletonCircle,
  Box,
  Avatar,
  Divider,
} from "@chakra-ui/react";
import { EmailIcon, TimeIcon } from "@chakra-ui/icons";
import { useAuth } from "../../utils/useAuth";
import { useEffect, useState } from "react";

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
      <Flex width={'100%'} flexDir={'column'} justifyContent={'center'} alignItems={'center'}>
        {user.type === "seller" ? (
            <Box fontSize={'3xl'} mb={4} >Posted Ads</Box>
        ) : (
            <Box fontSize={'3xl'} mb={4} >Saved Ads</Box>
        )}
        <ProductCards />
      </Flex>
    </Box>
  );
};

export default User;
