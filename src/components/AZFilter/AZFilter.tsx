import React from "react";
import Link from "next/link";
import { AuthorType } from "../forms/BookForm/BookForm";
import Styles from "./AZFilter.module.css";

interface AZFilterProps {
  authorName: AuthorType[];
}

const AZFilter: React.FC<AZFilterProps> = ({ authorName = [] }) => {
  const allLetters: string[] = [];

  authorName.map((author) => allLetters.push(author.name.charAt(0)));

  const allButtons = [...new Set(allLetters)];

  return (
    <div className={Styles.filter}>
      <button className="btn" type="button">
        View All
      </button>
      {allButtons.sort().map((item) => (
        <button className="btn" key={item} type="button" value={item}>
          {item}
        </button>
      ))}
    </div>
  );
};

export default AZFilter;
