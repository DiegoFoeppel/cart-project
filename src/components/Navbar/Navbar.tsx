import { Box, Button, Text } from "@chakra-ui/react";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      m="0 auto"
      mt="2"
      width="1000px"
      //   bgColor='gray.100'
      alignItems="center"
      alignContent="center"
    >
      <Text textStyle="lg">MyShop</Text>
      <Link to="/cart">
        <Button variant="outline" p="2">
          <FaShoppingCart /> Cart
        </Button>
      </Link>
    </Box>
  );
};

export default Navbar;
