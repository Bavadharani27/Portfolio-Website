import PageHero from "../components/PageHero";


const experience = [

  {
    date: "08/2026 – 09/2026",

    title:
      "Front-End Development Intern – Sysslan IT Solutions 2026",

    bullets: [

      "Developed responsive and user-friendly web pages using HTML,CSS, and JavaScript.",

      "Implemented interactive UI elements and basic client-side functionality using JavaScript.",

      "Applied responsive design principles to create clean and consistent web interfaces."

    ]
  },


  {
    date: "04/2026 – 07/2026",

    title:
      "MERN Stack Development Training — QTree Technologies",

    bullets: [

      "Completed practical training in MongoDB, Express.js,React.js and Node.js.",

      "Developed frontend and full-stack applications using modern web development practices.",

      "Practiced REST API development, CRUD operations, authentication and database integration."

    ]
  }

];


function Experience() {

  return (

    <>

      <PageHero
        eyebrow="TRAINING & INTERNSHIP"
        title="Learning through practical work."
      />


      <section className="section">

        <div className="container timeline">

          {experience.map(
            (item, index) => (

              <article
                className="timeline-item reveal"
                key={item.title}
              >

                <div className="timeline-dot">
                  {index + 1}
                </div>


                <div className="timeline-content">

                  <span className="date">
                    {item.date}
                  </span>


                  <h2>
                    {item.title}
                  </h2>


                  <ul>

                    {item.bullets.map(
                      (bullet) => (

                        <li key={bullet}>
                          {bullet}
                        </li>

                      )
                    )}

                  </ul>

                </div>

              </article>

            )
          )}

        </div>

      </section>

    </>

  );
}


export default Experience;