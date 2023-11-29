import Link from "next/link";
import prisma from "@/lib/prisma";
import Grid from "@/components/Grid/Grid";
import Styles from "./page.module.css";

export default async function Tag({ params }: { params: { slug: string } }) {
  const tags = await prisma.tag.findMany({
    where: {
      slug: params.slug,
    },
    include: {
      books: {
        include: {
          author: true,
        },
      },
    },
  });

  return (
    <>
      <div className="container">
        <h1>Tag: {tags[0].name}</h1>
        <div className={Styles.meta}>
          <p>Total books: {tags.length}</p>
          <p>Page: 1 of 1</p>
        </div>
        <Link href={`/tag/edit/${tags[0].id}`} className="btn">Edit Tag</Link>
      </div>
      <Grid>
        {tags[0].books.length > 0 ? "" : <p>No books in this tag yet</p>}
        {tags[0].books.length > 0 &&
          tags[0].books.map((book, i) => {
            const authorDirectory = book.author.slug;
            const firstLetter = authorDirectory.slice(0, 1);
            const pages = book.pages?.split(", ");
            console.log(book);

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
