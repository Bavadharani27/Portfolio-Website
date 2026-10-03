import PageHero from "../components/PageHero";


const groups = [

  [
    "Frontend",
    [
      "HTML5",
      "CSS3",
      "JavaScript",
      "React.js",
      "Responsive Web Design"
    ]
  ],

  [
    "Backend",
    [
      "Node.js",
      "Express.js",
      "REST APIs"
    ]
  ],

  [
    "Database",
    [
      "MongoDB"
    ]
  ],

  [
    "Programming",
    [
      "JavaScript"
    ]
  ],

  [
    "Authentication",
    [
      "JWT",
      "bcrypt.js"
    ]
  ],

  [
    "Tools",
    [
      "Git",
      "GitHub",
      "VS Code",
      "Postman"
    ]
  ],

  [
    "Concepts",
    [
      "CRUD",
      "API Integration",
      "JWT Authentication"
    ]
  ]

];


function Skills() {

  return (

    <>

      <PageHero
        eyebrow="TECHNICAL SKILLS"
        title="Tools I use to build."
        text="The technical skills listed in my resume."
      />


      <section className="section">

        <div className="container skills-grid">

          {groups.map(
            ([title, items], index) => (

              <article
                className="skill-card reveal"
                key={title}
              >

                <div className="skill-icon">

                  {String(index + 1).padStart(
                    2,
                    "0"
                  )}

                </div>


                <h3>
                  {title}
                </h3>


                <div className="tags">

                  {items.map(
                    (item) => (

                      <span key={item}>
                        {item}
                      </span>

                    )
                  )}

                </div>

              </article>

            )
          )}

        </div>

      </section>

    </>

  );
}


export default Skills;