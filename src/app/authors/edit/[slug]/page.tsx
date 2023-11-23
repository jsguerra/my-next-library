import prisma from "@/lib/prisma";

export default async function EditAuthor({
  params,
}: {
  params: { slug: string };
}) {
  const author = await prisma.author.findUnique({
    where: {
      id: Number(params.slug),
    },
  });

  return (
    <div
      style={{ color: "#E3A008", maxWidth: "800px", textAlign: "center" }}
      className="container"
    >
      <h1 style={{ fontSize: "2.5rem" }}>Under Contrustion</h1>
      <p>This feature is not available yet.</p>
    </div>
  );
}
