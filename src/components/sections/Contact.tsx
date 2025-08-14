import ContactForm from './contact/ContactForm';

const Contact = () => {


    return (
        <section id="contact">
              <div className="contain" role="presentation">
                  <h2>Let's Conenct</h2>
                  <p>Fill out the form below, and I'll be in touch.</p>
                  <ContactForm id="contact-form" method="post" />
              </div>
        </section>
    )
}

export default Contact;