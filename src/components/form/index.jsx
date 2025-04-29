import { useState } from "react";

import { useSetupContext } from "../../contexts/setupContext";

function Form() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const { darkMode } = useSetupContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.target);

    fetch(
      "https://script.google.com/macros/s/AKfycbz5f81hiJIr4byHNscfmDQuCHVQS9vRXoxA12BH-5ZnJwR1u3_F5R7w9enEKfSzS7ui/exec",
      {
        method: "POST",
        body: formData,
      }
    )
      .then((res) => res.text())
      .then((text) => {
        if (text === "success") {
          setSent(true);
          e.target.reset();
        } else {
          alert("Gagal mengirim, coba lagi.");
        }
      })
      .catch((err) => {
        console.error("Error:", err);
        alert("Terjadi kesalahan!");
      })
      .finally(() => setLoading(false));
  };

  return (
    <>
      {sent && <p style={{ color: "green" }}>✅ Pesan berhasil dikirim!</p>}
      <form className="main__form" onSubmit={handleSubmit}>
        <div className="main__form__group">
          <label htmlFor="name">
            What's your name?{" "}
            <span className={`${darkMode ? "darkmode" : ""}`}>*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            autoComplete="off"
            className={`${darkMode ? "darkmode" : ""}`}
          />
        </div>
        <div className="main__form__group">
          <label htmlFor="email">
            E-mail address{" "}
            <span className={`${darkMode ? "darkmode" : ""}`}>*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            autoComplete="off"
            className={`${darkMode ? "darkmode" : ""}`}
          />
        </div>
        <div className="main__form__group">
          <label htmlFor="message">
            Tell us what's up!{" "}
            <span className={`${darkMode ? "darkmode" : ""}`}>*</span>
          </label>
          <textarea
            name="message"
            id="message"
            className={`${darkMode ? "darkmode" : ""}`}
          ></textarea>
        </div>
        <div className="main__form__submit">
          <button
            type="submit"
            className={`${darkMode ? "darkmode" : ""}`}
            disabled={loading}
          >
            {loading ? "Mengirim..." : "send message"}
          </button>
          <span>(*) These fields are required</span>
        </div>
      </form>
    </>
  );
}

export default Form;
