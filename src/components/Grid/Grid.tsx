"use client";

import React, { useState } from "react";
import styles from "./Grid.module.css";

type GridProps = {
  gridColToggle?: boolean;
  children: React.ReactNode;
};

export default function Grid({ gridColToggle = false, children }: GridProps) {
  const [numOfCol, setNumOfCol] = useState(5);
  const colNums = [5, 4, 3, 2, 1];

  return (
    <div className={styles.parent}>
      {gridColToggle && (
        <div className={styles["grid-btn-container"]}>
          <span>Toggle Grid Columns: </span>
          {colNums.map((btn) => (
            <button
              className="btn"
              key={`btn-${btn}`}
              onClick={() => setNumOfCol(btn)}
              type="button"
            >
              {btn}
            </button>
          ))}
        </div>
      )}
      <div className={`${styles.grid} ${styles[`columns-${numOfCol}`]}`}>
        {children}
      </div>
    </div>
  );
}
