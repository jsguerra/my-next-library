import prisma from "@/lib/prisma";
import { BookForm } from "@/components/forms/BookForm/BookForm";

export default async function EditBook({
  params,
}: {
  params: { slug: string };
}) {
  const book = await prisma.book.findUnique({
    where: {
      id: Number(params.slug),
    },
    include: {
      tag: true,
      author: true
    }
  });
  const authors = await prisma.author.findMany();
  const tags = await prisma.tag.findMany();

  return (
    <div style={{ maxWidth: "600px" }} className="container">
      <h1>Edit {book?.title}</h1>
      <p>Update details below:</p>

      <BookForm data={book} authors={authors} tags={tags} />
    </div>
  );
}
