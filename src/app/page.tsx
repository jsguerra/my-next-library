import Link from "next/link";
import prisma from "@/lib/prisma";
import Styles from "./page.module.css";
import Grid from "@/components/Grid/Grid";
import Pagination from "@/components/Pagination/Pagination";

export default async function Home({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const page =
    typeof searchParams.page === "string" ? Number(searchParams.page) : 1;
  const limit =
    typeof searchParams.limit === "string" ? Number(searchParams.limit) : 10;

  const books = await prisma.book.findMany({
    skip: (page - 1) * limit,
    take: limit,
    orderBy: {
      id: "desc",
    },
    include: {
      author: true,
    },
  });
  const totalRecords = await prisma.book.count();

  const tags = await prisma.tag.findMany();

  const pages = Math.ceil(totalRecords / limit);

  return (
    <>
      <div className="container">
        <h1>Latest Books in My Next Library</h1>
        <div className={Styles.meta}>
          <p>Total books in my library: {books.length}</p>
          <p>
            Page: {page} of {totalRecords}
          </p>
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
      <Grid>
        {books.length > 0 ? "" : <p>No books in My Next Library yet</p>}
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
      <Pagination page={page} pages={pages} />
    </>
  );
}
