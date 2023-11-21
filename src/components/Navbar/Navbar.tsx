import Link from "next/link";
import SearchForm from "@/components/forms/SearchForm/SearchForm";
import Styles from "./Navbar.module.css";

const navItems = [
  {
    title: "Authors",
    slug: "/authors",
  },
  {
    title: "Favorites",
    slug: "/favorites",
  },
];

export default function Navbar() {
  return (
    <nav className={Styles.nav}>
      <Link className={Styles.logo} href="/">
        My Next Library
      </Link>
      <SearchForm />
      <ul>
        {navItems.map((item) => (
          <li key={item.title}>
            <Link href={item.slug}>{item.title}</Link>
          </li>
        ))}
      </ul>
      <Link
        style={{ marginLeft: "auto" }}
        className={Styles.add}
        href="/book/add"
      >
        Add Book
      </Link>
    </nav>
  );
}
