import React from 'react';
import Button from 'components/atoms/Button/Button';
// eslint-disable-next-line import/no-unresolved
// eslint-disable-next-line import/no-extraneous-dependencies
import { withKnobs, select } from '@storybook/addon-knobs';

export default {
  title: 'Atoms/Button',
  component: Button,
  decorators: [withKnobs],
};

export const Primary = () => {
  const label = 'Colors';
  const options = {
    Primary: 'hsl(49, 100%, 58%)',
    Secondary: 'hsl(196, 83%, 75%)',
    Tertiary: 'hsl(106, 47%, 64%)',
  };
  const defaultValue = 'hsl(49, 100%, 58%)';
  const groupId = 'GROUP-ID1';

  const value = select(label, options, defaultValue, groupId);
  return <Button color={value}>Primary</Button>;
};

export const Secondary = () => <Button secondary>Secondary</Button>;
