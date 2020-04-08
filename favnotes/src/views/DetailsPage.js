import React from 'react';
import PropTypes from 'prop-types';
import DetailsTemplate from 'templates/DetailsTemplate';
import { routes } from '../routes';

class DetailsPage extends React.Component {
  state = {
    pageType: 'notes',
  };

  componentDidMount() {
    const { match } = this.props;

    switch (match.path) {
      case routes.note:
        this.setState({ pageType: 'notes' });
        break;
      case routes.twitter:
        this.setState({ pageType: 'twitters' });
        break;
      case routes.article:
        this.setState({ pageType: 'articles' });
        break;
      default:
        this.setState({ pageType: 'notes' });
    }
  }

  render() {
    const { pageType } = this.state;

    return (
      <DetailsTemplate pageType={pageType}>
        <>
          <p>{pageType}</p>
        </>
      </DetailsTemplate>
    );
  }
}

DetailsPage.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.node,
    }).isRequired,
  }).isRequired,
};

export default DetailsPage;
