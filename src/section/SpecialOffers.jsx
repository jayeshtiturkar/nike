import { arrowRight } from "../assets/icons"
import { offer } from "../assets/images"
import Button from "./componants/Button"

const SpecialOffers = () => {
  return (
    <section className="flex max-md:flex-col justify-center items-center gap-10 max-container">
      <div className="flex-1">
        <img src={offer} alt="offer" />
      </div>
      <div className="flex-1">
        <h1 className="text-5xl font-bold font-palanquin"><span className="text-coral-red">Special</span> Offer</h1>
        <p className="mt-8 text-xl text-slate-gray font-montserrat text-wrap lg:max-w-lg">
          Embark on a shopping journey that redefines your experience with unbeatable deals. From premier selections to incredible savings, we offer unparalleled value that sets us apart.
        </p>
        <p className="mt-8 text-xl text-slate-gray font-montserrat lg:max-w-lg">Navigate a realm of possibilities designed to fulfill your unique desires, surpassing the loftiest expectations. Your journey with us is nothing short of exceptional</p>
        <div className="mt-10 flex gap-5">
          <Button lable="Shop Now" iconURL={arrowRight} />
          <button className="w-fit flex justify-center items-center bg-white gap-2 text-slate-gray py-4 px-6 text-xl leading-none rounded-full font-montserrat border border-corol-red">Learn more</button>
        </div>
      </div>
    </section>
  )
}

export default SpecialOffers