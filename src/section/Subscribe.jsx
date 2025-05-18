import Button from "./componants/Button"

const Subscribe = () => {
  return (
    <section className="flex max-md:flex-col justify-between items-center my-10 max-container">
      <div>
        <h1 className="text-4xl font-bold lg:max-w-md font-palanquin">Sign Up for <span className="text-coral-red">Updates</span> & Newsletter</h1>
      </div>
      <div className="relative w-full max-w-md flex">
        <input type="text" placeholder="subscribe@nike.com" className="w-full py-5 px-4 rounded-full text-slate-gray outline-none border border-slate-gray"/>
        <div className="absolute right-1 top-1.5">
        <Button lable="sign up"/>
        </div>
      </div>

    </section>
  )
}

export default Subscribe