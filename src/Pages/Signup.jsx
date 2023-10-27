import { Box, Button, Image, LinkBox, Text } from "@chakra-ui/react";
import React from "react";
import { Link, useNavigate, useNavigationType } from "react-router-dom";
import { FaBeer, FaCircle, FaUser, FaUserCircle } from "react-icons/fa";
const Signup = () => {
  const navigate = useNavigationType();
  const handleNext = () => {};
  return (
    <Box
      backgroundImage="url('https://my.account.sony.com/central/signin/c9b433609b383b6d7147ab7a2f0dcff63b47f87f/assets/images/wallpaper.jpg')"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      h="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Box w="45vh" background={"white"}>
        <Box bg="black" display="flex" h="3rem">
          <Box m="auto">
            <Image
              w="6rem"
              justifySelf="center"
              src="https://my.account.sony.com/central/signin/c9b433609b383b6d7147ab7a2f0dcff63b47f87f/assets/images/sony_logo.png"
            />
          </Box>
          <Box>
            <Button
              colorScheme="white"
              color="grey"
              fontSize="xl"
              fontWeight="500"
              onClick={() => navigate("/")}
            >
              X
            </Button>
          </Box>
        </Box>
        <Box
          background={"white"}
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"center"}
          alignItems={"center"}
          p={"8"}
          pb={"0"}
          m={"10"}
          mt={"8rem"}
        >
          <Text fontWeight={"400"} fontSize={"m"}>
            Create an Account
          </Text>
          <Image
            width={"6rem"}
            m={"5"}
            src="https://id.sonyentertainmentnetwork.com/id/create_account_ca/435efccc77205cfbc0aa503c7436fd855dc13be6/assets/images/image_create_account.png"
          />
          <Button
            borderRadius="0"
            h="2rem"
            w="100%"
            m="auto"
            bgColor="rgb(49,81,170)"
            color="rgb(229,233,238)"
            marginBottom="5"
            fontWeight="400"
            onClick={handleNext}
          >
            Create
          </Button>
          <Text
            textAlign="left"
            marginBottom={"100"}
            fontSize="sm"
            fontWeight="400"
          >
            Already have an account? <Link to={"/login"}>Sign In</Link>
          </Text>
        </Box>
        <Text fontSize="xs" color="gray" fontWeight="400">
          Help/Site Map
        </Text>
      </Box>
    </Box>
  );
};

export default Signup;
