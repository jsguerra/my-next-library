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

export async function authorAction(data: FormData) {
  const name = data.get("name");
  const slug = data.get("slug");
  const thumbnail = data.get("thumbnail") as FileType;

  // Add entry into database
  await prisma.author.create({
    data: {
      name: name as string,
      slug: slug as string,
      thumbnail: thumbnail.name as string,
    },
  });

  revalidatePath("/authors");

  // Upload file to folder
  const file: File | null = data.get("thumbnail") as unknown as File;
  if (!file) {
    throw new Error("No file uploaded");
  }

  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);

  const publicPath = "public/library";
  const firstLetter = slug?.slice(0, 1);
  let destination = `${publicPath}/${firstLetter}/${slug}`;

  if (!fs.existsSync(destination)) {
    fs.mkdirSync(destination, { recursive: true });
  }

  const path = join("./", destination, file.name);
  await writeFile(path, buffer);
  console.log(`open ${path} to see the uploaded file`);

  return { success: true };
}

export async function authorEditAction(data: FormData) {}

export async function authorDeleteAction(data: FormData) {}
