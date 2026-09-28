import Image from "next/image";
import Link from "next/link";
import Header from "@/components/header";
import Footer from "@/components/foot er";
export default function Home() {
  return (
    <>
     
    <Header title="HOME"/>
      <section>
        <h2>Featured Books for hosoo</h2>
        {/* <div className="book-grid">
          {books.map((book) => (
            <article className="book-card" key={book.id}>
              <Image src={book.image} alt={book.title} width={220} height={330} />
              <h3>{book.title}</h3>
              <p>{book.author}</p>
              <strong>{book.price.toLocaleString()} ₮</strong>
            </article>
          ))}
        </div> */}
      </section>
      <Footer></Footer>
    </>
  );
}
