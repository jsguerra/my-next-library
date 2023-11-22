"use client";

import { useRef } from "react";
import { tagAction } from "@/actions/tagActions";
import Styles from "./TagForm.module.css";

interface TagFormProps {
  data?: {
    name: string;
    slug: string;
  }
}

export default function TagForm({ data }: TagFormProps) {
  const ref = useRef<HTMLFormElement>(null);

  return (
    <form
      ref={ref}
      action={async (formData) => {
        ref.current?.reset();

        if (!data) {
          await tagAction(formData);
        }

        // Add edit action here
      }}
      className={Styles.form}
    >
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
    </form>
  );
}
