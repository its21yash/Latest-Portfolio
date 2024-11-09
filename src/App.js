import "./App.css";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Qualification from "./components/qualification/Qualification";
import ScrollUp from "./components/scrollup/ScrollUp";
import Services from "./components/services/Services";
import Skills from "./components/skills/Skills";
// import Testimonials from "./components/testimonials/Testimonials";
import Work from "./components/work/Work";
import { Analytics } from "@vercel/analytics/react";

function App() {
  return (
    <>
      <Header />
      <main className="main ">
        <Home />
        <About />
        <Skills />
        <Services />
        <Qualification />
        {/* <Testimonials /> */}
        <Work />
        <Contact />
      </main>
      <Footer />
      <ScrollUp />
      <Analytics />
    </>
  );
}

export default App;
