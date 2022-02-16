import { Grid, Typography } from "@mui/material";
import React, { FunctionComponent } from "react";
import useLayoutsStyles from "src/assets/layout";

interface Props {
  subtitle: string;
  title: string;
}

const TitleSection: FunctionComponent<Props> = ({ subtitle, title }) => {
  const styles = useLayoutsStyles();

  return (
    <Grid container className={styles.grid_container}>
      <Grid item sm={12}>
        <Typography className={styles.subtitle_yellow}>{subtitle}</Typography>
        <Typography className={styles.title_white}>{title}</Typography>
      </Grid>
    </Grid>
  );
};
export default TitleSection;
