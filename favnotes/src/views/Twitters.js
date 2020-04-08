import React from 'react';
import GridTemplate from 'templates/GridTemplate';
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
  <GridTemplate pageType="twitters">
    {twitters.map((item) => (
      <Card
        id={item.title}
        cardType="twitters"
        title={item.title}
        content={item.content}
        twitterName={item.twitterName}
        created={item.created}
        key={item.title}
      />
    ))}
  </GridTemplate>
);
export default Twitters;
