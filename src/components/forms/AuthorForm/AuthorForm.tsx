"use client";

import { ChangeEvent, useRef, useState } from "react";
import { authorAction } from "@/actions/authorActions";
import Styles from "./AuthorForm.module.css";

export default function AuthorForm() {
  const [imagePreview, setImagePreview] = useState<
    string | ArrayBuffer | null | undefined
  >(undefined);
  const ref = useRef<HTMLFormElement>(null);

  const handleImageSelect = (event: ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;

    if (files && files.length > 0) {
      const reader = new FileReader();

      reader.onload = (e) => {
        const image = e.target?.result;
        setImagePreview(image);
      };

      reader.readAsDataURL(files[0]);
    } else {
      // Handle the case where there are no files selected
      setImagePreview(undefined);
    }
  };

  return (
    <div className={Styles["form-container"]}>
      <form ref={ref} className={Styles.form} action={async (formData) => {
        ref.current?.reset();
        setImagePreview(undefined);

        await authorAction(formData);
      }}>
        <input
          name="name"
          placeholder="Author name"
          type="text"
          autoComplete="off"
          required
        />
        <input
          name="slug"
          placeholder="Slug"
          type="text"
          autoComplete="off"
          required
        />
        <input
          name="thumbnail"
          type="file"
          onChange={handleImageSelect}
          accept="image/png, image/jpeg"
        />
        <button className="btn" type="submit">
          Add Author
        </button>
      </form>
      {imagePreview ? (
        <img src={`${imagePreview}`} width="300" alt="" />
      ) : (
        <img src="/placeholder.jpg" width="300" alt="" />
      )}
    </div>
  );
}
