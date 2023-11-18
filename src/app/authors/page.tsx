import Link from "next/link";

export default function AuthorsDirecotry() {
  return (
    <div className="container">
      <h1>Directory of Authors</h1>
      <Link className="btn" href="/authors/add">Add Author</Link>
      <Link className="btn" href="/authors/lorem-ipsum">Lorem Ispum</Link>
    </div>
  );
}
