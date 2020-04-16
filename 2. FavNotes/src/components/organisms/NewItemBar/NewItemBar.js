import React from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Heading from 'components/atoms/Heading/Heading';
import Input from 'components/atoms/Input/Input';
import Button from 'components/atoms/Button/Button';
import withContext from 'hoc/withContext';
import { addItem as addItemAction } from 'actions';
import { Formik } from 'formik';

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

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
`;

const NewItemBar = ({ pageContext, addItem, handleClose }) => (
  <StyledWrapper color={pageContext}>
    <Heading big>Create new {pageContext}</Heading>
    <Formik
      initialValues={{ title: '', content: '', articleUrl: '', created: '', twitterName: '' }}
      onSubmit={(values) => {
        addItem(pageContext, values);
        handleClose();
      }}
    >
      {({ values, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
        <StyledForm as="form" onSubmit={handleSubmit}>
          <StyledInput
            placeholder={pageContext === 'twitters' ? 'account name' : 'title'}
            type="text"
            name="title"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
          />
          {pageContext === 'twitters' && (
            <StyledInput
              placeholder="Twitter name"
              type="text"
              name="twitterName"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
            />
          )}
          {pageContext === 'articles' && (
            <StyledInput
              placeholder="link"
              type="text"
              name="articleUrl"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
            />
          )}
          <StyledTextArea
            as="textarea"
            placeholder="Description"
            type="text"
            name="content"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
          />
          <Button type="submit" color={pageContext} disabled={isSubmitting}>
            Add {pageContext}
          </Button>{' '}
        </StyledForm>
      )}
    </Formik>
  </StyledWrapper>
);

const mapDispatchToProps = (dispatch) => ({
  addItem: (itemType, itemContent) => dispatch(addItemAction(itemType, itemContent)),
});

export default connect(null, mapDispatchToProps)(withContext(NewItemBar));
