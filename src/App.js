// mui stuff
import { Grid } from "@mui/material";
// components
import Posts from "./components/Posts";

const App = () => {
  return (
    <Grid container display="flex" justifyContent="center">
      <Posts />
      <Posts />
      <Posts />
    </Grid>
  );
};

export default App;
