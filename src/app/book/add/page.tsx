import { BookForm } from "@/components/forms/BookForm/BookForm";
import prisma from "@/lib/prisma";

export default async function AddBook() {
  const authors = await prisma.author.findMany();
  const tags = await prisma.tag.findMany();

  return (
    <div style={{ maxWidth: "600px" }} className="container">
      <h1>Add Book</h1>
      <BookForm authors={authors} tags={tags} />
    </div>
  );
}
