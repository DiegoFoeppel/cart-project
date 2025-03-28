import { Box, Button, Text } from "@chakra-ui/react";
import { FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
  return (
    <Box
      display='flex'
      justifyContent='space-between'
      m='2'
      width='1000px'
      //   bgColor='gray.100'
      alignItems='center'
    >
      <Text textStyle='lg'>MyShop</Text>
      <Button variant='outline' p='2'>
        <FaShoppingCart /> Cart
      </Button>
    </Box>
  );
};

export default Navbar;
