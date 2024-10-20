import { aboutItems } from "../constants";

const About = () => {
  return (
    <div className="w-full min-h-screen p-10 px-5 sm:p-14 flex flex-col gap-14">
      {aboutItems.map((item, i) => (
        <div key={i} className=" min-h-96 rounded-lg border-[3px] border-[#42c77c] text-white p-5 bg-[#07140c]">
          <h1 className=" sm:w-[45%] border-b-[3px] border-[#c5ffde] text-[#c5ffde] sm:text-3xl text-[24px] font-bold p-1">{item.title}</h1>
          <p className="text-[16px] sm:text-2xl text-[#42c77c] tracking-widest font-[200] sm:leading-8 pt-3">{item.text}</p>
        </div>
      ))}
    </div>
  );
};

export default About;
