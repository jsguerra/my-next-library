import React from "react";
import styles from "./Grid.module.css";

type GridProps = {
  numOfCol: string;
  children: React.ReactNode;
};

export default function Grid({ numOfCol, children }: GridProps) {
  return (
    <div className={`${styles.grid} ${styles[`columns-${numOfCol}`]}`}>
      {children}
    </div>
  );
}
