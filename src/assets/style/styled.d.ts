import "styled-components";
import { ThemeInterface } from "../../interface/interface.web";

declare module "styled-components" {
  export interface DefaultTheme extends ThemeInterface {}
}
