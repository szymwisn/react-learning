import React from 'react';
import { connect } from 'react-redux';
import { Formik } from 'formik';
import { Redirect } from 'react-router-dom';
import { authenticate as authenticateAction } from 'actions';
import Input from 'components/atoms/Input/Input';
import Button from 'components/atoms/Button/Button';

const LoginPage = ({ authenticate, userID }) => (
  <div>
    <Formik
      initialValues={{ username: '', password: '' }}
      onSubmit={({ username, password }) => {
        authenticate(username, password);
      }}
    >
      {({ values, handleChange, handleBlur, handleSubmit }) => {
        if (userID) {
          return <Redirect to="/notes" />;
        }

        return (
          <form onSubmit={handleSubmit}>
            <Input
              name="username"
              placeholder="username"
              type="text"
              onChange={handleChange}
              value={values.username}
              onBlur={handleBlur}
            />
            <Input
              name="password"
              placeholder="password"
              type="password"
              onChange={handleChange}
              value={values.password}
              onBlur={handleBlur}
            />
            <Button type="submit" color="notes">
              sign in
            </Button>
          </form>
        );
      }}
    </Formik>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  authenticate: (username, password) => dispatch(authenticateAction(username, password)),
});

const mapStateToProps = ({ userID = null }) => ({
  userID,
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
