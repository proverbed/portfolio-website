import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <>
      <section id="home-section" className={styles.hero}>
        <article>
          <h1>Hi, my name is</h1>
          <h2>Dmitri De Klerk.</h2>
          <h3>I build things for the web.</h3>
          <p>I'm a software engineering based in Cape Town, South Africa.</p>
        </article>
      </section>
    </>
  );
}
