import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import ScrollToTopButton from "./ScrollToTopButton";


const MainLayout = (props) => {
  const {pathname} = useLocation();
  return (
    <div className="bg-black">
      <Navbar />
      <div className={`sm:ml-[186px] ${pathname === "/" || pathname === "/contact" ? "pt-0" : "pt-20 sm:pt-0"}`}>{props.children}</div>
      <ScrollToTopButton />
    </div>
  );
};

export default MainLayout;
