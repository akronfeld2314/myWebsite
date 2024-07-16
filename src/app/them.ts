import { theme, ThemeConfig } from "antd";
import { SeedToken } from "antd/es/theme/internal";

export const primaryColor = '#00b96b';

export const antdTheme: ThemeConfig = {
  algorithm: (seed: SeedToken) => {
    seed.colorPrimary = primaryColor;
    seed.colorLink = primaryColor;
    seed.colorTextBase = primaryColor;
    let darkSeed = theme.darkAlgorithm(seed);
    return darkSeed
  },
}