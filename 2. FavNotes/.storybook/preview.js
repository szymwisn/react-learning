import React from 'react';
import { addDecorator } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import { theme } from 'theme/MainTheme';
import StoryRouter from 'storybook-react-router';

addDecorator((story) => <ThemeProvider theme={theme}>{story()}</ThemeProvider>);

addDecorator(StoryRouter());
