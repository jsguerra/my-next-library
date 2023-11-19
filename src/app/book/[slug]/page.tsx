import Link from "next/link";
import prisma from "@/lib/prisma";
import Styles from "./page.module.css";
import Grid from "@/components/Grid/Grid";
import ScrollBtn from "@/components/ScrollBtn/ScrollBtn";

export default async function Book({ params }: { params: { slug: string } }) {
  const books = await prisma.book.findMany({
    where: {
      slug: params.slug,
    },
    include: {
      author: true,
      tag: true,
    },
  });

  const book = books[0];
  const pages = book.pages?.split(", ");
  const tags = book.tag;
  const authorDirectory = book.author.slug;
  const firstLetter = authorDirectory.slice(0, 1);

  return (
    <>
      <div className="container">
        <h1>
          Book: {book.title}{" "}
          {book.favorite === true ? <span>- favorite</span> : ""}
        </h1>
        <p>By {book.author.name}</p>
        <div className={Styles.meta}>
          <p>Total pages: {pages?.length}</p>
          <Link className="btn" href="/book/edit/i-robot">
            Edit Book
          </Link>
        </div>

        {tags && (
          <div className={Styles.tags}>
            {tags.map((tag) => (
              <Link key={tag.id} href={`/tag/${tag.slug}`}>
                <span className="badge">{tag.name}</span>
              </Link>
            ))}
          </div>
        )}
      </div>
      <Grid numOfCol="5">
        {pages &&
          pages.map((page, i) => (
            <div style={{ textAlign: "center" }} key={i + 1}>
              <img
                src={`/library/${firstLetter}/${authorDirectory}/${book.slug}/${page}`}
              />
              <p>Page {i + 1}</p>
            </div>
          ))}
      </Grid>
      <ScrollBtn />
    </>
  );
}
