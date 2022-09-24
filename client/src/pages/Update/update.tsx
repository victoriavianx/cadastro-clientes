import Draw from "../../assets/images/undraw_people_search_re_5rre.svg";
import CustomInput from "../../components/Input/input";

import { useAuth } from "../../providers/client/authProvider";
import { getClient, getToken } from "../../utils";
import { api } from "../../services/data-source";
import { toast } from "react-toastify";

import { Redirect, useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "../../schema/schema";

import { Text, Button } from "@chakra-ui/react";
import { Box, Container, Content, Form, FullName } from "../SignUp/styles";
import { FiMail, FiPhone, FiSmartphone, FiKey, FiUser } from "react-icons/fi";

const clientId = JSON.parse(getClient);

const token = JSON.parse(getToken);

const Update = () => {
  const { authenticated } = useAuth();
  const history = useHistory();

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  if (!authenticated) {
    return <Redirect to="/" />;
  }

  const submitData = (data: any) => {
    api
      .patch(`/clients/${clientId}`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        toast.success("Contato atualizado");
      })
      .catch((err) => console.log(err));
  };

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

          <Button type="submit" bgColor={"green.500"} color={"white"} mr={3}>
            Adicionar
          </Button>
          <Button variant="ghost" onClick={() => history.push("/dashboard")}>
            Cancelar
          </Button>
        </Form>
      </Content>
    </Container>
  );
};

export default Update;
