import SearchForm from "@/components/SearchForm";
import { useRouter } from "next/router";

export default function Search() {
  const router = useRouter();
  const { q } = router.query;

  return (
    <div>
      <h1>Search page</h1>
      <SearchForm initalValue={q} />
      <h2>{q} 검색 결과</h2>
    </div>
  );
}