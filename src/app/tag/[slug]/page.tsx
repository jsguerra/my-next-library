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
          tags.map((tag, i) => {
            const authorDirectory = tag.books[i].author.slug;
            const firstLetter = authorDirectory.slice(0, 1);
            const pages = tag.books[i].pages?.split(", ");

            return (
              <div style={{ textAlign: "center" }} key={tag.books[i].id}>
                {pages && (
                  <Link href={`/book/${tag.books[i].slug}`}>
                    <img
                      src={`/library/${firstLetter}/${authorDirectory}/${tag.books[i].slug}/${pages[0]}`}
                    />
                  </Link>
                )}
                <p>{tag.books[i].title}</p>
              </div>
            );
          })}
      </Grid>
    </>
  );
}
