import { useColorMode, useThemeContext } from '@docusaurus/theme-common';

export default function useColor() {
  const { isDarkTheme } = useColorMode();
  return {
    textColor: isDarkTheme ? 'white' : 'black', // 动态文本颜色
  };
}
