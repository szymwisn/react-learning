import React from "react";
import PropTypes from "prop-types";
import styles from "./ListItem.module.scss";
import Button from '../../Button/Button';
import Title from '../../Title/Title';

const ListItem = ({ image, title, description, link }) => (
  <li className={styles.wrapper}>
    {image &&
      <img
        src={image}
        className={styles.image}
        alt={title}
      />
    }
    <div>
      <Title>{title}</Title>
      <p className={styles.description}>{description}</p>
      {link &&
        <Button href={link}>visit twitter page</Button>
      }
    </div>
  </li>
);

ListItem.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string,
  link: PropTypes.string,
  description: PropTypes.string.isRequired,
};

ListItem.defaultProps = {
  image: null,
  description: null,
};

export default ListItem;
