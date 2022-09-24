import { createContext, useContext, useState } from "react";
import { IFullClient } from "../../interfaces";
import { api } from "../../services/data-source";
import { getToken } from "../../utils";

interface IClient {
  clients: Array<IFullClient>;
  clientData: () => void;
}

const defaultValue = {
  clients: [],
  clientData: () => {},
};

export const ClientContext = createContext<IClient>(defaultValue);

export const ClientProvider = ({ children }: any) => {
  const [clients, setClients] = useState([]);

  const token = JSON.parse(getToken);

  const clientData = () => {
    api
      .get("/clients", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        const { data } = response;

        setClients(data);
      });
  };

  return (
    <ClientContext.Provider value={{ clients, clientData }}>
      {children}
    </ClientContext.Provider>
  );
};

export const useClient = () => useContext(ClientContext);
