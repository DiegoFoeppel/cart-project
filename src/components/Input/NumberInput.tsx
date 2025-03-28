import { ChangeEventHandler } from "react";
import { Input } from "@chakra-ui/react";

interface NumberInputProps {
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
}

const PrimaryInput = ({ value, onChange }: NumberInputProps) => {
  return (
    <Input
      variant='outline'
      placeholder='Produto Id'
      value={value}
      onChange={onChange}
      py='4'
      px='4'
      m='2'
    />
  );
};
export default PrimaryInput;
