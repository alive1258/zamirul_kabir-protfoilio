import custom from "../../../../public/assets/image/custom.png";
import responsive from "../../../../public/assets/image/responsive.png";
import performance from "../../../../public/assets/image/perfomence.png";

import Image from "next/image";
import "./Services.css";

const Service = () => {
  return (
    <div id="services" className="md:mt-40 container text-[#ffffff] mt-10">
      <h1 className="text-4xl text-center font-semibold">Services</h1>

      <div className="grid md:grid-cols-3 gap-6 grid-cols-1 mt-10">
        <div className="box  p-4">
          <Image height={200} width={400} src={custom} alt="" />
          <h1 className="text-2xl mt-3">Custom Website Development</h1>
          <p className="mt-2">
            I specialize in delivering exceptional custom website development
            the MERN stack services tailored to your unique business needs.
            Trust me to transform your vision into a fully functional, visually
            captivating online presence that drives results and boosts your
            online success.
          </p>
        </div>
        <div className="box p-4">
          <Image
            className="h-[200px]"
            height={200}
            width={400}
            src={responsive}
            alt=""
          />
          <h1 className="text-2xl mt-3">Responsive Web Design</h1>
          <p className="mt-2">
            Responsive web design is the key to reaching and engaging users
            across multiple devices. With my expertise, your website will shine
            on desktops, tablets, and mobile devices, enhancing user
            satisfaction and maximizing your online impact.
          </p>
        </div>
        <div className="box p-4">
          <Image height={200} width={400} src={performance} alt="" />
          <h1 className="text-2xl mt-3">React Performance Optimization</h1>
          <p className="mt-2">
            {" "}
            Unlocking the Full Potential of React: Accelerating Performance and
            Efficiency through Expert Optimization Techniques.I ensure that your
            website not only looks great but also performs flawlessly across all
            devices
          </p>
        </div>
      </div>
    </div>
  );
};

export default Service;
