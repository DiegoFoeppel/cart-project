import { useState, ChangeEvent, useEffect } from "react";

import axios from "axios";
import "./styles.css";
import { Box } from "@chakra-ui/react";
import { CardItem } from "../../components/Card/Card";
import Navbar from "../../components/Navbar/Navbar";
import { Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  return (
    <Box>
      <Navbar />
      <Text
        textStyle="lg"
        fontSize="2xl"
        mt="5"
        m="0 auto"
        display="flex"
        alignContent="start"
        width="1000px"
      >
        Your Cart
      </Text>
    </Box>
  );
};

export default Cart;
