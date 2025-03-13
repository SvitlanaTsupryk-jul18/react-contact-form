import ContactInfo from "../components/ContactInfo";
import FormContact from "../components/FormContact";

const Contact = () => {
  return (
    <div className="container">
      <h1>Contact Us</h1>
      <p>Any question or remarks? Just write us a message!</p>
      <div className="contact-wrapper">
        <ContactInfo />
        <FormContact />
      </div>
    </div>
  );
};

export default Contact;
