import prisma from "@/lib/prisma";
import Link from "next/link";
import Styles from "./page.module.css";
import Grid from "@/components/Grid/Grid";

export default async function Favorites() {
  const favorites = await prisma.book.findMany({
    where: {
      favorite: true,
    },
    include: {
      author: true,
    },
  });

  return (
    <>
      <div className="container">
        <h1>Favorites</h1>
        <div className={Styles.meta}>
          <p>Total books: {favorites.length}</p>
          <p>Page: 1 of 1</p>
        </div>
      </div>
      <Grid numOfCol={favorites.length > 0 ? "5" : "1"}>
        {favorites.length > 0 ? "" : <p>No books in my favorites yet</p>}
        {favorites &&
          favorites.map((favorite) => {
            const authorDirectory = favorite.author.slug;
            const firstLetter = authorDirectory.slice(0, 1);
            const pages = favorite.pages?.split(", ");

            return (
              <div style={{ textAlign: "center" }} key={favorite.id}>
                {pages && (
                  <Link href={`/book/${favorite.slug}`}>
                    <img
                      src={`/library/${firstLetter}/${authorDirectory}/${favorite.slug}/${pages[0]}`}
                    />
                  </Link>
                )}
                <p>{favorite.title}</p>
              </div>
            );
          })}
      </Grid>
    </>
  );
}
