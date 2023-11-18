"use client";

import { useRef } from "react";
import { tagAction } from "@/actions/tagActions";
import Styles from "./TagForm.module.css";

export default function TagForm() {
  const ref = useRef<HTMLFormElement>(null);

  return (
    <form
      ref={ref}
      action={async (formData) => {
        ref.current?.reset();

        await tagAction(formData);
      }}
      className={Styles.form}
    >
      <input
        name="name"
        placeholder="Tag name"
        type="text"
        autoComplete="off"
      />
      <input
        name="slug"
        placeholder="Tag slug"
        type="text"
        autoComplete="off"
      />
      <button className="btn" type="submit">
        Add Tag
      </button>
    </form>
  );
}
