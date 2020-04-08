import React from 'react';
import GridTemplate from 'templates/GridTemplate';
import Card from 'components/molecules/Card/Card';

const notes = [
  {
    title: 'a',
    content: 'b',
    created: '10 days',
  },
  {
    title: 'b',
    content: 'b',
    created: '10 days',
  },
  {
    title: 'c',
    content: 'b',
    created: '10 days',
  },
  {
    title: 'd',
    content: 'b',
    created: '10 days',
  },
  {
    title: 'e',
    content: 'b',
    created: '10 days',
  },
];

const Notes = () => (
  <GridTemplate pageType="notes">
    {notes.map((item) => (
      <Card
        id={item.title}
        cardType="notes"
        title={item.title}
        content={item.content}
        created={item.created}
        key={item.title}
      />
    ))}
  </GridTemplate>
);
export default Notes;
