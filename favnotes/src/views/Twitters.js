import React from 'react';
import UserPageTemplate from 'templates/UserPageTemplate';
import Card from 'components/molecules/Card/Card';

const twitters = [
  {
    title: 'a',
    content: 'b',
    twitterName: 'dan_abramov',
    created: '10 days',
  },
];

const Twitters = () => (
  <UserPageTemplate pageType="twitter">
    {twitters.map((item) => (
      <Card
        cardType="twitter"
        title={item.title}
        content={item.content}
        twitterName={item.twitterName}
        created={item.created}
        key={item.title}
      />
    ))}
  </UserPageTemplate>
);
export default Twitters;
