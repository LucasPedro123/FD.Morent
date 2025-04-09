import { GlobalStyle } from "./assets/style/global.style";
import theme from "./assets/style/theme.style";
import { ThemeProvider } from "styled-components";
import { Router } from "./route";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router />
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
