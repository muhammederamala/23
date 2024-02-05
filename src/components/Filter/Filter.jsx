import React, { useState } from "react";
import styles from "./Filter.module.css";

function Filter() {
  const [activeItem, setActiveItem] = useState("All Posts");

  const handleItemClick = (item) => {
    setActiveItem(item);
  };

  return (
    <div className={styles["inline-list"]}>
      {["All Posts", "Article", "Event", "Education", "Job"].map((item) => (
        <span
          key={item}
          className={`${styles["inline-item"]} ${
            activeItem === item ? styles["active"] : ""
          }`}
          onClick={() => handleItemClick(item)}
        >
          {item}
        </span>
      ))}
    </div>
  );
}

export default Filter;
