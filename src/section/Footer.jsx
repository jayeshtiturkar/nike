import { copyrightSign } from "../assets/icons";
import { footerLogo } from "../assets/images";
import { footerLinks, socialMedia } from "../constants";
import FooterArea from "./componants/FooterArea";

const Footer = () => {
  return (
    <footer className="text-white-400 max-container">
      <div className="grid grid-cols-1 sm:grid-cols-2 max-lg:space-y-3 lg:grid-cols-5 gap-10">
        <div className="col-span-2">
          <div>
            <img src={footerLogo} alt="" height={100} width={150} />
          </div>
          <p className="text-white-400 lg:max-w-sm  mt-6 font-montserrat font-">
            Get shoes ready for the new term at your nearest Nike store. Find
            Your perfect Size in Store. Get Rewards
          </p>
          <div className="flex gap-2 mt-8">
            {socialMedia.map((media) => (
              <div key={media.alt} className="bg-white rounded-full p-2">
                <img src={media.src} alt={media.alt} />
              </div>
            ))}
          </div>
        </div>

        {footerLinks.map((links1) => (
          <FooterArea {...links1} />
        ))}
      </div>
      <div className="flex justify-between max-md:flex-col items-center mt-20 font-montserrat">
        <div className="flex gap-1">
          <img src={copyrightSign} alt="" />
          Copyright. All rights reserved
        </div>
        <p>Terms & Conditions</p>
      </div>
    </footer>
  );
};

export default Footer;
