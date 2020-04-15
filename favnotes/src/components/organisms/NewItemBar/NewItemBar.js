import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Heading from 'components/atoms/Heading/Heading';
import Input from 'components/atoms/Input/Input';
import Button from 'components/atoms/Button/Button';
import withContext from 'hoc/withContext';

const StyledWrapper = styled.div`
  border-left: 10px solid ${({ theme, color }) => theme[color]};
  z-index: 9999;
  position: fixed;
  right: 0;
  top: 0;
  height: 100vh;
  width: 680px;
  background-color: white;
  display: flex;
  flex-direction: column;
  padding: 100px 90px;
  box-shadow: -5px 0 15px rgba(0, 0, 0, 0.1);
`;

const StyledInput = styled(Input)`
  margin-bottom: 20px;
`;

const StyledTextArea = styled(Input)`
  border-radius: 10px;
  margin-bottom: 40px;
  height: 300px;
`;

const NewItemBar = ({ pageContext }) => (
  <StyledWrapper color={pageContext}>
    <Heading big>Create new {pageContext}</Heading>
    <StyledInput placeholder={pageContext === 'twitters' ? 'account name' : 'title'} />
    {pageContext === 'articles' ? <StyledInput placeholder="link" /> : null}
    <StyledTextArea as="textarea" placeholder="Description" />
    <Button color={pageContext}>Add {pageContext}</Button>
  </StyledWrapper>
);

export default withContext(NewItemBar);
