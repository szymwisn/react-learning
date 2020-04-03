import React from "react";
import styles from "./Form.module.scss";
import Input from './Input/Input';
import Button from '../Button/Button';
import Title from '../Title/Title';

const Form = ({ submitFn }) => (
  <div className={styles.wrapper}>
    <Title>Add new twitter account</Title>
    <form className={styles.form} onSubmit={submitFn}>
      <Input
        name='name'
        label='Name'
      />
      <Input
        name='link'
        label='Twitter link'
      />
      <Input
        name='image'
        label='Image'
      />
      <Input
        tag='textarea'
        name='description'
        label='Description'
        maxLength={120}
      />
      <Button>add new item</Button>
    </form>
  </div>
);

export default Form;
