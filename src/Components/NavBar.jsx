import { Box, Button, Center, Flex, Text, Input } from "@chakra-ui/react";
import {
  FaBeer,
  FaBox,
  FaPlaystation,
  FaSearch,
  FaSearchDollar,
  FaSearchPlus,
} from "react-icons/fa";
import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <Box display={"flex"} justifyContent={"space-between"}>
      <Flex justify={"center"} gap={"2"}>
        <Button>
          <FaPlaystation size={"xs"} />
        </Button>
        <Text>Games</Text>
        <Text>PS5</Text>
        <Text>PS4</Text>
        <Text>Services</Text>
        <Text>Accessories</Text>
        <Text>News</Text>
        <Text>Store</Text>
        <Text>Support</Text>
      </Flex>
      <Flex>
        <Button colorScheme="blue" borderRadius={"15"}>
          <Link to={"/login"}> Sign in</Link>
        </Button>
        <Input w={"5%"}></Input>
        <FaSearch />
      </Flex>
    </Box>
  );
};

export default NavBar;
