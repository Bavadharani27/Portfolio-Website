import PageHero from "../components/PageHero";


const projects = [

  {
    no: "01",

    title:
      "Role-Based Attendance Management System",

    description:
      "Developed a MERN-based attendance system with separate login access for Students, Teachers and HM.Implemented attendance marking, profile management, attendance history and role-based dashboards.",

    tech:
      "React.js, Node.js, Express.js, MongoDB, JWT, Multer"
  },


  {
    no: "02",

    title:
      "Personal Finance Tracker",

    description:
      "Developed a responsive web application to manage personal income and expenses. Implemented add, edit, delete, search, and filter functionalities. Added budget tracking and expense visualization using Recharts.Used React Hooks and Local Storage for managing application data.",

    tech:
      "React.js, JavaScript, CSS, Local Storage, Recharts"
  },


  {
    no: "03",

    title:
      "Alora Grand Hotel Website",

    description:
      "Designed a responsive and modern hotel website with a clean user interface. Created sections for rooms, services, gallery, about, and contact.Implemented responsive layouts using CSS Flexbox and Grid. Focused on user-friendly navigation and attractive visual design.",

    tech:
      "HTML5, CSS3"
  },


  {
    no: "04",

    title:
      "Event Ticket Booking System",

    description:
      "Developed a responsive event ticket booking website with event details, ticket selection, form validation, and interactive features.",

    tech:
      "HTML5, CSS3, Javascript"
  }

];


function Projects() {

  return (

    <>

      <PageHero
        eyebrow="PROJECTS"
        title="Selected work."
        text="Project descriptions are kept as provided."
      />


      <section className="section">

        <div className="container project-list">

          {projects.map(
            (project) => (

              <article
                className="project-card reveal"
                key={project.title}
              >

                <div className="project-no">
                  {project.no}
                </div>


                <div className="project-main">

                  <div className="project-title-row">

                    <h2>
                      {project.title}
                    </h2>

                    <span className="project-arrow">
                      ↗
                    </span>

                  </div>


                  <p>
                    {project.description}
                  </p>


                  <div className="tech-line">

                    <strong>
                      Technologies:
                    </strong>

                    {" "}

                    {project.tech}

                  </div>

                </div>

              </article>

            )
          )}

        </div>

      </section>

    </>

  );
}


export default Projects;