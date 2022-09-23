import { useState, createContext, useContext } from "react";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";

import { IClient } from "../../interfaces";

import { api } from "../../services/data-source";

interface IRegisterContext {
  registerData: IClient | {};
  setRegisterValues: (data: IClient) => void;
}

const defaultValue = {
  registerData: {},
  setRegisterValues: (data: IClient) => {},
};

const RegisterContext = createContext<IRegisterContext>(defaultValue);

export const RegisterProvider = ({ children }: any) => {
  const [registerData, setRegisterData] = useState({});

  const history = useHistory();

  const setRegisterValues = (data: IClient) => {
    setRegisterData({ ...data });

    api
      .post("/clients", registerData)
      .then((_) => {
        toast.success("Você foi cadastradx com sucesso");
        history.push("/signin");
      })
      .catch((err) => {
        toast.error("Ops! Algo deu errado");
      });
  };

  return (
    <RegisterContext.Provider value={{ registerData, setRegisterValues }}>
      {children}
    </RegisterContext.Provider>
  );
};

export const useRegisterClient = () => useContext(RegisterContext);
