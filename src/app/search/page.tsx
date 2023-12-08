import prisma from "@/lib/prisma";
import Link from "next/link";
import Styles from "./page.module.css";
import Grid from "@/components/Grid/Grid";
import Pagination from "@/components/Pagination/Pagination";

export default async function Search({
  searchParams,
}: {
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  const page =
  typeof searchParams?.page === "string" ? Number(searchParams.page) : 1;
const limit =
  typeof searchParams?.limit === "string" ? Number(searchParams.limit) : 10;

  const books = await prisma.book.findMany({
    skip: (page - 1) * limit,
    take: limit,
    orderBy: {
      id: "desc",
    },
    where: {
      title: {
        contains: searchParams?.q as string,
      },
    },
    include: {
      author: true,
    },
  });

  const totalRecords = await prisma.book.count({
    where: {
      title: {
        contains: searchParams?.q as string
      }
    }
  });

  const pages = Math.ceil(totalRecords / limit);

  return (
    <>
      <div className="container">
        <h1>Search Results for: {searchParams?.q}</h1>
        <div className={Styles.meta}>
          <p>Total search results: {totalRecords}</p>
          <p>Page: {page} of {pages}</p>
        </div>
      </div>
      <Grid>
        {books.length > 0 ? "" : <p>No results for search term</p>}
        {books &&
          books.map((book) => {
            const authorDirectory = book.author.slug;
            const firstLetter = authorDirectory.slice(0, 1);
            const pages = book.pages?.split(", ");
            pages?.sort();

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
      {pages >= 2 && <Pagination slug={`/search?q=${searchParams?.q}`} page={page} pages={pages} />}
    </>
  );
}
