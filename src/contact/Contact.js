const Contact = () => {
  return (
    <div className="contact">
      <h1 className="contact_title">
        <span className="underline--small">Hire me</span> for your next amazing
        project
      </h1>
      <div className="contact_text">
        <p className="contact_text-top">
          Let's make something new, different and more meaningful!
        </p>
        <p className="contact_text_bottom">
          {" "}
          I'm always excited to hear new ideas, or even just a friendly{" "}
          <span className="underline--small">'Hello!'</span>
        </p>
      </div>
      <a
        href="mailto:mark.jeffrey.rawlins@gmail.com"
        target="_blank"
        rel="noreferrer"
        className="hero_btn"
      >
        <p>Hire Me!</p>
      </a>
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
