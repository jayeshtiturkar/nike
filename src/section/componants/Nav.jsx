import { hamburger } from "../../assets/icons";
import { headerLogo } from "../../assets/images";
import { navLinks } from "../../constants/index";
const Nav = () => {
  return (
    <header className="absolute padding-x py-8 z-10 w-full">
      <nav className="max-container flex justify-between items-center">
        <a href="/">
          <img src={headerLogo} alt="HeaderLogo" height={29} width={130} />
        </a>
        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((item => (
            <li key={item.label}>
              <a href={item.href}
              className="font-montserrat lending-normal text-lg text-slate-gray"
              >
              {item.label}
            </a></li>
          )))}
        </ul>
       
        <div className="lg:hidden">  {/* OR: you can use className= :"hidden max-lg:block" */}
          <img src={hamburger} alt="Hamburger" width={25} height={25}/>
        </div>
      </nav>
    </header>
  )
}

export default Nav