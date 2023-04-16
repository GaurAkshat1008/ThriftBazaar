import {
  Avatar,
  AvatarBadge,
  AvatarGroup,
  Wrap,
  WrapItem,
  Button,
  Link,
} from "@chakra-ui/react";
import "../Styles/navbar.css";
import Autocomplete from "./Search";
import { useEffect } from "react";
import { useAuth } from "../../utils/useAuth";

const Navbar = () => {
  const { user, loading } = useAuth();
  console.log("user: ", user, loading);

  let lgnbtn;

  if (!loading && user) {
    lgnbtn = (
      <Link href="/profile">
        <Avatar name={user.name} />
      </Link>
    );
  } else {
    lgnbtn = (
      <a href="/signin">
        <Button p={"0 40px"} mr={4} borderRadius={"3xl"}>
          Login
        </Button>
      </a>
    );
  }

  return (
    <div className="navbar">
      <div className="navbarWrapper">
        <div className="logo">
          <span>Thrift</span>Bazaar
        </div>
        <div className="search">
          <Autocomplete />
        </div>
        <Button p={"0 40px"} mr={4} borderRadius={"3xl"}>
          + SELL
        </Button>
        {lgnbtn}
      </div>
    </div>
  );
};

export default Navbar;
