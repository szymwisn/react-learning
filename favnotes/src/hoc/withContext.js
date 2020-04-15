import React from 'react';
import PageContext from 'context';

const withContext = (Component) => {
  return (props) => (
    <PageContext.Consumer>
      {(context) => <Component {...props} pageContext={context} />}
    </PageContext.Consumer>
  );

  //   return function contextComponent(props) {
  //     return (
  //       <PageContext.Consumer>
  //         {(context) => <Component {...props} context={context} />}
  //       </PageContext.Consumer>
  //     );
  //   };
};

export default withContext;
