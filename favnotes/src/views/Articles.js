import React from 'react';
import GridTemplate from 'templates/GridTemplate';
import Card from 'components/molecules/Card/Card';

const articles = [
  {
    title: 'a',
    content: 'b',
    articleUrl: 'url',
    created: '10 days',
  },
];

const Articles = () => (
  <GridTemplate pageType="articles">
    {articles.map((item) => (
      <Card
        id={item.title}
        cardType="articles"
        title={item.title}
        content={item.content}
        articleUrl={item.articleUrl}
        created={item.created}
        key={item.title}
      />
    ))}
  </GridTemplate>
);

export default Articles;
