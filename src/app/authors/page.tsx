import Link from "next/link";
import prisma from "@/lib/prisma";
import Grid from "@/components/Grid/Grid";

export default async function AuthorsDirecotry() {
  const authors = await prisma.author.findMany();

  return (
    <div className="container">
      <h1>Directory of Authors</h1>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <p>Total authors: {authors.length}</p>
        <Link className="btn" href="/authors/add">
          Add Author
        </Link>
      </div>
      <p>Filter by letter</p>

      <Grid numOfCol={authors.length > 0 ? "5" : "1"}>
        {authors.length > 0 ? "" : <p>No authors in My Next Library yet</p>}
        {authors &&
          authors.map((author) => {
            const directory = author.slug.slice(0, 1);

            return (
              <Link key={author.id} href={`/authors/${author.slug}`}>
                <img
                  src={`/library/${directory}/${author.slug}/${author.thumbnail}`}
                  alt={author.name}
                />
                {author.name}
              </Link>
            );
          })}
      </Grid>
    </div>
  );
}
