import { shoe8 } from "../assets/images";
import Button from "./componants/Button";

const SuperQulity = () => {
  return (
    <section className="grid grid-cols-2 max-md:grid-cols-1 items-center justify-center max-container">
      <div className="padding-r order-2 md:order-1">
        <h1 className="text-6xl font-bold font-palanquin">We Provide You <span className="text-coral-red">Super <br/> Quality</span> Shoes</h1>
        <p className="mt-8 text-xl text-slate-gray font-montserrat">
          Ensuring premium comfort and style, our meticulously crafted footwear
          is designed to elevate your experience, providing you with unmatched
          quality, innovation, and a touch of elegance.
        </p>
        <p className="mt-8 text-xl text-slate-gray font-montserrat">Our dedication to detail and excellence ensures your satisfaction</p>
        <div className="mt-10">
        <Button lable="View details" />
        </div>
      </div>
      <div className="w-full flex justify-center items-center order-1 md:order-2 max-md:mb-5">
        <img src={shoe8} alt="Super Quality" height={650} width={650}/>
      </div>
    </section>
  );
};

export default SuperQulity;
