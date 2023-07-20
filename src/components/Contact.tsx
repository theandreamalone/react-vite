import emailjs from "@emailjs/browser";
import { ChangeEvent, FormEvent, useState } from "react";
import SectionTitle from "./SectionTitle";

const contactInfo = [
  {id: 0, label: ""},
  /*{ id: 1, label: "Phone", value: "+01 123 654 8096", icon: "fas fa-envelope" },
  {
    id: 2,
    label: "Mail",
    value: "info@domainname.com",
    icon: "fas fa-phone-alt",
  },
  {
    id: 3,
    label: "Visit My Studio",
    value: "Warnwe Park Streetperrine, FL 33157 New York City",
    icon: "fas fa-map-marker-alt",
  },*/
];

const Contact = () => {
  const [mailData, setMailData] = useState({
    name: "",
    email: "",
    message: "",
    subject: "",
  });
  const { name, email, subject, message } = mailData;
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const onChange = (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) => {
    setMailData({ ...mailData, [e.target.name]: e.target.value });
  };
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (
      name.length === 0 ||
      email.length === 0 ||
      message.length === 0 ||
      subject.length === 0
    ) {
      setError(true);
    } else {
      emailjs
        .send(
          "service_8c5xdk4", // service id
          "template_9dbg1bb", // template id
          mailData,
          "sqNESThEzjAfVL-J3" // public api
        )
        .then(
          (response) => {
            setError(false);
            setSuccess(true);
            setTimeout(() => {
              setSuccess(false);
            }, 3000);
            setMailData({ name: "", email: "", message: "", subject: "" });
          },
          (err) => {
            console.log(err.text);
          }
        );
    }
  };

  return (
    <section id="contactus" className="section contactus-section bg-gray">
      <div className="container">
        <SectionTitle
          heading={"Let's Work Together"}
          subHeading={"Contact Me"}
          text={""}
        />
        <div className="row">
          <div className="col-lg-6">
            <div className="contact-form">
              <h6>Get in touch</h6>
              <p className="lead">
                I would love to hear from you.
              </p>
              <form id="contact-form" onSubmit={(e) => onSubmit(e)}>
                <div className="row gx-3 gy-4">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label className="form-label">First name</label>
                      <input
                        name="name"
                        onChange={(e) => onChange(e)}
                        value={name}
                        id="name"
                        placeholder="Name *"
                        className={`form-control ${
                          error ? (name.length !== 0 ? "" : "invalid") : ""
                        }`}
                        type="text"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label className="form-label">Your Email</label>
                      <input
                        name="email"
                        onChange={(e) => onChange(e)}
                        value={email}
                        id="email"
                        placeholder="Email *"
                        className={`form-control ${
                          error ? (email.length !== 0 ? "" : "invalid") : ""
                        }`}
                        type="email"
                      />
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-group">
                      <label className="form-label">Subject</label>
                      <input
                        name="subject"
                        onChange={(e) => onChange(e)}
                        value={subject}
                        id="subject"
                        placeholder="Subject *"
                        className={`form-control ${
                          error ? (subject.length !== 0 ? "" : "invalid") : ""
                        }`}
                        type="text"
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-group">
                      <label className="form-label">Your message</label>
                      <textarea
                        name="message"
                        onChange={(e) => onChange(e)}
                        value={message}
                        id="message"
                        placeholder="Your message *"
                        rows={3}
                        className={`form-control ${
                          error ? (message.length !== 0 ? "" : "invalid") : ""
                        }`}
                      />
                    </div>
                    <span
                      id="suce_message"
                      className="text-success"
                      style={{ display: success ? "block" : "none" }}
                    >
                      Message Sent Successfully
                    </span>
                  </div>
                  <div className="col-md-12">
                    <div className="send">
                      <button
                        className="px-btn px-btn-theme2"
                        type="submit"
                        value="Send"
                      >
                        {" "}
                        Send Message
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="col-lg-5 ms-auto pt-5 pt-lg-0">
            <ul className="contact-infos">
              {contactInfo.map((contact) => (
                <li key={contact.id}>
                  {/* <div className="icon">
                    <i className={contact.icon} /> add back if you add this data back to contactInfo 
                  </div>*/}
                  {/*<p><div className="col">
                    <h5>{contact.label}</h5>
                    {contact.value}</p> add back if you add this data back to contactInfo 
                  </div>*/}
                </li>
              ))}
            </ul>
            <div className="text-center pt-5">
              <img src="assets/svg/effect-2.svg" className="svg" alt="image" />
              <img src="assets/svg/contact.svg" className="svg" alt="image" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Contact;
