async function Books() {
  const respose = await fetch("http://localhost:3000/api/books");
  const books = await respose.json();
return (
  <main>
    <code>{JSON.stringify(books,null,2)}</code>
  </main>
);}
export default Books;
