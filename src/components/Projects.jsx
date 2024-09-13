import ProjectItem from "./ProjectItem";
import styles from "./Projects.module.css";
import TicTacToeLogo from "./../assets/tic-tac-toe-screenshot.png";
import TailwindLandingPageScreenshot from "./../assets/tailwind-landing-page-screenshot.png";
import Positivus from "./../assets/positivus.png";

export default function Projects() {
  return (
    <>
      <section id="projects-section" className={styles.project}>
        <article className={styles.fullWidth}>
          <h1>Projects</h1>

          <div className={styles.gridContainer}>
            <ProjectItem
              name="Tic-Tac-Toe"
              description="This is a tic-tac-toe game. Created with Vite + Typescript and ReactJS. "
              image={TicTacToeLogo}
              tags={["ReactJS", "Typescript", "Javascript", "HTML", "CSS"]}
              preview={"https://tic-tac-toe-five-inky.vercel.app/"}
              github={"https://github.com/proverbed/tic-tac-toe"}
            />

            <ProjectItem
              name="Tailwind CSS - Landing Page"
              description="A fully responsive landing page, created with a Tailwind CSS crash course. I've made some improvements to the course."
              image={TailwindLandingPageScreenshot}
              tags={[
                "ReactJS",
                "Typescript",
                "Javascript",
                "Tailwind CSS",
                "HTML",
                "CSS",
              ]}
              preview={"https://tailwind-landing-page-crash-course.vercel.app/"}
              github={
                "https://github.com/proverbed/tailwind-landing-page-crash-course"
              }
            />

            <ProjectItem
              name="Positivus - Digital Marketing Agency Landing Page"
              description="A fully responsive landing page, this design was taken from a free figma design. Taken from figma to HTML. Positivus is a beautiful and functional landing page created for digital marketing agencies. This landing page has a clean and modern design, and the different sections
are all fully responsive and optimized for different screen sizes.

Landing page to showcase my skills and knowledge on web development using React JS and Tailwind CSS"
              image={Positivus}
              tags={[
                "ReactJS",
                "Typescript",
                "Tailwind CSS",
              ]}
              preview={"https://positivus-design-agency.vercel.app/"}
              github={
                "https://github.com/proverbed/Positivus-DesignAgency"
              }
            />
          </div>
        </article>
      </section>
    </>
  );
}
