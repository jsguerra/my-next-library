"use server";

import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function tagAction(data: FormData) {
  const name = data.get("name");
  const slug = data.get("slug");

  // Add entry into database
  await prisma.tag.create({
    data: {
      name: name as string,
      slug: slug as string,
    },
  });

  revalidatePath("/");
}
