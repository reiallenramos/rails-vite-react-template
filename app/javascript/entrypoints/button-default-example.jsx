import React from 'react';
import Button from '@atlaskit/button';
import { setGlobalTheme, useThemeObserver } from "@atlaskit/tokens";

const ButtonDefaultExample = () => {
  const theme = useThemeObserver();
  const nextTheme = theme.colorMode === "dark" ? "light" : "dark";
  const onClick = () =>
    setGlobalTheme({
      colorMode: nextTheme
    });

  return <Button onClick={onClick}>Switch to {nextTheme} mode</Button>;
};

export default ButtonDefaultExample;