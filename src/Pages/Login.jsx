import React, { useState } from "react";
import { Box, Button, Image, Input, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const initialFormData = {
  email: "",
  password: "",
};

const Login = () => {
  const navigate = useNavigate();
  const [isEmail, setIsEmail] = useState(true);
  const [formData, setFormData] = useState(initialFormData);
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleNext = () => {
    if (isEmail) {
      setIsEmail(false);
    } else {
      if (formData.email) {
        setIsLoading(true);
        setTimeout(() => {
          alert("Login Success");
          setFormData(initialFormData);
          setIsLoading(false);
          navigate("/");
        }, 2000);
      }
    }
  };

  const { email, password } = formData;

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
      <Box w="45vh">
        <Box bg="black" display="flex" h="3rem" position="relative">
          <Box m="auto">
            <Image
              w="6rem"
              justifySelf="center"
              src="https://my.account.sony.com/central/signin/c9b433609b383b6d7147ab7a2f0dcff63b47f87f/assets/images/sony_logo.png"
            />
          </Box>
          <Box position="absolute" right="0.5rem" top="0.25rem">
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
        <Box>
          <Image src="https://my.account.sony.com/central/signin/c9b433609b383b6d7147ab7a2f0dcff63b47f87f/assets/images/logo_playstation.png" />
        </Box>
        <Box bg="white" p="1.5rem">
          <Text fontSize="11" fontWeight="400" textAlign="left">
            Sign in to PlayStation with one of your Sony accounts
          </Text>
          <Text
            color="blue"
            textAlign="left"
            marginBottom="5"
            fontSize="sm"
            fontWeight="400"
          >
            Learn More
          </Text>
          <Text textAlign={"left"} m={"1.5"}>
            {isEmail ? "" : `${email}`}
          </Text>
          <Input
            borderRadius="0"
            placeholder={isEmail ? "Sign-In (Email Address)" : "Enter Password"}
            marginBottom="4"
            fontWeight="400"
            h="2rem"
            name={isEmail ? "email" : "password"}
            value={isEmail ? email : password}
            onChange={handleInputChange}
          />
          <Button
            borderRadius="0"
            h="2rem"
            w="100%"
            m="auto"
            bgColor="rgb(197,209,242)"
            color="white"
            marginBottom="5"
            fontWeight="400"
            onClick={handleNext}
            isDisabled={isEmail && !formData.email}
            isLoading={isLoading}
          >
            {isEmail ? "Next" : "Submit"}
          </Button>
          <Text
            color="blue"
            fontWeight="400"
            textAlign="left"
            marginLeft="1"
            marginBottom="6"
            fontSize="sm"
          >
            Trouble Signing In?
          </Text>
          <Button
            size="sm"
            colorScheme="white"
            borderRadius="0"
            fontSize="sm"
            w="100%"
            fontWeight="400"
            color="black"
            border="0.5px solid grey"
            marginBottom="100"
            onClick={() => navigate("/signup")}
          >
            Create New Account
          </Button>
          <Text fontSize="sm" color="gray" fontWeight="400">
            Help/Site Map
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default Login;
