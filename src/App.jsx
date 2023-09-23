import Footer from "./Footer/Footer";
import Hero from "./Hero/Hero";
import Navbar from "./NavBar/Nav";
import TopBanner from "./NavBar/TopBarCarousel";
import NewsletterSection from "./NewsLetter/NewsLetter";

export default function App() {
  return (
    <>
      <Navbar />
      <TopBanner />
      <Hero />
      <NewsletterSection />
      <Footer />
    </>
  );
}
