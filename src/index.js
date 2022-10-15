import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
// styles
import "./assets/styles/index.scss";
// components
import Layout from "./components/Layout";
// mui stuff
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Container } from "@mui/system";
const theme = createTheme({
  typography: {
    fontFamily: ["M PLUS Rounded 1c", "sans-serif"].join(","),
    fontSize: 15,
    fontWeightRegular: 400,
    fontWeightBold: 700,
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ThemeProvider theme={theme}>
    <Layout>
      <Container maxWidth="md">
        <App />
      </Container>
    </Layout>
  </ThemeProvider>
);