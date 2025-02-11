import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import "./index.css";
import App from "./App";

<BrowserRouter>
  <Routes>
    <Route path="/coming-soon" element={<App />}>
      <Route index element={<App />} />
    </Route>
  </Routes>
</BrowserRouter>;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ChakraProvider>
    <App />
  </ChakraProvider>
);
