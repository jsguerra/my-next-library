import prisma from "@/lib/prisma";
import TagForm from "@/components/forms/TagForm/TagForm";

export default async function EditTag({
  params,
}: {
  params: { slug: string };
}) {
  const tag = await prisma.tag.findMany({
    where: {
      id: Number(params.slug),
    },
  });

  return (
    <div style={{ maxWidth: "300px"}} className="container">
      <h1>Edit {tag[0].name}</h1>
      <p>Update details below:</p>
      <TagForm data={tag[0]} />
    </div>
  );
}
