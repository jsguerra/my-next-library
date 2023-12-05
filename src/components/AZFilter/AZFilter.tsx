import React from "react";
import Link from "next/link";
import { AuthorType } from "../forms/BookForm/BookForm";
import Styles from "./AZFilter.module.css";

interface AZFilterProps {
  rootPath: string;
}

const AZFilter: React.FC<AZFilterProps> = ({ rootPath }) => {
  const alphabet: string[] = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z',
  ];

  return (
    <div className={Styles.filter}>
      <Link href={`/${rootPath}/`} className="badge">
        View All
      </Link>
      {alphabet.sort().map((item) => (
        <Link className="badge" key={item} href={`/${rootPath}/?filter=${item}`}>
          {item}
        </Link>
      ))}
    </div>
  );
};

export default AZFilter;
