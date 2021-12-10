interface Colors {
  light100: string;
  light300: string;
  light200: string;
  dark300: string;
  dark400: string;
  dark600: string;
  dark700: string;
  dark800: string;
  dark900: string;
  red100: string;
  red200: string;
  blue400: string;
  blue500: string;
  lightGreen100: string;
}
/* Default colors */
const colors: Colors = {
  light100: "#ffffff",
  light200: "#F3F3F3",
  light300: "#E5E5E5 ",
  dark300: "#58595b",
  dark400: "#424B5A",
  dark600: "#252932",
  dark700: "#363636",
  dark800: "#050D1D",
  dark900: "#0D0D0D",
  red100: "#E11837",
  red200: "#B30E27",
  lightGreen100: "#A5BB29",
  blue400: "#0479CD",
  blue500: "#046ab4",
} as const;
export const designVariables = {
  transition: "all .3s ease-out",
  palette: { ...colors },
};
