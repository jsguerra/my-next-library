import Link from "next/link";
import Styles from "./Pagination.module.css";

type PaginationProps = {
  pages: number[];
};

const Pagination: React.FC<PaginationProps> = ({ pages }) => {
  return (
    <nav className={Styles.pagination}>
      <ul>
        {pages.length > 5 && (
          <li>
            <Link className={Styles.previous} href={"/"}>
              <span className="sr-only">Previous</span>
              <svg
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 1 1 5l4 4"
                />
              </svg>
            </Link>
          </li>
        )}
        {pages.length > 0 &&
          pages.map((page, i) => (
            <li key={i}>
              <Link href={`/?page=${page}`}>{page}</Link>
            </li>
          ))}
        <li>
          <Link className={Styles.next} href={"/"}>
            <span className="sr-only">Next</span>
            <svg
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 9 4-4-4-4"
              />
            </svg>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
