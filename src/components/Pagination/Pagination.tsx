import Link from "next/link";

export default function Pagination() {
  return (
    <nav>
      <Link className="btn" href={"/"}>1</Link>
      <Link className="btn" href={"/"}>2</Link>
      <Link className="btn" href={"/"}>3</Link>
    </nav>
  );
}
