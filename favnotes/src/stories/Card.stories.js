import React from 'react';
import Card from 'components/molecules/Card/Card';

export default {
  title: 'Molecules/Card',
  component: Card,
};

export const White = () => <Card />;

export const Twitter = () => <Card cardType="twitter" />;

export const Article = () => <Card cardType="article" />;

export const Note = () => <Card cardType="note" />;
