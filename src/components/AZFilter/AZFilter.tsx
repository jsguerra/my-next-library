import React from "react";
import { AuthorType } from "../forms/BookForm/BookForm";
import Styles from "./AZFilter.module.css";

interface AZFilterProps {
  authorName: AuthorType[];
}

const AZFilter: React.FC<AZFilterProps> = ({ authorName = [] }) => {
  const allLetters = [];

  authorName.map(author => allLetters.push(author.name.charAt(0)))

  return <div className={Styles.filter}>AZFilter</div>;
};

export default AZFilter;
