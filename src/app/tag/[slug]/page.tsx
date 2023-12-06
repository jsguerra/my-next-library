import Link from "next/link";
import prisma from "@/lib/prisma";
import Grid from "@/components/Grid/Grid";
import Pagination from "@/components/Pagination/Pagination";
import Styles from "./page.module.css";

interface TagProps {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
}

const Tag: React.FC<TagProps> = async ({ params, searchParams }) => {
  const page =
    typeof searchParams.page === "string" ? Number(searchParams.page) : 1;
  const limit =
    typeof searchParams.limit === "string" ? Number(searchParams.limit) : 5;

  const tags = await prisma.tag.findMany({
    where: {
      slug: params.slug,
    },
    include: {
      books: {
        skip: (page - 1) * limit,
        take: limit,
        orderBy: {
          id: "desc",
        },
        include: {
          author: true,
        },
      },
      _count: {
        select: { books: true },
      },
    },
  });

  const totalRecords = tags[0]._count.books;

  const pages = Math.ceil(totalRecords / limit);

  console.log(params.slug)

  return (
    <>
      <div className="container">
        <h1>Tag: {tags[0].name}</h1>
        <div className={Styles.meta}>
          <p>Total books: {totalRecords}</p>
          <p>Page: {page} of {pages}</p>
        </div>
        <Link href={`/tag/edit/${tags[0].id}`} className="btn">
          Edit Tag
        </Link>
      </div>
      <Grid>
        {tags[0].books.length > 0 ? "" : <p>No books in this tag yet</p>}
        {tags[0].books.length > 0 &&
          tags[0].books.map((book, i) => {
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
      {pages >= 2 && <Pagination slug={`/tag/${params.slug}`} page={page} pages={pages} />}
    </>
  );
};

export default Tag;
