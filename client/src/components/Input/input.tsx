import { InputGroup, InputLeftElement } from "@chakra-ui/react";
import {
  FieldErrorsImpl,
  FieldValues,
  UseFormRegister,
  FieldError,
  Merge,
} from "react-hook-form";
import { InputCustom } from "./styles";

interface IInput {
  icon: any;
  placeholder: string | undefined;
  type: string;
  register: UseFormRegister<FieldValues>;
  name: string;
  defaultValue?: string;
  error?:
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
  defaultValue,
  error,
}: IInput) => {
  return (
    <InputGroup style={{ marginBottom: "1rem" }}>
      <InputLeftElement pointerEvents="none" children={icon} />
      <InputCustom
        variant={"flushed"}
        placeholder={placeholder}
        defaultValue={defaultValue}
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
