import { experience, education } from "@/data/portfolio";
import styles from "./Experience.module.css";

export default function Experience() {
  return (
    <section id="experience" className={`section ${styles.experience}`}>
      <div className="container">
        
        <div className={styles.grid}>
          {/* Work Experience */}
          <div>
            <div className={styles.sectionHeader}>
              <span className={styles.headerIcon}>💼</span>
              <h2 className="section-title" style={{ marginBottom: 0 }}>Experience</h2>
            </div>
            
            <div className={styles.timeline}>
              {experience.map((job) => (
                <div key={job.id} className={styles.item}>
                  <div className={styles.node} aria-hidden="true" />
                  
                  <div className={`glass ${styles.content}`}>
                    <div className={styles.itemHeader}>
                      <div>
                        <h3 className={styles.title}>{job.title}</h3>
                        <p className={styles.company}>
                          {job.companyUrl ? (
                            <a href={job.companyUrl} target="_blank" rel="noopener noreferrer">
                              {job.company}
                            </a>
                          ) : (
                            job.company
                          )}
                          <span className={styles.location}> • {job.location}</span>
                        </p>
                      </div>
                      <div className={styles.period}>{job.period}</div>
                    </div>
                    
                    <ul className={styles.descriptionList}>
                      {job.description.map((desc, i) => (
                        <li key={i}>{desc}</li>
                      ))}
                    </ul>
                    
                    <div className={styles.technologies}>
                      {job.technologies.map(tech => (
                        <span key={tech} className={styles.techBadge}>{tech}</span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <div className={styles.sectionHeader}>
              <span className={styles.headerIcon}>🎓</span>
              <h2 className="section-title" style={{ marginBottom: 0 }}>Education</h2>
            </div>
            
            <div className={styles.timeline}>
              {education.map((edu) => (
                <div key={edu.id} className={styles.item}>
                  <div className={styles.node} style={{ background: 'var(--color-purple)' }} aria-hidden="true" />
                  
                  <div className={`glass ${styles.content}`}>
                    <div className={styles.itemHeader}>
                      <div>
                        <h3 className={styles.title}>{edu.degree}</h3>
                        <p className={styles.company}>
                          {edu.institution}
                          <span className={styles.location}> • {edu.location}</span>
                        </p>
                      </div>
                      <div className={styles.period}>{edu.period}</div>
                    </div>
                    
                    {edu.gpa && (
                      <p className={styles.gpa}>GPA: <span>{edu.gpa}</span></p>
                    )}
                    
                    {(edu as any).highlights && (
                      <ul className={styles.descriptionList}>
                        {(edu as any).highlights.map((hlt: string, i: number) => (
                          <li key={i}>{hlt}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
