import Link from "next/link";
import prisma from "@/lib/prisma";
import AZFilter from "@/components/AZFilter/AZFilter";
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
      <AZFilter
        authorName={authors}
      />

      <Grid>
        {authors.length > 0 ? "" : <p>No authors in My Next Library yet</p>}
        {authors &&
          authors.map((author) => {
            const directory = author.slug.slice(0, 1);

            return (
              <div style={{ textAlign: "center" }} key={author.id}>
                <Link href={`/authors/${author.slug}`}>
                  <img
                    src={`/library/${directory}/${author.slug}/${author.thumbnail}`}
                    alt={author.name}
                  />
                </Link>
                <p>{author.name}</p>
              </div>
            );
          })}
      </Grid>
    </div>
  );
}
