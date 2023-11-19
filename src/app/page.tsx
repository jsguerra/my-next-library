import Link from "next/link";
import prisma from "@/lib/prisma";
import Styles from "./page.module.css";
import Grid from "@/components/Grid/Grid";

export default async function Home() {
  const books = await prisma.book.findMany({
    include: {
      author: true,
    },
  });
  const tags = await prisma.tag.findMany();

  return (
    <>
      <div className="container">
        <h1>Latest Books in My Next Library</h1>
        <div className={Styles.meta}>
          <p>Total books in my library: {books.length}</p>
          <p>Page: 1 of 1</p>
        </div>
        {tags && (
          <div className={Styles.tags}>
            <Link href={`/tag/add`}>
              <span className="badge-success">+ add tag</span>
            </Link>
            {tags.map((tag) => (
              <Link key={tag.id} href={`/tag/${tag.slug}`}>
                <span className="badge">{tag.name}</span>
              </Link>
            ))}
          </div>
        )}
      </div>
      <Grid numOfCol={books.length > 0 ? "5" : "1"}>
        {books.length > 0 ? "" : <p>No books in My Next Library yet</p>}
        {books &&
          books.map((book) => {
            const authorDirectory = book.author.slug;
            const firstLetter = authorDirectory.slice(0, 1);
            const pages = book.pages?.split(", ");

            return (
              <div key={book.id}>
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
      <p style={{ textAlign: "center", padding: "1rem" }}>Pagination goes here</p>
    </>
  );
}
