import Link from "next/link";

export default function Author() {
  return (
    <div className="container">
      <h1>Author ID: </h1>
      <Link className="btn" href="/authors/edit/lorem-ipsum">Edit Author</Link>
      <Link className="btn" href="/book/i-robot">View Book</Link>
    </div>
  );
}
