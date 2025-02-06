import React from "react";
import Wrapper from "../../layouts/Wrapper";
import SocialLinks from "../SocialLinks/SocialLinks";
import { CgChevronDoubleUp } from "react-icons/cg";

const Footer: React.FC = () => {
  const handleScrollToTop = () => {
    const section = document.getElementById("container");

    if (section) {
      window.scrollTo({
        top: section.offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="footer">
      <div className="p-6 bg-secondaryColor"></div>

      <Wrapper extraClasses="text-white text-center pb-0 pt-8">
        <CgChevronDoubleUp
          onClick={handleScrollToTop}
          className="w-8 h-8 inline mb-6 cursor-pointer"
        />
        <SocialLinks justify="justify-center" />
        <span className="block mt-3">
          &copy; Paolo Ghidoni {new Date().getFullYear()}
        </span>
      </Wrapper>
    </section>
  );
};

export default Footer;
