import { React} from "react";
import Projects from "../components/Projects/Projects";
import Footer from "../components/Footer/Footer";
import Progress from "../components/Progress/Progress";
import Main from "../components/Reviews/Main";
import Front from "../components/Front/Front";
import ContactCard from "../components/ContactCard/ContactCard";
import Clients from "../components/Clients/Clients";
import Section  from "../components/AnimateSection/Section";

export default function Home() {

  return (
    <>
      <Progress />
      <section className="flex" id="section-1">
        <Front/>
      </section>

      <Section classes="flex p-[3rem] bg-gray-900 w-full relative" id="section-3">
        <Projects/>
      </Section>

      <Section classes="flex flex-col bg-gray-500 text-white relative w-full p-[3rem] " id="section-2">
        <Main />
      </Section>

      <Section classes="flex p-[3rem] bg-gray-900 w-full relative" id="section-3">
        <Clients />
      </Section>

      <Section classes="flex p-[3rem] bg-gray-700 w-full relative" id="section-3">
        <ContactCard />
      </Section>

      <Section>
        <Footer />
      </Section>
    </>
  );
}
