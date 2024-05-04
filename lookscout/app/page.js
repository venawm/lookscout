import BluePage from "./components/BluePage";
import Demonstrate from "./components/Demonstrate";
import Faq from "./components/Faq";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Heading from "./components/Heading";
import NavBar from "./components/NavBar";
import TeamMembers from "./components/TeamMembers";

export default function Home() {
  return (
    <main className="">
      <NavBar />
      <Heading />
      <div className="mx-4 md:mx-24">
        <Features />
        <Demonstrate />
        <TeamMembers />
        <Faq />
      </div>
      <BluePage />
      <div className="mx-4 md:mx-24">
        <Footer />
      </div>
    </main>
  );
}
