"use client";

import { useState } from "react";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import Styles from "./SearchForm.module.css";

export default function SearchForm() {
  const [inputValue, setInputValue] = useState("");
  const [url, setUrl] = useState("");
  const searchParams = useSearchParams();
  const router = useRouter();

  function handleSearch(term: string) {
    setInputValue(term);
    const params = new URLSearchParams(searchParams);

    if (term) {
      params.set("q", term);
    } else {
      params.delete("q");
    }

    setUrl(`/search?${params.toString()}`);
  }

  return (
    <div className={Styles.form}>
      <input
        autoComplete="off"
        name="search"
        type="text"
        onChange={(e) => {
          handleSearch(e.target.value);
        }}
        value={inputValue}
      />
      <button
        type="button"
        onClick={() => {
          setInputValue("");
          router.push(url);
        }}
        className="btn"
      >
        Search
      </button>
    </div>
  );
}
