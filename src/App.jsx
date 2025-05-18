import Nav from "./section/componants/Nav"
import {Footer, Hero, PopulerProducts, Services,SpecialOffers,Subscribe,SuperQulity,CustomerReview} from "./section"

function App() {
  return (
    <main className="relative">
      <Nav />
      <section className="padding-l wide:padding-r padding-b">
        <Hero/>
      </section>
      <section className="padding">
        <PopulerProducts/>
      </section>
      <section className="padding">
        <SuperQulity/>
      </section>
      <section className="padding">
        <Services />
      </section>
      <section className="padding">
        <SpecialOffers/>
      </section>
      <section className="padding bg-pale-blue">
        <CustomerReview />
      </section>
      <section className="padding">
        <Subscribe/>
      </section>
      <section className="padding-x padding-t pb-8 bg-black">
        <Footer/>
      </section>
    </main>
  )
}

export default App