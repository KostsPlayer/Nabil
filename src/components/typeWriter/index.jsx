import { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(TextPlugin);

const TypeWriter = ({ texts, typingSpeed = 0.2, delay = 2 }) => {
  const textRef = useRef(null);
  const [textIndex, setTextIndex] = useState(0);

  useEffect(() => {
    const currentText = texts[textIndex];
    const textElement = textRef.current;

    gsap.to(textElement, {
      text: currentText,
      duration: currentText.length * typingSpeed,
      ease: "none",
      onComplete: () => {
        gsap.delayedCall(delay, () => {
          setTextIndex((prev) => (prev + 1) % texts.length);
        });
      },
    });

    return () => {
      gsap.killTweensOf(textElement);
    };
  }, [textIndex, texts, typingSpeed, delay]);

  return (
    <div className="typewriter">
      <div className="typewriter__text" ref={textRef} />
    </div>
  );
};

TypeWriter.propTypes = {
  texts: PropTypes.arrayOf(PropTypes.string).isRequired,
  typingSpeed: PropTypes.number,
  delay: PropTypes.number,
};

export default TypeWriter;
