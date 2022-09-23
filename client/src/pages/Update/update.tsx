import Draw from "../../assets/images/undraw_people_search_re_5rre.svg";

import CustomInput from "../../components/Input/input";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "../../schema/schema";

import { Text } from "@chakra-ui/react";
import { Box, Container, Content, Form, FullName } from "../SignUp/styles";
import { FiMail, FiPhone, FiSmartphone, FiKey, FiUser } from "react-icons/fi";

const Update = () => {
  const {
    handleSubmit,
    register,
    formState: { errors, isValid },
  } = useForm({ resolver: yupResolver(schema) });

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
          width={"200vw"}
          maxWidth={"300px"}
          textAlign={"center"}
        >
          Atualize sua conta
        </Text>
        <Form>
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
        </Form>
      </Content>
    </Container>
  );
};

export default Update;
