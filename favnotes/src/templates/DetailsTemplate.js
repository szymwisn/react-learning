import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import UserPageTemplate from 'templates/UserPageTemplate';

const DetailsTemplate = ({ children, pageType }) => (
  <UserPageTemplate pageType={pageType}>
    <>
      {children}
      <Link to="/">go back</Link>
    </>
  </UserPageTemplate>
);

DetailsTemplate.propTypes = {
  children: PropTypes.element.isRequired,
  pageType: PropTypes.oneOf(['notes', 'articles', 'twitters']),
};

DetailsTemplate.defaultProps = {
  pageType: 'notes',
};

export default DetailsTemplate;
