import { SocialIcon } from "react-social-icons";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__item created__by">
        <span>KostsPlayer Studio</span>
        <span>Surabaya, East Java, Indonesis</span>
      </div>
      <div className="footer__item">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta!
      </div>
      <div className="footer__item contact">
        <span>yusrilp19@gmail.com</span>
        <span>+62 858 - 5030 - 9328</span>
      </div>
      <div className="footer__item socials">
        <SocialIcon
          network="instagram"
          bgColor="transparent"
          fgColor="black"
          url="https://www.instagram.com"
          style={{ height: 33, width: 33 }}
        />
        <SocialIcon
          network="linkedin"
          bgColor="transparent"
          fgColor="black"
          url="https://www.linkedin.com"
          style={{ height: 33, width: 33 }}
        />
        <SocialIcon
          network="facebook"
          bgColor="transparent"
          fgColor="black"
          url="https://www.facebook.com"
          style={{ height: 31, width: 31 }}
        />
        <SocialIcon
          network="x"
          bgColor="transparent"
          fgColor="black"
          url="https://www.x.com"
          style={{ height: 27, width: 27 }}
        />
      </div>
    </footer>
  );
}

export default Footer;
