export interface ITheme {
  palette: {
    darkPrimary: string;
    primary: string;
    midPrimary: string;
    lightPrimary: string;
    black: string;
    white: string;
    bg: string;
    accent: string;
  };
  spacing: {
    unit: number;
  };
}

const mainTheme = {
  palette: {
    darkPrimary: "#FF8515",
    primary: "#FA9F4B",
    white: "#FFFFFF"
  },
  spacing: {
    unit: 8
  }
};

const earthy = {
  pallete: {
    primary: "#e2ccb5",
    darkPrimary: "#704228",
    midPrimary: "#e5a795",
    lightPrimary: "#f4ece4",
    bg: "#2b1809",
    accent: "#abad74"
  },
  spacing: {
    unit: 4
  }
};

export default earthy;
