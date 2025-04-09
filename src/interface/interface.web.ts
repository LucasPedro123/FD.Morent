export interface ThemeInterface {
  colors: {
    background: string;
    black: string;
    white: string;
    gray: string;
    information: {
      dark900: string;
      dark800: string;
      dark700: string;
      dark600: string;
      default: string;
      light500: string;
      light400: string;
      light300: string;
      light200: string;
      light100: string;
    };
    primary: {
      dark900: string;
      dark800: string;
      dark700: string;
      dark600: string;
      default: string;
      light500: string;
      light400: string;
      light300: string;
      light200: string;
      light100: string;
    };
    sucess: {
      dark900: string;
      dark800: string;
      dark700: string;
      dark600: string;
      default: string;
    };
    error: {
      dark900: string;
      default: string;
    };
    warning: {
      dark900: string;
      default: string;
    };
    secondary: {
      dark900: string;
      dark800: string;
      dark700: string;
      dark600: string;
      default: string;
      light500: string;
      light400: string;
      light300: string;
      light200: string;
      light100: string;
    };
  };
  fontSize: {
    regular: Record<
      `type@${12 | 14 | 16 | 18 | 20 | 24 | 32 | 36 | 40 | 72}`,
      string
    >;
    medium: Record<
      `type@${12 | 14 | 16 | 18 | 20 | 24 | 32 | 36 | 40 | 72}`,
      string
    >;
    semibold: Record<
      `type@${12 | 14 | 16 | 18 | 20 | 24 | 32 | 36 | 40 | 72}`,
      string
    >;
    bold: Record<
      `type@${12 | 14 | 16 | 18 | 20 | 24 | 32 | 36 | 40 | 72}`,
      string
    >;
  };
}
