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

export async function tagEditAction(data: FormData) {
  const id = data.get("id");
  const name = data.get("name");
  const slug = data.get("slug");

  // Edit entry into database
  await prisma.tag.update({
    where: {
      id: Number(id),
    },
    data: {
      name: name as string,
      slug: slug as string,
    },
  });

  revalidatePath("/");
}

export async function tagDeleteAction(data: FormData) {
  const id = data.get("id");

  // Edit entry into database
  await prisma.tag.delete({
    where: {
      id: Number(id),
    },
  });

  revalidatePath("/");
}
