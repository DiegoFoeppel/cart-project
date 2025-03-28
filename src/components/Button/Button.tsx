import { HStack, Button } from "@chakra-ui/react";
import { useState } from "react";

const ButtonExample = () => {
  const [value, setValue] = useState<number>(0);

  const handleLess = () => {
    setValue((prev) => prev - 1);
  };

  const handleMore = () => {
    setValue((prev) => prev + 1);
  };

  return (
    <HStack>
      <Button onClick={handleLess}>-</Button>
      <h1>{value}</h1>
      <Button onClick={handleMore}>+</Button>
    </HStack>
  );
};

export default ButtonExample;
