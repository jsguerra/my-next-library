"use client";

import { useRef } from "react";
import { useRouter } from "next/navigation";
import { bookAction, bookEditAction } from "@/actions/bookActions";
import Styles from "./BookForm.module.css";

interface AuthorType {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  name: string;
  slug: string;
  thumbnail: string | null;
}

interface TagType {
  id: number;
  name: string;
  slug: string;
}

interface BookFormProps {
  authors: AuthorType[];
  tags: TagType[];
  data?: {
    id: number;
    title: string;
    slug: string;
    pages: string | null;
    favorite: boolean;
    tag: TagType[];
    author: AuthorType;
  } | null;
}

export function BookForm({ data, authors, tags }: BookFormProps) {
  const ref = useRef<HTMLFormElement>(null);
  const router = useRouter();

  console.log(data);

  return (
    <form
      ref={ref}
      action={async (formData) => {
        ref.current?.reset();

        if (!data) {
          await bookAction(formData);
        } else {
          await bookEditAction(formData);
        }
      }}
      className={Styles.form}
    >
      {data && (
        <input
          name="id"
          type="hidden"
          autoComplete="off"
          defaultValue={data?.id}
        />
      )}
      <input
        autoComplete="off"
        name="title"
        placeholder="Book title"
        type="text"
        defaultValue={data?.title}
      />
      <input
        autoComplete="off"
        name="slug"
        placeholder="Book slug"
        type="text"
        defaultValue={data?.slug}
      />
      <input
        accept="image/png, image/jpeg"
        name="images"
        multiple
        type="file"
      />
      <select
        name="authorId"
        id="author-id"
        defaultValue={data?.author.id}
      >
        <option value="">--Please choose an author--</option>
        {authors &&
          authors.map((author) => (
            <option
              key={author.id}
              value={author.id}
            >
              {author.name}
            </option>
          ))}
      </select>
      <label className={Styles["check-box"]} htmlFor="favorite-id">
        <input
          id="favorite-id"
          name="favorite"
          type="checkbox"
          defaultChecked={data?.favorite}
        />{" "}
        <span>Favorite</span>
      </label>
      {tags.length > 0 && (
        <div className={Styles.selection}>
          {tags.map((tag, i) => {
            console.log(tag, i);
            return (
            <label className={Styles["check-box"]} key={tag.id}>
              <input
                name="tag"
                type="checkbox"
                value={tag.id}
                checked={data?.tag.includes(tag.id)}
              />{" "}
              <span>{tag.name}</span>
            </label>
          )})}
        </div>
      )}
      <button className="btn" type="submit">
        {data ? "Update Book" : "Add Book"}
      </button>
    </form>
  );
}
