import Draw from "../../assets/images/undraw_people_search_re_5rre.svg";
import CustomInput from "../../components/Input/input";

import { api } from "../../services/data-source";
import jwt from "jwt-decode";

import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "../../schema/schema";

import { toast } from "react-toastify";
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
import { useAuth } from "../../providers/client/authProvider";

const SignIn = () => {
  const { setAuthenticated } = useAuth();
  const history = useHistory();

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({ resolver: yupResolver(loginSchema) });

  const submitData = (data: any) => {
    api
      .post("/login", data)
      .then((response) => {
        const token = response.data.accessToken;

        const client = jwt(token);

        localStorage.setItem("@Contacte:token", JSON.stringify(token));

        localStorage.setItem("@Contacte:client", JSON.stringify(client));

        setAuthenticated(true);

        history.push("/dashboard");
      })
      .catch((err) => {
        toast.error("Email ou senha inválidos");
      });
  };

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
        <Form onSubmit={handleSubmit(submitData)}>
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
              type="submit"
              width={"150px"}
              bgColor={"black"}
              color={"white"}
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
