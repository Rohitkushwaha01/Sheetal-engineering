import Progress from "../components/Progress/Progress";
import Footer from "../components/Footer/Footer";
import ContactCard from "../components/ContactCard/ContactCard";

export default function Contact() {
  return (
    <>
    <Progress/>
      <section class="font-display bg-gray-700 text-white">
        <ContactCard/>
      </section>
      <section>
        <Footer/>
      </section>
    </>
  );
}
