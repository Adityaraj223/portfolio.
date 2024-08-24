import React, { useState, useEffect } from "react";
import logo from "../assets/logo.png";
import { HiMenu } from "react-icons/hi";
import { Link } from "react-scroll";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`py-4 md:px-12 px-4 ${isSticky ? "sticky" : ""}`}>
      <nav className="flex items-center justify-between">
        <div className="text-white font-bold text-lg cursor-pointer">
          <img src={logo} alt="Logo" className="w-40 h-auto" />
        </div>

        {/* for larger devices */}
        <div className="lg:flex items-center gap-3 hidden text-body">
          <Link
            activeClass="active"
            smooth={true}
            spy={true}
            offset={-100}
            to="home"
            className="nav-link"
          >
            Home
          </Link>
          <Link
            activeClass="active"
            smooth={true}
            spy={true}
            offset={-100}
            to="skills"
            className="nav-link"
          >
            Skills
          </Link>
          <Link
            activeClass="active"
            smooth={true}
            spy={true}
            offset={-100}
            to="about"
            className="nav-link"
          >
            About me
          </Link>
          <Link
            activeClass="active"
            smooth={true}
            spy={true}
            offset={-100}
            to="portfolio"
            className="nav-link"
          >
            Portfolio
          </Link>
          <Link
            activeClass="active"
            smooth={true}
            spy={true}
            offset={-100}
            to="testimonials"
            className="nav-link"
          >
            Testimonials
          </Link>
        </div>

        {/* Contact Me button */}
        <div className="lg:block hidden">
          <Link
            to="contact"
            smooth={true}
            spy={true}
            offset={-100}
            className="btn-primary"
          >
            <span>Contact Me</span>
          </Link>
        </div>

        {/* Button for small devices */}
        <button onClick={toggleMenu} className="lg:hidden text-body text-3xl">
          <HiMenu />
        </button>
      </nav>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="mt-4 bg-body p-4 rounded-lg text-white">
          <Link
            activeClass="active"
            smooth={true}
            spy={true}
            offset={-100}
            to="home"
            className="nav-link"
          >
            Home
          </Link>
          <Link
            activeClass="active"
            smooth={true}
            spy={true}
            offset={-100}
            to="skills"
            className="nav-link"
          >
            Skills
          </Link>
          <Link
            activeClass="active"
            smooth={true}
            spy={true}
            offset={-100}
            to="about"
            className="nav-link"
          >
            About me
          </Link>
          <Link
            activeClass="active"
            smooth={true}
            spy={true}
            offset={-100}
            to="portfolio"
            className="nav-link"
          >
            Portfolio
          </Link>
          <Link
            activeClass="active"
            smooth={true}
            spy={true}
            offset={-100}
            to="testimonials"
            className="nav-link"
          >
            Testimonials
          </Link>
          <Link
            to="contact"
            smooth={true}
            spy={true}
            offset={-100}
            className="btn-primary"
          >
            <span>Contact Me</span>
          </Link>
        </div>
      )}
    </header>
  );
};

export default Navbar;
