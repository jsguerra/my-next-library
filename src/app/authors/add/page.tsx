import prisma from "@/lib/prisma";
import AuthorForm from "@/components/forms/AuthorForm/AuthorForm";

export default async function AddAuthor() {
  const authors = await prisma.author.findMany();

  return (
    <div style={{ maxWidth: "800px" }} className="container">
      <h1>Create Author</h1>
      <p>Add your author details.</p>
      <AuthorForm />
      {authors.length > 0 && (
        <>
          <h2>List of Authors</h2>
          <ul>
            {authors.map((author) => (
              <li key={author.id}>{author.name}</li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}
