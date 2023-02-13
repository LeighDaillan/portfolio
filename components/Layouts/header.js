import { Link } from "react-scroll";
import { useInView } from "react-intersection-observer";

const Header = function () {
  const { ref: navRef, inView: navVisible, entry } = useInView();

  return (
    <headers
      ref={navRef}
      className={`fixed w-full z-30 bg-neutral-900  ${
        navVisible ? "showAnimation ease-in duration-500" : "hideAnimation "
      }`}
    >
      <nav className="grid md:grid-cols-2  bg-neutral-900 ">
        <ul className="text-base  flex justify-between py-5 mx-10 px-4 md:max-w-sm font-bold">
          <li>
            <Link
              to="about"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              className="opacity-60 hover:opacity-100 cursor-pointer"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="project"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              className="opacity-60 hover:opacity-100 cursor-pointer"
            >
              Project
            </Link>
          </li>
          <li>
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              className="opacity-60 hover:opacity-100 cursor-pointer"
            >
              Contact
            </Link>
          </li>
          <li>
            <Link
              to="social"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              className="opacity-60 hover:opacity-100 cursor-pointer"
            >
              Social
            </Link>
          </li>
        </ul>
        <Link
          to="top"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
          className="hidden md:block md:justify-self-end my-5 mx-6 leading-4 font-bold cursor-pointer"
        >
          <span className="block">Daillan</span>
          <span className="block">Leigh &nbsp; &nbsp;→</span>
          <span className="block">Franco</span>
        </Link>
      </nav>
    </headers>
  );
};

export default Header;
