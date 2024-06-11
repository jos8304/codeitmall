import { useRouter } from "next/router";
import { useState } from "react";

export default function SearchForm({ initalValue = "" }) {
  const router = useRouter();

  const [value, setValue] = useState(initalValue);

  function handleChange(e) {
    setValue(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!value) {
      router.push("/");
      return;
    } else {
      router.push(`/search?q=${value}`);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input name="q" value={value} onChange={handleChange} />
      <button>검색</button>
    </form>
  );
}