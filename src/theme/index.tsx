import React from "react";
import {ThemeProvider} from "@emotion/react";
import {Types} from "@/types/themes/theme";
import themes from "./themes";
interface Props {
  children: JSX.Element;
}

export default function Theme({children}: Props) {
  const theme = "dark";

  const getThemes = (theme: Types) => {
    const currentTheme = themes[theme] || themes.dark;
    return currentTheme;
  };

  return <ThemeProvider theme={getThemes(theme)}>{children}</ThemeProvider>;
}
