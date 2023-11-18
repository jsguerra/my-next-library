import Grid from "@/components/Grid/Grid";
import prisma from "@/lib/prisma";
import Link from "next/link";

export default async function Author({ params }: { params: { slug: string } }) {
  const authors = await prisma.author.findMany({
    where: {
      slug: params.slug,
    },
    include: {
      books: true,
    },
  });

  const author = authors[0];

  return (
    <>
      <div className="container">
        <h1>Author: {author.name}</h1>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <p>Total books by author: {author.books.length}</p>
          <Link className="btn" href="/authors/edit/lorem-ipsum">
            Edit Author
          </Link>
        </div>
      </div>
      <Grid numOfCol={author.books.length > 0 ? "5" : "1"}>
        {author.books.length > 0 ? "" : <p>No books by author yet</p>}
        {author.books &&
          author.books.map((book) => <p key={book.id}>{book.title}</p>)}
      </Grid>
    </>
  );
}
