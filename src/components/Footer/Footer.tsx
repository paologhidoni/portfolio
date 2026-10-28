import React from "react";
import Wrapper from "../../layouts/Wrapper";
import SocialLinks from "../SocialLinks/SocialLinks";

const Footer: React.FC = () => {
  return (
    <section id="footer" className="section-chrome site-footer">
      <Wrapper
        extraClasses="pb-12 pt-10 text-center md:pb-14 md:pt-12"
        bgColor="bg-transparent"
        paddingY="py-0"
      >
        {/* Social + copyright — theme tokens via section-chrome / site-footer */}
        <SocialLinks
          justify="justify-center"
          className="footer-social text-ink"
        />
        <span className="footer-copy mt-4 block text-sm">
          &copy; Paolo Ghidoni {new Date().getFullYear()}
        </span>
      </Wrapper>
    </section>
  );
};

export default Footer;
