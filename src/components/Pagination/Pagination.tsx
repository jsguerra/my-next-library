import Link from "next/link";
import Styles from "./Pagination.module.css";

interface PaginationProps {
  page: number;
  pages: number;
  slug?: string;
}

const Pagination: React.FC<PaginationProps> = ({ page, pages, slug }) => {
  const pathName = slug ? slug : "/";
  const buttons = [];

  const maxButtons = 5; // Set the maximum number of buttons to display

  let startPage = 1;
  let endPage = Math.min(pages, maxButtons); // Ensure the range doesn't exceed the total number of pages

  if (page > pages - maxButtons) {
    // If the current page is close to the end, adjust the range
    startPage = Math.max(1, pages - maxButtons + 1);
    endPage = pages;
  } else {
    // Otherwise, calculate the range based on the current page
    startPage = Math.max(1, page - Math.floor(maxButtons / 2));
    endPage = Math.min(pages, startPage + maxButtons - 1);
  }

  for (let i = startPage; i <= endPage; i++) {
    buttons.push(
      <li key={`page-${i + 1}`}>
        <Link
          className={`${i === page ? Styles.active : ""}`}
          href={`${pathName}?page=${i}`}
        >
          {i}
        </Link>
      </li>
    );
  }

  return (
    <nav className={Styles.pagination}>
      <ul>
        <li>
          <Link className={Styles.previous} href={`${pathName}?page=1`}>
            First
          </Link>
        </li>
        <li>
          <Link href={`${pathName}?page=${page === 1 ? page : page - 1}`}>
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
          <Link href={`${pathName}?page=${page >= pages ? page : page + 1}`}>
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
        <li>
          <Link className={Styles.next} href={`${pathName}?page=${pages}`}>
            Last
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
