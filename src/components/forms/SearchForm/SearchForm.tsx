"use client";

import { useRef } from "react";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import Styles from "./SearchForm.module.css";

export default function SearchForm() {
  const ref = useRef<HTMLFormElement>(null);
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  let query = "";

  function handleSearch(term: string) {
    const params = new URLSearchParams(searchParams);

    if (term) {
      params.set("q", term);
    } else {
      params.delete("q");
    }

    query = `${pathname}?${params.toString()}`;
  }

  return (
    <search>
      <form
        ref={ref}
        onSubmit={(e) => {
          e.preventDefault();
          router.push(`/search/${query}`);
          ref.current?.reset();
        }}
        className={Styles.form}
      >
        <input
          autoComplete="off"
          name="search"
          type="text"
          onChange={(e) => {
            handleSearch(e.target.value);
          }}
        />
        <button type="submit" className="btn">
          Search
        </button>
      </form>
    </search>
  );
}
