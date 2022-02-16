import { StyledEngineProvider } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import React from "react";
import ReactDOM from "react-dom";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import "src/index.css";
import { Home } from "./pages";

const theme = createTheme({
  palette: {
    primary: {
      main: "#ffc300",
    },
    secondary: {
      main: "#003566",
    },
    success: {
      main: "#003566",
    },
  },
});

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <StyledEngineProvider injectFirst>
      <div
        style={{ height: "100vh", display: "flex", flexDirection: "column" }}
      >
        <Router>
          <Routes>
            {/*indexRoutes.map(({ path, component, exact, type }, key) => (
                                    <AuthRoute path={path} exact={exact} component={component} key={key} type={type} />
                                ))*/}
            <Route path="/" element={<Home />} />
          </Routes>
        </Router>
      </div>
    </StyledEngineProvider>
  </ThemeProvider>,
  document.getElementById("root")
);
