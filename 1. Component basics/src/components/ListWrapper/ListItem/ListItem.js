import React from "react";
import PropTypes from "prop-types";
import styles from "./ListItem.module.scss";
import Button from '../../Button/Button';
import Title from '../../Title/Title';

const ListItem = ({ image, name, description, twitterLink }) => (
  <li className={styles.wrapper}>
    <img src={image} className={styles.image} alt={name} />
    <div>
      <Title>{name}</Title>
      <p className={styles.description}>{description}</p>
      <Button href={twitterLink}>visit twitter page</Button>
    </div>
  </li>
);

ListItem.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string,
  twitterLink: PropTypes.string.isRequired,
};

ListItem.defaultProps = {
  description: "One of the React creators",
};

export default ListItem;
