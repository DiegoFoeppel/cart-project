import { Button } from "@chakra-ui/react";
import { MouseEventHandler } from "react";
import { RiSearch2Line } from "react-icons/ri";
impot { CartIco}

type SearchButtonProps = {
  onClick: MouseEventHandler;
};

const ButtonExample = ({ onClick }: SearchButtonProps) => {
  return (
    <Button onClick={onClick}>
      <RiSearch2Line />{" "}
    </Button>
  );
};

export default ButtonExample;
