
const Button = ({lable,iconURL}) => {
  return (
    <button className="w-fit flex justify-center items-center bg-coral-red gap-2 text-white py-4 px-6 text-xl leading-none rounded-full font-montserrat border border-corol-red">{lable}
    {
      iconURL &&
      <img src={iconURL} alt="iconURL" className="ml-2 rounded-full w-5 h-5" />
    }
    
    </button>
  )
}

export default Button