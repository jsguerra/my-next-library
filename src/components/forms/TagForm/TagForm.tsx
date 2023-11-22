"use client";

import { useRef } from "react";
import { useRouter } from "next/navigation";
import {
  tagAction,
  tagEditAction,
  tagDeleteAction,
} from "@/actions/tagActions";
import Styles from "./TagForm.module.css";

interface TagFormProps {
  data?: {
    id: number;
    name: string;
    slug: string;
  };
}

export default function TagForm({ data }: TagFormProps) {
  const ref = useRef<HTMLFormElement>(null);
  const router = useRouter();

  const handleDelete = async () => {
    if (data) {
      const formData = new FormData(ref.current!);
      tagDeleteAction(formData);
      router.push("/");
    }
  };

  return (
    <form
      ref={ref}
      action={async (formData) => {
        ref.current?.reset();

        if (!data) {
          await tagAction(formData);
        } else {
          await tagEditAction(formData);
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
        name="name"
        placeholder="Name"
        type="text"
        autoComplete="off"
        defaultValue={data?.name}
      />
      <input
        name="slug"
        placeholder="Slug"
        type="text"
        autoComplete="off"
        defaultValue={data?.slug}
      />
      <button className="btn" type="submit">
        {data ? "Edit Tag" : "Add Tag"}
      </button>
      {data && (
        <button
          className="btn danger"
          type="button"
          onClick={handleDelete}
        >
          Delete Tag
        </button>
      )}
    </form>
  );
}
