import Draw from "../../assets/images/undraw_people_search_re_5rre.svg";
import CustomInput from "../../components/Input/input";

import { Text, Button } from "@chakra-ui/react";
import {
  Box,
  BoxButton,
  Container,
  Content,
  Form,
  FullName,
  Link,
} from "./styles";
import { FiMail, FiPhone, FiSmartphone, FiKey, FiUser } from "react-icons/fi";

import { Redirect } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "../../schema/schema";

import { useRegisterClient } from "../../providers/client/registerProvider";
import { useAuth } from "../../providers/client/authProvider";

const SignUp = () => {
  const { authenticated } = useAuth();
  const { setRegisterValues } = useRegisterClient();

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const submitData = (data: any) => {
    setRegisterValues(data);
  };

  if (authenticated) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <Container>
      <Box>
        <img src={Draw} alt="imagem" />
      </Box>
      <Content>
        <Text
          fontSize={"2xl"}
          as={"mark"}
          bgColor={"green.700"}
          marginBottom={"2rem"}
          width={"100vw"}
          maxWidth={"150px"}
          textAlign={"center"}
          fontFamily={"monospace"}
        >
          cadastro
        </Text>
        <Form onSubmit={handleSubmit(submitData)}>
          <FullName>
            <CustomInput
              name="name"
              register={register}
              icon={<FiUser />}
              placeholder={"nome"}
              type={"text"}
              error={errors.name?.message}
            />
            <CustomInput
              name="lastname"
              register={register}
              icon={<FiUser />}
              placeholder={"sobrenome"}
              type={"text"}
              error={errors.lastname?.message}
            />
          </FullName>
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
          <CustomInput
            name="phone"
            register={register}
            icon={<FiPhone />}
            placeholder={"telefone"}
            type={"tel"}
            error={errors.phone?.message}
          />
          <CustomInput
            name="cellphone"
            register={register}
            icon={<FiSmartphone />}
            placeholder={"celular"}
            type={"tel"}
            error={errors.cellphone?.message}
          />

          <BoxButton>
            <Button
              width={"150px"}
              type="submit"
              bgColor={"black"}
              color={"white"}
              fontWeight={"light"}
              fontFamily={"monospace"}
            >
              cadastrar
            </Button>
          </BoxButton>
        </Form>
        <Text as={"i"} fontSize={"sm"} marginTop={"1rem"}>
          Já tem uma conta?
          <Link href={"/signin"} target={"_self"}>
            Faça login
          </Link>
        </Text>
      </Content>
    </Container>
  );
};

export default SignUp;
