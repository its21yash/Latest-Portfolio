import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";

const Contact = () => {
  const form = useRef();
  const [errors, setErrors] = useState({
    name: false,
    email: false,
    project: false,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: !value || (name === "email" && !emailPattern.test(value)),
    }));
  };

  const handleBlur = (e) => {
    handleInputChange(e);
  };

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

  const sendEmail = (e) => {
    e.preventDefault();

    const name = form.current.elements["name"].value;
    const email = form.current.elements["email"].value;
    const project = form.current.elements["project"].value;

    const newErrors = {
      name: !name,
      email: !email || !emailPattern.test(email),
      project: !project,
    };

    setErrors(newErrors);

    if (!name || !email || !project) {
      // If any field is empty, return without sending the email
      return;
    }
    console.log("Abc");

    emailjs
      .sendForm("service_644t3yv", "template_wfg7uq6", form.current, {
        publicKey: "RpkZhum9FiSkmzaxF",
      })
      .then(() => {
        e.target.reset();
        setErrors({ name: false, email: false, project: false });
      })
      .catch((error) => {
        console.error("Email send error:", error);
      });
    // e.target.reset();
    // setErrors({ name: false, email: false, project: false });
  };

  return (
    <section className="contact section" id="contact">
      <h2 className="section__title">Get in touch</h2>
      <span className="section__subtitle">Contact Me</span>

      <div className="contact__container container grid">
        <div className="contact__content">
          <h3 className="contact__title">Talk to me</h3>
          <div className="contact__info">
            <div className="contact__card">
              <i className="bx bx-mail-send contact__card-icon"></i>
              <h3 className="contact__card-title">Email</h3>
              <span className="contact__card-data">yash38709@gmail.com</span>
              <a
                href="mailto:yash38709@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="contact__button"
              >
                Write Me{" "}
                <i className="bx bx-right-arrow-alt contact__button-icon"></i>
              </a>
            </div>
            <div className="contact__card">
              <i className="bx bxl-whatsapp contact__card-icon"></i>
              <h3 className="contact__card-title">Whatsapp</h3>
              <span className="contact__card-data">+91 86076 98362</span>
              <a
                href="https://api.whatsapp.com/send?phone=918607698362&text=Hello, more information!"
                className="contact__button"
                target="_blank"
                rel="noopener noreferrer"
              >
                Write Me{" "}
                <i className="bx bx-right-arrow-alt contact__button-icon"></i>
              </a>
            </div>
            <div className="contact__card">
              <i className="bx bxl-telegram contact__card-icon"></i>

              <h3 className="contact__card-title">Telegram</h3>
              <span className="contact__card-data">its21yash</span>
              <a
                href="https://t.me/its21yash"
                className="contact__button"
                target="_blank"
                rel="noopener noreferrer"
              >
                Write Me{" "}
                <i className="bx bx-right-arrow-alt contact__button-icon"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="contact__content">
          <h3 className="contact__title">Write me your project</h3>

          <form ref={form} onSubmit={sendEmail} className="contact__form">
            <div className="contact__form-div">
              <label className="contact__form-tag">Name</label>
              <input
                type="text"
                name="name"
                className={`contact__form-input ${
                  errors.name ? "contact__form-input--error" : ""
                }`}
                placeholder="Enter your name"
                onChange={handleInputChange}
                onBlur={handleBlur}
              />
            </div>
            <div className="contact__form-div">
              <label className="contact__form-tag">Email</label>
              <input
                type="email"
                name="email"
                className={`contact__form-input ${
                  errors.email ? "contact__form-input--error" : ""
                }`}
                placeholder="Enter your email"
                onChange={handleInputChange}
                onBlur={handleBlur}
              />
            </div>
            <div className="contact__form-div contact__form-area">
              <label className="contact__form-tag">Project</label>
              <textarea
                name="project"
                cols="30"
                rows="10"
                className={`contact__form-input ${
                  errors.project ? "contact__form-input--error" : ""
                }`}
                placeholder="Write your project"
                onChange={handleInputChange}
                onBlur={handleBlur}
              ></textarea>
            </div>
            <button className="button button--flex">
              Send Message{" "}
              <img
                src="/assets/send-icon.svg"
                alt="send icon"
                className="send-message-icon"
              />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
