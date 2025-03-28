import { ChangeEventHandler } from "react";
import { Input } from "@chakra-ui/react";

interface PrimaryInputProps {
  name: string;
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
}

const PrimaryInput = ({ name, value, onChange }: PrimaryInputProps) => {
  return (
    <Input
      variant='flushed'
      placeholder='filled'
      name={name}
      value={value}
      onChange={onChange}
    />
  );
};
export default PrimaryInput;
