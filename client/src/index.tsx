import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";
import { AppProviders } from "./providers";
import { theme } from "./styles/theme";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <BrowserRouter>
    <React.StrictMode>
      <AppProviders>
        <ChakraProvider theme={theme}>
          <App />
        </ChakraProvider>
      </AppProviders>
    </React.StrictMode>
  </BrowserRouter>
);
