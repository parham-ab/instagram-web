import React, { useState, useEffect } from "react";
// components
import Posts from "./components/Posts";
// mui stuff
import { Grid } from "@mui/material";

const App = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      fetchMoreData();
    }
  };

  const fetchMoreData = () => {
    const newItems = [];
    setItems((prevItems) => [...prevItems, newItems]);
  };

  return (
    <Grid container display="flex" justifyContent="center">
      <Posts />
      <Posts />
      <Posts />
      {items.map((item, i) => (
        <Posts key={i} item={item} />
      ))}
      {/* preloader */}
      {loading && <h2>Loading...</h2>}
    </Grid>
  );
};

export default App;
