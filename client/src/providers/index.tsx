import { AuthProvider } from "./client/authProvider";
import { RegisterProvider } from "./client/registerProvider";

export const AppProviders = ({ children }: any) => {
  return (
    <AuthProvider>
      <RegisterProvider>{children}</RegisterProvider>;
    </AuthProvider>
  );
};
