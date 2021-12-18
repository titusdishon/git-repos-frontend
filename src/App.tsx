import React from "react";
import ThemeProvider from "./theme/ThemeProvider";
import CssBaseline from "@mui/material/CssBaseline";
import MainPage from "./components/MainPage";

function App() {
  return (
    <ThemeProvider>
      <CssBaseline />
      <MainPage />
    </ThemeProvider>
  );
}

export default App;
