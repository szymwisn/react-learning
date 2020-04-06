import React from "react";
import ListItem from "./ListItem/ListItem";
import styles from "./List.module.scss";

const List = ({ items }) => (
  <>
    {items.length ?
      <ul className={styles.wrapper}>
        {items.map(item => (
          <ListItem key={item.title} {...item} />
        ))}
      </ul>
      : <p className={styles.noItems}>Add your first element</p>}
  </>
);

export default List;
