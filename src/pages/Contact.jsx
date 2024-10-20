import { socialLinks } from "../constants";

const Contact = () => {
  return (
    <div className="min-h-screen flex items-center text-white px-4 sm:p-14">
      <div className="bg-[#07140c] h-[500px] border-[#42c77c] border-[3px] rounded-lg flex justify-between items-center w-full pl-5">
        <div className="flex flex-col gap-7">
          {socialLinks.map((link, i) => (
            <div key={i} className="text-[#42c77c] flex items-center gap-3">
              <i
                className={`text-3xl fa-${
                  link.name === "Gmail"
                    ? "envelope fa-solid"
                    : `${link.name.toLowerCase()} fa-brands`
                }`}
              ></i>
              <span className="flex flex-col">
                <span className="text-2xl font-bold">{link.name}</span>
                <span className="font-light">{link.text}</span>
              </span>
            </div>
          ))}
        </div>
        <div className="sm:flex hidden items-center justify-center w-[320px] mb-32">
          <img
            src="https://tavershima-apel.vercel.app/_next/image?url=%2FIMG_7241.PNG&w=640&q=75"
            alt=""
            className="object-cover w-full h-full flex items-center"
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
