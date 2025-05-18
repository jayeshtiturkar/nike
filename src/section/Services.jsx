import { services } from "../constants"

const Services = () => {
  return (
    <section className="max-container">
      <div className="flex gap-10">
        {
          services.map((service,index) => (
            <div key={index} className="flex flex-col justify-center items-start shadow-3xl space-y-4 px-12 py-20 rounded-2xl">
              <div className="bg-coral-red rounded-full p-2">
                <img src={service.imgURL} alt={service.label} className="h-8 w-8" />
              </div>
              <h1 className="font-bold text-3xl">{service.label}</h1>
              <p className="text-slate-gray text-xl font-montserrat">{service.subtext}</p>
            </div>
          ))
        }
      </div>
    </section>
  )
}

export default Services