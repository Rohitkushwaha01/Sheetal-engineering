import Progress from "../components/Progress/Progress";
import Footer from "../components/Footer/Footer";

export default function About() {
  return (
    <>
    <Progress/>
      <section className="sm:p-14 p-2 bg-gray-700 text-white">
        <h1 className="font-head text-center text-4xl my-10">Who we are!</h1>
        <div className="h-full font-display sm:text-md text-md shadow-lg rounded-lg shadow-black p-4 my-8">
          <p className="mb-3">
          We sheetal engineering Established in 1996 Have been certified as ISO:2008:2015 company. The company is one of the leading manufacturer of jig & fixtures,press tools,forging tools,inspection gauges,spares  for automobile and manufacturing companies.
          </p>
          <p className="mb-3">
          Our company is committed to provide best quality to the customers. We believe that it is team of motivated workforce is the most important source of our infrastructure, manpower is qualified with long experience and dedicated quality control which has created a huge asset of satisfied customers as an OEM or second tier supply chain member, Infrastructure is capable to meet the requirements of industrial customers specifications. Sheetal engineering is an original equipment manufacurer for automobile giants like Gestamp, Mahindra and Mahindra,sogefi adm,maxion wheels  and a lot more Manufacturing is equipped with latest machinery to execute the production of all it is components.
          </p>
          <p className="mb-3">
          Sheetal engineering  have capability for design and development of  the fixtures using designs technology,get the dies machining done on sophisticated VMC  and CNC Machines and carry out assembly as per the customers requirement.
          </p>
        </div>
      </section>

      <section>
        <Footer />
      </section>
    </>
  );
}
