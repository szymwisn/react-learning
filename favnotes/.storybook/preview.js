import React from 'react';
import { addDecorator } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import { theme } from 'theme/MainTheme';

addDecorator((story) => {
  return <ThemeProvider theme={theme}>{story()}</ThemeProvider>;
});
