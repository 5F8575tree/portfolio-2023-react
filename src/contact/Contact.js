const Contact = () => {
  return (
    <div className="contact">
      <h1 className="contact_title">Hire me for your next amazing project</h1>
      <div className="contact_text">
        <p className="contact_text-top">
          Let's make something new, different and more meaningful!
        </p>
        <p className="contact_text_bottom">
          {" "}
          I'm always excited to hear new ideas, or even just a friendly{" "}
          <span>'Hello!'</span>
        </p>
      </div>
      <div className="hero_btn">
        <p>Hire Me!</p>
      </div>
      <a
        href="mailto:mark.jeffrey.rawlins@gmail.com"
        target="_blank"
        rel="noreferrer"
        className="email_link"
      >
        mark.jeffrey.rawlins@gmail.com
      </a>
    </div>
  );
};

export default Contact;
