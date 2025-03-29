import { ChakraProvider, defaultSystem } from "@chakra-ui/react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";

function App() {
  return (
    <ChakraProvider value={defaultSystem}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        {/* Add more routes here */}
      </Routes>
    </ChakraProvider>
  );
}

export default App;
