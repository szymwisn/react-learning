import React from 'react';
import styles from './Modal.module.scss';
import Form from '../Form/Form';
import Button from '../Button/Button';

const Modal = ({ closeModalFn }) => (
    <div className={styles.wrapper}>
        <Button secondary onClick={closeModalFn}>x</Button>
        <Form></Form>
    </div>
);

export default Modal;