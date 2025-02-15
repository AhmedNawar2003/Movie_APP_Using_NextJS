import Link from "next/link";
import styles from "./about.module.css";
export default function About() {
  return (
    <div className={`${styles.about}`}>
      <h1 className={`${styles.head}`}>About Page</h1>
      <p className={`${styles.paragraph}`}>
        This is the About page of the movie app.
      </p>
      <p className={`${styles.paragraph}`}>
        Feel free to explore and enjoy the movies.
      </p>
      <p className={`${styles.paragraph}`}>Powered by Next.js and React.</p>
      <p className={`${styles.paragraph}`}>
        Visit
        <Link
          className={`${styles.link}`}
          href="https://github.com/AhmedNawar2003/Movie_APP_Using_NextJS"
          target="_blank"
        >
          GitHub Repo
        </Link>
        for more details.
      </p>
    </div>
  );
}
