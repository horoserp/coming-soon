import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import "./index.css";
import App from "./App";

// Remove default background color in theme
const theme = extendTheme({
  styles: {
    global: () => ({
      body: {
        bg: "",
      },
    }),
  },
});

<BrowserRouter>
  <Routes>
    <Route path="/coming-soon" element={<App />}>
      <Route index element={<App />} />
    </Route>
  </Routes>
</BrowserRouter>;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ChakraProvider theme={theme}>
    <App />
  </ChakraProvider>
);
