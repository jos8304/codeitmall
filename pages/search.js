import ProductList from "@/components/ProductList";
import SearchForm from "@/components/SearchForm";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Search() {
  const [products, setProducts] = useState([]);
  const router = useRouter();
  const { q } = router.query;

  async function getProducts() {
    const res = await axios.get(`/products/?q=${query}`);
    const nextProducts = res.data.results;
    setProducts(nextProducts);
  }

  useEffect(() => {
    getProducts(q);
  }, [q]);

  return (
    <div>
      <h1>Search page</h1>
      <SearchForm initalValue={q} />
      <h2>{q} 검색 결과</h2>
      <ProductList products={products} />
    </div>
  );
}
