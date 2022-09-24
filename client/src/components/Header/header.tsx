import { useAuth } from "../../providers/client/authProvider";
import { useHistory } from "react-router-dom";

import { Heading, Button } from "@chakra-ui/react";
import { FiArrowRightCircle } from "react-icons/fi";
import { Container } from "./styles";
import MenuProfile from "../Menu/menu";

const Header = () => {
  const { setAuthenticated } = useAuth();
  const history = useHistory();

  const handleClick = () => {
    localStorage.clear();

    setAuthenticated(false);

    return history.push("/signin");
  };

  return (
    <Container>
      <Heading fontSize={"28px"} marginRight={"2rem"}>
        Contacte
      </Heading>
      <div>
        <MenuProfile />
        <Button
          variant={"solid"}
          rightIcon={<FiArrowRightCircle />}
          fontSize={"16px"}
          fontWeight={"thin"}
          fontStyle={"italic"}
          marginLeft={"1rem"}
          onClick={handleClick}
        >
          Sair
        </Button>
      </div>
    </Container>
  );
};

export default Header;
