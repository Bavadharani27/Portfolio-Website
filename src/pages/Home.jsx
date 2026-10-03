import {
  Link
} from "react-router-dom";


function GithubIcon() {

  return (

    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="currentColor"
    >

      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.09 3.29 9.4 7.86 10.92.57.1.78-.25.78-.55v-2.16c-3.2.7-3.87-1.35-3.87-1.35-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.75 1.18 1.75 1.18 1.02 1.75 2.68 1.25 3.34.96.1-.75.4-1.25.73-1.54-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.47.11-3.06 0 0 .96-.31 3.15 1.18a10.9 10.9 0 0 1 5.74 0c2.19-1.49 3.15-1.18 3.15-1.18.62 1.59.23 2.77.11 3.06.73.81 1.18 1.84 1.18 3.1 0 4.43-2.69 5.4-5.25 5.68.41.36.78 1.08.78 2.18v3.23c0 .31.21.66.79.55A11.52 11.52 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />

    </svg>

  );
}


function LinkedinIcon() {

  return (

    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="currentColor"
    >

      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.32 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM3.54 20.45H7.1V9H3.54v11.45ZM22.22 0H1.78C.8 0 0 .78 0 1.75v20.5C0 .78 0 1.75 1.78 0h20.44C23.2 0 24 .78 24 1.75v20.5C24 23.22 23.2 24 22.22 24Z" />

    </svg>

  );
}


function Home() {

  return (

    <>

      <section className="hero">

        <div className="hero-orb orb-one" />
        <div className="hero-orb orb-two" />


        <div className="container hero-grid">

          <div className="hero-copy reveal">

            <div className="availability">

              <span />

              Open to entry-level opportunities

            </div>


            <p className="eyebrow">
              HELLO, I'M BAVADHARANI
            </p>


            <h1>

              Building{" "}

              <span>
                modern web experiences
              </span>

              {" "}
              with clean code.

            </h1>


            <p className="hero-role">
              MERN Stack / Frontend Developer
            </p>


            <p className="hero-text">

              Motivated B.E. Electronics & Communication Engineering graduate with a strong foundation in HTML, CSS, JavaScript, React.js, Node.js, Express.js and MongoDB. Familiar with developing responsive web applications, REST APIs and database integration. Quick learner with good problem-solving and teamwork skills, seeking an entry-level opportunity to apply technical knowledge and grow as a software professional.

            </p>


            <div className="hero-buttons">

              <Link
                className="btn primary"
                to="/projects"
              >

                View Projects

                <span>
                  →
                </span>

              </Link>


              <Link
                className="btn secondary"
                to="/contact"
              >
                Contact Me
              </Link>

            </div>


            <div className="quick-links">

              <a
                href="https://github.com/Bavadharani27"
                target="_blank"
                rel="noreferrer"
              >

                <GithubIcon />

                GitHub

              </a>


              <a
                href="https://linkedin.com/in/bavadharani-m-919414338"
                target="_blank"
                rel="noreferrer"
              >

                <LinkedinIcon />

                LinkedIn

              </a>

            </div>

          </div>


          <div className="hero-visual reveal delay-1">

            <div className="code-card">

              <div className="code-top">

                <span />
                <span />
                <span />

              </div>


              <div className="code-body">

                <span className="code-purple">
                  const
                </span>

                {" "}developer = {"{"}

                <br />

                &nbsp;&nbsp;name:

                {" "}

                <span className="code-green">
                  "Bavadharani"
                </span>,

                <br />

                &nbsp;&nbsp;role:

                {" "}

                <span className="code-green">
                  "MERN Stack / Frontend Developer"
                </span>,

                <br />

                &nbsp;&nbsp;skills: [

                <span className="code-green">
                  "React"
                </span>,

                {" "}

                <span className="code-green">
                  "Node"
                </span>,

                {" "}

                <span className="code-green">
                  "MongoDB"
                </span>

                ]

                <br />

                {"}"};

              </div>


              <div className="floating-chip chip-a">
                ✦ React.js
              </div>


              <div className="floating-chip chip-b">
                ⚡ REST APIs
              </div>

            </div>

          </div>

        </div>

      </section>


      <section className="section">

        <div className="container">

          <div className="section-heading reveal">

            <span className="eyebrow">
              WHAT I DO
            </span>

            <h2>
              From interface to API.
            </h2>

            <p>
              I enjoy turning ideas into responsive,
              user-friendly web applications.
            </p>

          </div>


          <div className="feature-grid">

            <article className="feature-card reveal">

              <span className="number">
                01
              </span>

              <h3>
                Frontend Development
              </h3>

              <p>
                HTML5, CSS3, JavaScript and
                React.js with responsive web design.
              </p>

            </article>


            <article className="feature-card reveal">

              <span className="number">
                02
              </span>

              <h3>
                Full Stack Development
              </h3>

              <p>
                Node.js, Express.js, REST APIs
                and MongoDB for complete web
                applications.
              </p>

            </article>


            <article className="feature-card reveal">

              <span className="number">
                03
              </span>

              <h3>
                Real-World Projects
              </h3>

              <p>
                Role-based systems, finance tracking
                and modern responsive websites.
              </p>

            </article>

          </div>

        </div>

      </section>

    </>

  );
}


export default Home;