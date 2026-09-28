import Header from "@/components/header";
import Footer from "@/components/footer";

export default function AboutPage() {
  return (
    <main>
      <Header title="ABOUT"></Header>
      <section className="about-page">
        <p className="eyebrow">ABOUT US</p>
        <h1>About BookMart</h1>
        <p>BookMart бол programming, web development, AI болон technology номын жишээ онлайн дэлгүүр юм.</p>
        <h2>Our Goal</h2>
        <p>Оюутнуудад Next.js-ийн page, component, routing, static data гэсэн ойлголтыг практик байдлаар сурахад туслах.</p>
      </section>
      <Footer/>
    </main>
  );
}
