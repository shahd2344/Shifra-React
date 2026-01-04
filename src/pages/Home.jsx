import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Recommendations from "../components/Recommendations";
import QuickAccess from "../components/QuickAccess";
import Footer from "../components/Footer";
import "./Home.css";


export default function Home() {
return (
    <>
      <Navbar />
      <Hero />
      <Recommendations />
      <QuickAccess />
      <Footer />
    </>
  );
}
