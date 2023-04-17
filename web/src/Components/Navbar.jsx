import {
  Avatar,
  Box,
  Button,
  Link,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { useAuth } from "../../utils/useAuth";
import "../Styles/navbar.css";
import Autocomplete from "./Search";
import { logout } from "../axios/axios";
import { useState, useEffect } from "react";

const Navbar = () => {
  const { user, loading } = useAuth();
  const [isLoggedin, setIsLoggedin] = useState(false);

  let lgnbtn;
  useEffect(() => {
    if (!loading && user) {
      setIsLoggedin(true);
    }
  }, [user, loading]);

  if (!loading && user && isLoggedin) {
    lgnbtn = (
      <Menu isLazy>
        <MenuButton px={4} py={2} transition="fade 0.4s">
          <Avatar name={user.name} />
        </MenuButton>
        <MenuList>
          <Link href="/profile">
            <MenuItem>Profile</MenuItem>
          </Link>
          <MenuDivider />
          <MenuItem
            onClick={async () => {
              const lt = await logout();
              console.log(lt);
              setIsLoggedin(false);
              // window.location.reload();
            }}
          >
            Logout
          </MenuItem>
        </MenuList>
      </Menu>
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
        <Box as="a" href="/" className="logo">
          <span>Thrift</span>Bazaar
        </Box>
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
