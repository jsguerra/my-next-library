"use server";

import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import fs from "fs";
import { writeFile } from "fs/promises";
import { join } from "path";

interface FileType {
  size: number;
  type: string;
  name: string;
  lastModified: number;
}

export async function bookAction(data: FormData) {
  const title = data.get("title");
  const slug = data.get("slug");
  const authorId = data.get("authorId");
  const favIsOn = data.get("favorite");
  const tags = data.getAll("tag");

  const tagIdsArray: number[] = Array.from(tags).reduce(
    (acc: number[], tagId) => {
      if (typeof tagId === "string") {
        acc.push(parseInt(tagId, 10));
      }
      return acc;
    },
    []
  );

  const favorite = favIsOn === "on" ? true : false;

  const author = await prisma.author.findMany({
    where: {
      id: Number(authorId),
    },
  });

  const firstLetter = author[0].slug.slice(0, 1);
  const myPath = `public/library/${firstLetter}/${author[0].slug}/${slug}`;

  const files: FileList | null = data.getAll("images") as unknown as FileList;

  let pages = "";

  if (!files) {
    throw new Error("No file uploaded");
  }

  for (let i = 0; i < files.length; i++) {
    const file = files[i];
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    i > 0 ? (pages += ", " + file.name) : (pages += file.name);

    if (!fs.existsSync(myPath)) {
      fs.mkdirSync(myPath, { recursive: true });
    }

    const path = join("./", myPath, file.name);
    await writeFile(path, buffer);
    console.log(`open ${path} to see the uploaded file`);
  }

  // Add entry into database
  await prisma.book.create({
    data: {
      title: title as string,
      slug: slug as string,
      pages: pages as string,
      favorite: favorite,
      tag: {
        connect: tagIdsArray.map((tagId) => ({ id: tagId })),
      },
      authorId: author[0].id,
    },
  });

  return { success: true };
}
