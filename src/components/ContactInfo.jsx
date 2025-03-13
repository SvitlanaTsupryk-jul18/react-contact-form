import phone from "../assets/phone.svg";
import email from "../assets/email.svg";
import location from "../assets/location.svg";
import twitter from "../assets/twitter.svg";
import instagram from "../assets/instagram.svg";
import discord from "../assets/discord.svg";

const ContactInfo = () => {
  return (
    <div className="contact-info">
      <div>
        <h2>Contact Information</h2>
        <p>Say something to start a live chat!</p>
      </div>
      <div>
        <a href="tel:+380730008604" className="contact-link">
          <img className="open-icon" src={phone} />
          <span>+1012 3456 789</span>
        </a>
        <a href="mailto:demo@gmail.com" className="contact-link">
          <img className="open-icon" src={email} />
          <span>demo@gmail.com</span>
        </a>
        <a
          href="https://www.google.com/maps/place/132+Dartmouth+St,+Boston,+MA+02116,+USA/@42.3467604,-71.0761182,17z/data=!3m1!4b1!4m6!3m5!1s0x89e37a0d715622b3:0x5b2af19970952585!8m2!3d42.3467604!4d-71.0761182!16s%2Fg%2F11c1zptc6r?entry=ttu&g_ep=EgoyMDI1MDMxMC4wIKXMDSoASAFQAw%3D%3D"
          className="contact-link"
          target="_blank"
        >
          <img className="open-icon" src={location} />
          <span>
            132 Dartmouth Street Boston,
            <br /> Massachusetts 02156 United States
          </span>
        </a>
      </div>
      <div className="contact-socials">
        <a href="https://twitter.com/" className="contact-social" target="_blank">
          <img className="open-icon" src={twitter} />
        </a>
        <a href="https://instagram.com/" className="contact-social" target="_blank">
          <img className="open-icon" src={instagram} />
        </a>
        <a href="https://discord.com/" className="contact-social" target="_blank">
          <img className="open-icon" src={discord} />
        </a>
      </div>
    </div>
  );
};

export default ContactInfo;
