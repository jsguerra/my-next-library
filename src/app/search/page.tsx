export default function Search({
  searchParams,
}: {
  searchParams?: { q?: string };
}) {
  return (
    <div className="container">
      <h1>Search Results for: {searchParams?.q}</h1>
    </div>
  );
}
