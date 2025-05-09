import { Color } from "@/constants/token/color";

export type VariantColorType = keyof typeof Color.light &
  keyof typeof Color.dark;

export type ThemeColorType = "light" | "dark";
