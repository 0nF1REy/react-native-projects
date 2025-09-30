import "styled-components/native";
import { Theme } from "./app/constants/theme";

declare module "styled-components/native" {
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  export interface DefaultTheme extends Theme {}
}
