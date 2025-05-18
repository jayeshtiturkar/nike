import { reviews } from "../constants"
import CustomerReviewCard from "./componants/CustomerReviewCard"

const CustomerReview = () => {
  return (
    <section className="flex flex-col justify-center items-center max-container">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-5xl font-bold font-palanquin">What Our <span className="text-coral-red">Customers</span> Say?</h1>
        <p className="mt-6 lg:max-w-lg text-lg text-center">Hear genuine stories from our satisfied customers about their exceptional experiences with us.</p>
      </div>
      <div className="flex max-md:flex-col justify-evenly items-center mt-20">
        {
          reviews.map((review) => (
            <CustomerReviewCard {...review}/>
           
          ))
        }
      </div>
    </section>
  )
}

export default CustomerReview