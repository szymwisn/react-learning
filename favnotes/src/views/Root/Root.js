import React from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "theme/GlobalStyle";
import Button from "components/atoms/Button/Button";
import { theme } from "theme/MainTheme";

const Root = () => (
  <div>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <>
        <h1>Hello</h1>
        <Button>Close / Save</Button>
        <Button secondary>Remove</Button>
      </>
    </ThemeProvider>
  </div>
);

export default Root;
