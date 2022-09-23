import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import {
  FieldErrorsImpl,
  FieldValues,
  UseFormRegister,
  FieldError,
  Merge,
} from "react-hook-form";

interface IInput {
  icon: any;
  placeholder: string;
  type: string;
  register: UseFormRegister<FieldValues>;
  name: string;
  error:
    | string
    | FieldError
    | Merge<FieldError, FieldErrorsImpl<any>>
    | undefined;
}

const CustomInput = ({
  icon,
  placeholder,
  type,
  register,
  name,
  error,
}: IInput) => {
  return (
    <InputGroup style={{ marginBottom: "1rem" }}>
      <InputLeftElement pointerEvents="none" children={icon} />
      <Input
        variant={"flushed"}
        placeholder={placeholder}
        type={type}
        {...register(name)}
        borderColor={"black"}
        fontFamily={"monospace"}
        focusBorderColor={"green.500"}
      />
    </InputGroup>
  );
};

export default CustomInput;
