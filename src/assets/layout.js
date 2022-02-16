import makeStyles from "@mui/styles/makeStyles";
import { fontStyle, fontWeight } from "@mui/system";

const useLayoutsStyles = makeStyles((theme) => ({
  /*** body ***/
  body:{
    backgroundColor: "black"
  },
  /*** Gird ***/
  grid_container: {
    height: "100%",
  },
  /*** Title/subtitle/Paragraphe ***/
  title_white:{
    fontFamily: "linotype-didot, serif",
    fontWeight: "400",
    fontSize: "60px",
    fontStyle: "normal",
    color: "white",
  },
  subtitle_yellow:{
    fontFamily: "museo-sans, sans-serif",
    fontWeight: "100",
    fontSize: "20px",
    fontStyle: "normal",
    color: "#FFE300",
  },
  p_white:{
    fontFamily: "museo-sans, sans-serif",
    fontWeight: "100",
    fontSize: "15px",
    fontStyle: "normal",
    color: "white",
  }
}));

export default useLayoutsStyles;
