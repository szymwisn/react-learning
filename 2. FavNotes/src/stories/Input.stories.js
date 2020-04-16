import React from 'react';
import Input from 'components/atoms/Input/Input';

export default {
  title: 'Atoms/Input',
  component: Input,
};

export const Normal = () => <Input placeholder="Default input" />;

export const Search = () => <Input placeholder="search" search />;
