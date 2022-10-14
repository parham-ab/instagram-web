import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
// styles
import "./assets/styles/index.scss";
// components
import Layout from "./components/Layout";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Layout>
    <App />
  </Layout>
);