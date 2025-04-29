import image from "/pexels-gigi-greene-78586-245268.jpg";
import Typewriter from "../../components/typeWriter";
import Form from "../../components/form";

function Contact() {
  const words = [
    "Halo",
    "こんにちは",
    "Hello",
    "Bonjour",
    "Hola",
    "안녕하세요",
    "Hallo",
    "Здравствуйте",
    "你好",
    "Salve",
  ];

  return (
    <div className="contact">
      <div className="contact__typewriter">
        <Typewriter texts={words} />
      </div>
      <div className="contact__left">
        <Form />
      </div>
      <div className="contact__right">
        <figure className="brannan">
          <img src={image} alt="Contact's Image" />
        </figure>
        <span>
          We always love to get in touch with new people. Whether you are a
          potential customer, partner or someone else, we love to hear from you!
        </span>
      </div>
    </div>
  );
}

export default Contact;
