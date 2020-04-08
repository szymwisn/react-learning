import React from 'react';
import Card from 'components/molecules/Card/Card';

export default {
  title: 'Molecules/Card',
  component: Card,
};

export const Default = () => <Card />;

export const Twitter = () => <Card cardType="twitters" />;

export const Article = () => <Card cardType="articles" />;

export const Note = () => <Card cardType="notes" />;
