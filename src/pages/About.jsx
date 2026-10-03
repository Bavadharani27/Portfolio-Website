import PageHero from "../components/PageHero";


function About() {

  return (

    <>

      <PageHero
        eyebrow="ABOUT ME"
        title="A developer focused on building for the web."
        text="Professional profile and career objective."
      />


      <section className="section">

        <div className="container two-col">

          <article className="glass-card reveal">

            <span className="eyebrow">
              PROFESSIONAL SUMMARY
            </span>

            <p className="large-copy">

              Motivated B.E. Electronics & Communication Engineering graduate with a strong foundation in HTML, CSS, JavaScript, React.js, Node.js, Express.js and MongoDB. Familiar with developing responsive web applications, REST APIs and database integration. Quick learner with good problem-solving and teamwork skills, seeking an entry-level opportunity to apply technical knowledge and grow as a software professional.

            </p>

          </article>


          <article className="glass-card accent-card reveal delay-1">

            <span className="eyebrow">
              ROLE
            </span>

            <h2>
              MERN Stack / Frontend Developer
            </h2>

            <p>
              Focused on responsive interfaces,
              full-stack application development,
              API integration and database-backed
              applications.
            </p>


            <div className="mini-stats">

              <div>
                <strong>
                  8.2
                </strong>

                <span>
                  CGPA / 10
                </span>
              </div>


              <div>
                <strong>
                  3
                </strong>

                <span>
                  Featured Projects
                </span>
              </div>


              <div>
                <strong>
                  MERN
                </strong>

                <span>
                  Development
                </span>
              </div>

            </div>

          </article>

        </div>

      </section>

    </>

  );
}


export default About;