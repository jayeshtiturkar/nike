import { useState } from "react"
import { arrowRight } from "../assets/icons"
import { bigShoe1 } from "../assets/images"
import { shoes, statistics } from "../constants"
import Button from "./componants/Button"
import ShoeCart from "./componants/ShoeCart"

const Hero = () => {
  const [changeShoe, setChangeShoe] = useState(bigShoe1);
  return (
    <section id="hero"
      className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container">
      <div className="relative xl:w-2/5 flex flex-col justify-center itmes-start w-full pt-28 max-lg:padding-x ">
        <p className="text-xl font-montserrat text-coral-red">Our Summer Collection</p>
        <h1 className="mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">The New Arrival</span>
          <br />
          <span className="text-coral-red inline-block mt-3">Nike</span> Shoes
        </h1>
        <p className="font-montserrat text-slate-gray text-lg mt-6 mb-14 leading-8 sm:max-w-sm">Discover stylish Nike arrivals, quality comfort, and innovation for your active life.
        </p>
        <Button lable="Shop Now" iconURL={arrowRight} />
        <div className="flex flex-wrap justify-start items-start gap-16 mt-20 w-full">
          {statistics.map((stat) => (
            <div key={stat.label}>
              <p className="text-4xl font-palanquin font-bold">{stat.value}</p>
              <p className="leading-7 font-montserrat text-slate-gray ">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center">
        <img src={changeShoe} alt="Shoe Collection" width={610} height={500} className="object-contain relative z-10" />

        <div className="flex sm:gap-6 gap-4 absolute -bottom-[5%] max-sm:px-6">
          {
            shoes.map((shoe, index) => (
              <div key={index}>
                <ShoeCart imgURL={shoe} changeBigShoeImage={(v) => setChangeShoe(v)} bigShoeImg={changeShoe} />
              </div>
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default Hero