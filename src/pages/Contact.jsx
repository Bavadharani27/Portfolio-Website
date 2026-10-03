import PageHero from "../components/PageHero";


const contacts = [

  {
    icon: "✉",
    label: "Email",
    value: "bavadharanibava6@gmail.com",
    href: "mailto:bavadharanibava6@gmail.com"
  },

  {
    icon: "☎",
    label: "Phone",
    value: "+91 7395811355",
    href: "tel:+917395811355"
  },

  {
    icon: "⌘",
    label: "GitHub",
    value: "github.com/Bavadharani27",
    href: "https://github.com/Bavadharani27"
  },

  {
    icon: "in",
    label: "LinkedIn",
    value:
      "linkedin.com/in/bavadharani-m-919414338",
    href:
      "https://linkedin.com/in/bavadharani-m-919414338"
  }

];


function Contact() {

  return (

    <>

      <PageHero
        eyebrow="CONTACT"
        title="Let’s connect."
        text="Open to entry-level opportunities and professional conversations."
      />


      <section className="section">

        <div className="container contact-grid">

          <div className="contact-copy reveal">

            <span className="eyebrow">
              GET IN TOUCH
            </span>


            <h2>
              Have an opportunity?
            </h2>


            <p>
              Feel free to reach out through
              email, phone, GitHub or LinkedIn.
            </p>


            <div className="location">

              <span>
                📍
              </span>

              <span>
                4/19 Main Road Ponnachiyur,
                Samathur, Coimbatore- 642123
              </span>

            </div>

          </div>


          <div className="contact-list">

            {contacts.map(
              (contact) => (

                <a
                  className="contact-card reveal"
                  href={contact.href}
                  target={
                    contact.href.startsWith(
                      "http"
                    )
                      ? "_blank"
                      : undefined
                  }
                  rel={
                    contact.href.startsWith(
                      "http"
                    )
                      ? "noreferrer"
                      : undefined
                  }
                  key={contact.label}
                >

                  <span className="contact-icon">
                    {contact.icon}
                  </span>


                  <span>

                    <small>
                      {contact.label}
                    </small>

                    <strong>
                      {contact.value}
                    </strong>

                  </span>


                  <span className="contact-arrow">
                    ↗
                  </span>

                </a>

              )
            )}

          </div>

        </div>

      </section>

    </>

  );
}


export default Contact;