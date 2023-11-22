import prisma from "@/lib/prisma";
import TagForm from "@/components/forms/TagForm/TagForm";

export default async function EditTag({
  params,
}: {
  params: { slug: string };
}) {
  const tags = await prisma.tag.findMany({
    where: {
      slug: params.slug,
    },
  });

  return (
    <div style={{ maxWidth: "300px"}} className="container">
      <h1>Edit {tags[0].name}</h1>
      <p>Update details below:</p>
      <TagForm data={tags[0]} />
    </div>
  );
}
