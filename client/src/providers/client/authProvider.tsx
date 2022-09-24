import { createContext, useContext, useState } from "react";

interface IAuth {
  authenticated: boolean;
  setAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
}

const defaultValue = {
  authenticated: false,
  setAuthenticated: () => true,
};

export const AuthContext = createContext<IAuth>(defaultValue);

export const AuthProvider = ({ children }: any) => {
  const [authenticated, setAuthenticated] = useState(false);

  return (
    <AuthContext.Provider value={{ authenticated, setAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
