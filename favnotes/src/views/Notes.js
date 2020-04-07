import React from 'react';
import UserPageTemplate from 'templates/UserPageTemplate';
import Card from 'components/molecules/Card/Card';

const notes = [
  {
    title: 'a',
    content: 'b',
    created: '10 days',
  },
];

const Notes = () => (
  <UserPageTemplate pageType="note">
    {notes.map((item) => (
      <Card
        cardType="note"
        title={item.title}
        content={item.content}
        created={item.created}
        key={item.title}
      />
    ))}
  </UserPageTemplate>
);
export default Notes;
