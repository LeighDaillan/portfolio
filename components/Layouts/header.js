import {
  Link,
  Button,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";
import { useInView } from "react-intersection-observer";

const Header = function () {
  const { ref: navRef, inView: navVisible, entry } = useInView();

  return (
    <headers
      ref={navRef}
      className={`fixed w-full ${
        navVisible ? "showAnimation ease-in duration-500" : "hideAnimation "
      }`}
    >
      <nav className="grid grid-cols-2">
        <ul className="text-base flex justify-between py-5 px-4 max-w-sm font-bold">
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
            <a href="#" className="opacity-60 hover:opacity-100">
              Projects
            </a>
          </li>
          <li>
            <a href="#" className="opacity-60 hover:opacity-100">
              Contact
            </a>
          </li>
          <li>
            <a href="#" className="opacity-60 hover:opacity-100">
              Social
            </a>
          </li>
        </ul>
        <a href="#" className="justify-self-end my-5 mx-6 leading-4 font-bold">
          <span className="block">Daillan</span>
          <span className="block">Leigh &nbsp; &nbsp;→</span>
          <span className="block">Franco</span>
        </a>
      </nav>
    </headers>
  );
};

export default Header;
