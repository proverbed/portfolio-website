import styles from "./About.module.css";
import profilePic from "../assets/dmitri.jpeg";

export default function About() {
  return (
    <>
      <section id="about-section" className={styles.about}>
        <article>
          <h1>About Me</h1>

          <div className={styles.aboutSection}>
            <article className={styles.aboutDescription}>
              <p>
                Hello! My name is Dmitri and I enjoy creating things that live
                on the internet. My interest in web development started back in
                2009.
              </p>
              <p>
                Fast-forward to today, and I’ve had the privilege of working at
                nursing agency, a huge corporation, a start-up. 
              </p>
              
            </article>
            <article className={styles.aboutImage}>
              <div className={styles.pictureWrapper}>
                <img
                  className={styles.profilePic}
                  src={profilePic}
                  alt="profile pic"
                />
              </div>
            </article>
          </div>
        </article>
      </section>
    </>
  );
}
