import Link from "next/link";
import Styles from "./Pagination.module.css";

export default function Pagination() {
  return (
    <nav className={Styles.pagination}>
      <ul>
        <li>
          <Link href={"/"}>
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
        <li>
          {" "}
          <Link className="btn" href={"/"}>
            1
          </Link>
        </li>
        <li>
          <Link className="btn" href={"/"}>
            2
          </Link>
        </li>
        <li>
          <Link className="btn" href={"/"}>
            3
          </Link>
        </li>
      </ul>
    </nav>
  );
}
