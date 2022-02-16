import { Grid, Typography } from "@mui/material";
import { FunctionComponent } from "react";
import { TitleSection } from "src/components";
import useLayoutsStyles from "../../assets/layout";

const AboutMe: FunctionComponent = () => {
  const styles = useLayoutsStyles();

  return (
    <Grid container className={styles.grid_container}>
      <Grid item sm={4}>
        
      </Grid>
      <Grid item sm={8}>
          <Grid container>
            <Grid item sm={12}>
            <TitleSection subtitle="Découvrir" title="A propos de moi"></TitleSection>
            </Grid>
            <Grid item sm={12}>
            <Typography variant="body1" gutterBottom className={styles.p_white}>
                body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
                neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
                quasi quidem quibusdam.
            </Typography>
            </Grid>
          </Grid>
      </Grid>
    </Grid>
  );
};
export default AboutMe;
