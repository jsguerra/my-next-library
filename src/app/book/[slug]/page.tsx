import Link from "next/link";

export default function Book() {
  return (
    <div className="container">
      <h1>Book ID: </h1>
      <Link className="btn" href="/book/edit/i-robot">Edit Book</Link>
      <Link className="btn" href="/tag/sci-fi">View Tag Sci-fi</Link>
    </div>
  );
}
