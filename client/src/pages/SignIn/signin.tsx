import Draw from "../../assets/images/undraw_people_search_re_5rre.svg";
import CustomInput from "../../components/Input/input";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "../../schema/schema";

import { Text, Button } from "@chakra-ui/react";
import {
  Box,
  BoxButton,
  Container,
  Content,
  Form,
  Link,
} from "../SignUp/styles";
import { FiMail, FiKey } from "react-icons/fi";

const SignIn = () => {
  const {
    handleSubmit,
    register,
    formState: { errors, isValid },
  } = useForm({ resolver: yupResolver(schema) });

  return (
    <Container>
      <Content>
        <Text
          fontSize={"2xl"}
          as={"mark"}
          bgColor={"green.700"}
          marginBottom={"2rem"}
          width={"100vw"}
          maxWidth={"100px"}
          textAlign={"center"}
          fontFamily={"monospace"}
        >
          login
        </Text>
        <Form>
          <CustomInput
            name="email"
            register={register}
            icon={<FiMail />}
            placeholder={"email"}
            type={"email"}
            error={errors.email?.message}
          />
          <CustomInput
            name="password"
            register={register}
            icon={<FiKey />}
            placeholder={"senha"}
            type={"password"}
            error={errors.password?.message}
          />

          <BoxButton>
            <Button
              width={"150px"}
              isDisabled={!isValid}
              type="submit"
              bgColor={"black"}
              fontWeight={"light"}
              fontFamily={"monospace"}
            >
              logar
            </Button>
          </BoxButton>
        </Form>
        <Text as={"i"} fontSize={"sm"} marginTop={"1rem"}>
          Ainda não tem uma conta?
          <Link href={"/signup"} target={"_self"}>
            Faça seu cadastro
          </Link>
        </Text>
      </Content>
      <Box>
        <img src={Draw} alt="imagem" />
      </Box>
    </Container>
  );
};

export default SignIn;
