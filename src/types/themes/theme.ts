export interface ThemeTypes {
  dark: object;
  light: object;
}

export interface ColorsType {
  background: string;
  text: string;
  primary: string;
  headerText: string;
}

export interface ThemeProps {
  theme?: ColorsType;
}

export type Types = "dark" | "light";
