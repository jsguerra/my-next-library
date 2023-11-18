import Link from "next/link";
import prisma from "@/lib/prisma";
import Styles from "./page.module.css";
import Grid from "@/components/Grid/Grid";

export default async function Home() {
  const books = await prisma.book.findMany();
  const tags = await prisma.tag.findMany();

  return (
    <>
      <div className="container">
        <h1>Latest Books in My Next Library</h1>
        <div className={Styles.meta}>
          <p>Total books in my library: 6</p>
          <p>Page: 1 of 1</p>
        </div>
        {tags && (
          <div className={Styles.tags}>
            <Link href={`/tag/add`}>
              <span className="badge-success">+ add tag</span>
            </Link>
            {tags.map((tag) => (
              <Link key={tag.id} href={`/tags/${tag.slug}`}>
                <span className="badge">{tag.name}</span>
              </Link>
            ))}
          </div>
        )}
      </div>
      <Grid numOfCol={books.length > 0 ? "5" : "1"}>
        {books.length > 0 ? "" : <p>No books in My Next Library yet</p>}
        {books && books.map((book) => <p key={book.id}>{book.title}</p>)}
      </Grid>
    </>
  );
}
