import { useHistory } from "react-router-dom";
import { Button } from "@chakra-ui/react";

const CustomButton = ({ text, path }) => {
  const history = useHistory();

  const handleClick = () => {
    return history.push(path);
  };

  return (
    <Button
      bgColor={"green.500"}
      color={"white"}
      width={"30vw"}
      maxWidth={"150px"}
      fontFamily={"monospace"}
      fontSize={"14px"}
      onClick={() => handleClick()}
    >
      {text}
    </Button>
  );
};

export default CustomButton;
