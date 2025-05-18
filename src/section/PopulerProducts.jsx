import { star } from "../assets/icons"
import { products } from "../constants"

const PopulerProducts = () => {
  return (
    <section className="space-y-8 max-container">
      <h1 className="text-4xl font-bold font-palanquin">Our <span className="text-coral-red">Popular</span> Products</h1>
      <p className="text-xl text-slate-gray">Experience top-notch quality and style with our sought-after<br/>
       selections. Discover a world of comfort, design, and value</p>
       <div className="flex max-sm:flex-col justify-center items-center gap-7 mt-20">
        {
          products.map((product,index) =>(
            <div key={index} className="space-y-4">
              <div><img src={product.imgURL} alt={product.name} className="w-80 max-md:w-60"/></div>
              <div className="flex gap-2 text-2xl text-slate-gray font-palanquin"><img src={star} alt="star" className="h-7 w-7"/><span>(4.5)</span></div>
              <h1 className="text-2xl font-semibold font-palanquin" >{product.name}</h1>
              <p className="text-coral-red text-xl font-semibold font-montserrat">{product.price}</p>
            </div>
          ))
        }
       </div>
    </section>
  )
}

export default PopulerProducts