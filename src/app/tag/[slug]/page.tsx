import Link from "next/link";

export default function Tag() {
  return (
    <div className="container">
      <h1>Tag ID: </h1>
      <Link className="btn" href="/book/edit/sci-fi">Edit Tag</Link>
    </div>
  );
}
