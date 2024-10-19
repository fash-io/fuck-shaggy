import TypingEffect from "../components/TypingEffect";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col sm:flex-row items-center overflow-hidden justify-center gap-10 text-[25.6px] text-[#42c77c] p-14">
      <div>
        <h3 className="text-[16px] sm:text-[2.2rem] font-bold inline-block">
          My Name is <q className="text-[#c5ffde]">Apel Tavershima</q>
        </h3>
        <span className="text-[#3cb370] font-[200] text-[11.2px] sm:text-[25.6px] block">
          <span>I&apos;m a</span> <TypingEffect />
        </span>
        <p className="text-[16px] font-[700] leading-tight w-[70%]">
          Please Make enquires through the various social media handles provided
          or a mail will be sufficient.{" "}
          {
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 512 512"
              style={{ color: "rgb(197, 255, 222)", display: "inline" }}
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"></path>
            </svg>
          }
        </p>
      </div>
      <div>
        <img
          src="https://tavershima-apel.vercel.app/_next/image?url=%2FIMG_E7244.JPG&w=640&q=75"
          alt=""
          className="rounded-full spinning_img sm:h-[27rem] sm:w-[27rem] object-cover"
        />
      </div>
    </div>
  );
};

export default Home;
