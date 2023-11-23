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
  const authorDirectory = author.slug;
  const firstLetter = authorDirectory.slice(0, 1);

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
          <Link className="btn" href={`/authors/edit/${author.id}`}>
            Edit Author
          </Link>
        </div>
      </div>
      <Grid>
        {author.books.length > 0 ? "" : <p>No books by author yet</p>}
        {author.books &&
          author.books.map((book, i) => {
            const pages = book.pages?.split(", ");

            return (
              <div style={{ textAlign: "center" }} key={book.id}>
                {pages && (
                  <Link href={`/book/${book.slug}`}>
                    <img
                      src={`/library/${firstLetter}/${authorDirectory}/${book.title}/${pages[i]}`}
                    />
                  </Link>
                )}

                <p>{book.title}</p>
              </div>
            );
          })}
      </Grid>
    </>
  );
}
