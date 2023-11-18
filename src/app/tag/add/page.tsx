import TagForm from "@/components/forms/TagForm/TagForm";
import prisma from "@/lib/prisma";

export default async function AddTag() {
  const tags = await prisma.tag.findMany();

  return (
    <div style={{ maxWidth: "300px"}} className="container">
      <h1>Add Tag</h1>
      <p>Add your tag name here</p>

      <TagForm />

      {tags.length > 0 && (
        <>
          <h2>List of tags</h2>
          <ul>
            {tags.map((tag) => (
              <li key={tag.id}>{tag.name}</li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}
