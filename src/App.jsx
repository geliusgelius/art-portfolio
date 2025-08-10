import BackgroundTransition from "@/components/BackgroundTransition";
import Header from "@/components/Header";
import SliderPhoto from "@/components/SliderPhoto";
import About from "@/components/About";
import Gallery from "@/components/Gallery";
import Process from "@/components/Process";
import Contacts from "@/components/Contacts";
import Footer from "@/components/Footer";
import "@/assets/scss/main.scss";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <BackgroundTransition />
        <SliderPhoto />
        <About />
        <Gallery />
        <Process />
        <Contacts />
      </main>
      <Footer />
    </>
  );
}
