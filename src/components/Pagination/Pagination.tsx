import Link from "next/link";
import Styles from "./Pagination.module.css";

interface PaginationProps {
  page: number;
  pages: number;
}

const Pagination: React.FC<PaginationProps> = ({ page, pages }) => {
  const buttons = [];

  for (let i = 1; i <= pages; i++) {
    if (
      i === page ||
      i === page + 1 ||
      i === page + 2 ||
      i === page + 3 ||
      i === page + 4
    ) {
      buttons.push(
        <li key={`page-${i + 1}`}>
          <Link className={`${i === page ? Styles.active : ''}`} href={`/?page=${i}`}>{i}</Link>
        </li>
      );
    }
  }

  return (
    <nav className={Styles.pagination}>
      <ul>
        <li>
          <Link
            className={Styles.previous}
            href={`/?page=${page === 1 ? page : page - 1}`}
          >
            <span className="sr-only">Previous</span>
            <svg
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 1 1 5l4 4"
              />
            </svg>
          </Link>
        </li>
        {buttons}
        <li>
          <Link
            className={Styles.next}
            href={`/?page=${page >= pages ? page : page + 1}`}
          >
            <span className="sr-only">Next</span>
            <svg
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
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
