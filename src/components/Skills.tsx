import { skills } from "@/data/portfolio";
import styles from "./Skills.module.css";

export default function Skills() {
  return (
    <section id="skills" className={`section ${styles.skills}`}>
      {/* Subtle divider line */}
      <div className={styles.divider} aria-hidden="true" />

      <div className="container">
        <div className={styles.header}>
          <p className="section-label">Skills</p>
          <h2 className="section-title">
            Technologies I{" "}
            <span className="gradient-text">work with</span>
          </h2>
          <p className="section-subtitle">
            A curated set of tools and technologies I use to build modern, scalable applications.
          </p>
        </div>

        <div className={styles.grid}>
          {skills.map((group, i) => (
            <div
              key={group.category}
              className={`glass ${styles.card}`}
              style={{ animationDelay: `${i * 0.07}s` }}
            >
              <div className={styles.cardHeader}>
                <span className={styles.icon}>{group.icon}</span>
                <h3 className={styles.category}>{group.category}</h3>
              </div>
              <ul className={styles.items}>
                {group.items.map((item) => (
                  <li key={item} className={styles.item}>
                    <span className={styles.dot} aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
