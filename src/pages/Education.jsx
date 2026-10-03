import PageHero from "../components/PageHero";


function Education() {

  return (

    <>

      <PageHero
        eyebrow="EDUCATION & CERTIFICATE"
        title="Academic foundation."
      />


      <section className="section">

        <div className="container education-grid">

          <article className="edu-card reveal">

            <span className="eyebrow">
              EDUCATION
            </span>


            <h2>
              P.A. College of Engineering and Technology,
            </h2>


            <h3>
              Bachelor of Engineering – Electronics and Communication Engineering
            </h3>


            <div className="edu-meta">

              <span>
                CGPA: 8.2/10
              </span>

              <span>
                Aug/2022 – Apr/2026
              </span>

              <span>
                Pollachi
              </span>

            </div>

          </article>


          <article className="edu-card certificate reveal delay-1">

            <span className="eyebrow">
              CERTIFICATE
            </span>


            <h2>
              Ultimate Web Development Course 2026
            </h2>


            <p>
              Udemy | July 2026
            </p>

          </article>

        </div>

      </section>

    </>

  );
}


export default Education;