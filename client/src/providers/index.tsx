import { RegisterProvider } from "./client/registerProvider";

export const AppProviders = ({ children }: any) => {
  return <RegisterProvider>{children}</RegisterProvider>;
};
