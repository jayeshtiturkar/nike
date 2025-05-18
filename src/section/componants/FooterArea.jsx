const FooterArea = ({ title, links }) => {
  return (
    <div key={title} className="">
      <h1 className="text-2xl font-montserrat font-bold">{title}</h1>
      <div className="flex flex-col space-y-2 mt-6">
        {links.map((link2) => (
          <a href={link2.link} className="hover:text-slate-gray font-montserrat" key={link2.name}>{link2.name}</a>
        ))}
      </div>
    </div>
  );
};

export default FooterArea;
