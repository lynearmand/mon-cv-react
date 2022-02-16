import { Grid } from "@mui/material";
import { FunctionComponent } from "react";
import { AboutMe } from "src/components";
import useLayoutsStyles from "../../assets/layout";

const Home: FunctionComponent = () => {
  const styles = useLayoutsStyles();

  return (
    <Grid container className={styles.grid_container}>
      <Grid item  sm={12}>
        <AboutMe/>
      </Grid>
    </Grid>
  );
};
export default Home;
