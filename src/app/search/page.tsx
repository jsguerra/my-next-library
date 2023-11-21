import prisma from "@/lib/prisma";
import Link from "next/link";
import Styles from "./page.module.css";
import Grid from "@/components/Grid/Grid";

export default async function Search({
  searchParams,
}: {
  searchParams?: { q?: string };
}) {
  const books = await prisma.book.findMany({
    where: {
      title: {
        contains: searchParams?.q,
      },
    },
    include: {
      author: true,
    },
  });

  return (
    <>
      <div className="container">
        <h1>Search Results for: {searchParams?.q}</h1>
        <div className={Styles.meta}>
          <p>Total books in my library: {books.length}</p>
          <p>Page: 1 of 1</p>
        </div>
      </div>
      <Grid numOfCol={books.length > 0 ? "5" : "1"}>
        {books.length > 0 ? "" : <p>No results for search term</p>}
        {books &&
          books.map((book) => {
            const authorDirectory = book.author.slug;
            const firstLetter = authorDirectory.slice(0, 1);
            const pages = book.pages?.split(", ");

            return (
              <div style={{ textAlign: "center" }} key={book.id}>
                {pages && (
                  <Link href={`/book/${book.slug}`}>
                    <img
                      src={`/library/${firstLetter}/${authorDirectory}/${book.slug}/${pages[0]}`}
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
