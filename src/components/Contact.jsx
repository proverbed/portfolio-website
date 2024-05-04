import styles from "./Contact.module.css";

export default function Contact() {
  return (
    <>
      <section id="contact-section" className={styles.contact}>
        <article>
          <h1>Let's Work Together...</h1>

          <p>
            Whether you are starting a project, have business inquiries or just
            want to say hi, my inbox is always open so feel free to reach out
            and I will get back to you as soon as possible.
          </p>

          <div className={styles.buttonContainer}>
            <a
              href="mailto:dmitriwarren@gmail.com"
              className={styles.contactButton}
            >
              Send a mail
            </a>
          </div>

          {/* <div className={styles.buttonContainer}>
            <a
              href="mailto:dmitriwarren@gmail.com"
              className={styles.contactButton}
            >
              LinkedIn
            </a>
          </div>

          <div className={styles.buttonContainer}>
            <a
              href="mailto:dmitriwarren@gmail.com"
              className={styles.contactButton}
            >
              Github
            </a>
          </div> */}
        </article>
      </section>
    </>
  );
}
