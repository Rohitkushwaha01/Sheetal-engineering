import Progress from "../components/Progress/Progress";
import Footer from "../components/Footer/Footer";

export default function About() {
  return (
    <>
    <Progress/>
      <section className="sm:p-14 p-2">
        <h1 className="font-head text-center text-4xl my-10">Who we are!</h1>
        <div className="h-full font-display sm:text-md text-md shadow-lg rounded-lg shadow-black p-4 my-8">
          <p className="mb-3">
            Pradip Plastic Moulders Pvt. Ltd., (Pune) Established in 1996 Have
            been certified as TS 16949 : 2009 company. The company is one of the
            leading manufacturer of plastic technical blow moulded and injection
            moulded for automobile and is committed to provide best quality to
            the customers. We believe that it is team of motivated workforce is
            the most important source of our infrastructure, manpower is
            qualified with long experience and dedicated quality control which
            has created a huge asset of satisfied customers as an OEM or second
            tier supply chain member, Infrastructure is capable to meet the
            requirements of plastic components based on their industrial
            customers specifications. Pradip Plastic Moulders is an original
            equipment manufacurer for automobile giants such as M/s. Tata Motors
            Limited
          </p>
          <p className="mb-3">
            Manufacturing is equipped with latest machinery to execute the
            production of all it is components. Injection Moulding 50 Ton to 500
            Ton & Blow Moulding 5 ltr to 100 ltrs, Manufacturing capability of
            processing all types of thermoplastic raw materials including PP,
            HDPE, LDPE, ABS, EVA, Engineering plastics like Nylon,
            Polycarbonate, Talc filed, EPDM , TPE , TPV etc. Plastic components
            manufactured are used in interior and exterior of automobile parts
            which has vital and critical operation namely Surge Tanks,
            Windshield Containers, Coolant Tank, De-aeration Tank, Hoses, Ducts
            for air conditioner , Resonators , Ball Cage, Head Light Cover, Fuse
            Box Cover, Bumper End Cover, Trim Clips, Bushes, Handles, Recliner
            Knobs, Ducts, Brake & Clutch fluid Containers, Battery Cover, etc.
          </p>
          <p className="mb-3">
            PRADIP PLASTIC MOULDERS have capability for design and develop molds
            using CAD and 3D technology get the mold machining done on
            sophisticated CNC Machines and carries out assembly and mould
            development to meet the strict deadlines set by the customer.
          </p>
        </div>
      </section>

      <section>
        <Footer />
      </section>
    </>
  );
}
