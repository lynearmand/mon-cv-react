import { Grid, Typography } from "@mui/material";
import { FunctionComponent } from "react";
import { TitleSection } from "src/components";
import useLayoutsStyles from "../../assets/layout";

const Home: FunctionComponent = () => {
  const styles = useLayoutsStyles();

  return (
    <Grid container className={styles.grid_container}>
      <TitleSection subtitle="Bonjour" title="Test"></TitleSection>
    </Grid>
  );
};
export default Home;
