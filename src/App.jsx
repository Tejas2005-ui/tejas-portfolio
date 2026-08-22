import { useState } from "react";
import Navbar from "./components/navbar/Navbar";
import "./App.css";

function App() {

  const [messageSent, setMessageSent] = useState(false);

  return (
    <>
      <Navbar />


      <main>

        {/* ================= HOME ================= */}
        <section id="home" className="hero-section">
          <div className="hero-container">

            {/* Left Content */}
            <div className="hero-content">

              <p className="hero-intro">
                HELLO, I'M
              </p>

              <h1 className="hero-title">
                Tejas
                <br />
                Patil<span>.</span>
              </h1>

              <h2 className="hero-role">
                Full Stack Developer
              </h2>

              <p className="hero-description">
                I build modern, responsive and scalable web applications
                with clean code and thoughtful user experiences.
              </p>

              <div className="hero-buttons">

                <a href="#projects" className="primary-btn">
                  View Projects
                </a>

                <a href="#contact" className="secondary-btn">
                  Contact Me
                </a>

              </div>

            </div>


            {/* Right Visual */}
            <div className="hero-visual">

              <div className="hero-glow"></div>

              <div className="orbit orbit-one"></div>
              <div className="orbit orbit-two"></div>

              <div className="hero-center">
                TP
              </div>

            </div>

          </div>
        </section>

        {/* ================================
    ABOUT SECTION
================================ */}


        <section id="about" className="about-section">
          <div className="about-container">

            {/* Section Heading */}
            <div className="section-heading">
              <p className="section-label">ABOUT ME</p>

              <h2>
                Building with <span>purpose.</span>
              </h2>

              <p className="section-subtitle">
                A little more about me and what I do.
              </p>
            </div>


            {/* About Content */}
            <div className="about-grid">

              {/* Left */}
              <div className="about-content">

                <h3>
                  I'm a passionate developer who loves
                  turning ideas into digital experiences.
                </h3>

                <p>
                  I'm Tejas Patil, a Full Stack Developer
                  focused on building modern, responsive and
                  user-friendly web applications.
                </p>

                <p>
                  I enjoy working with frontend technologies,
                  learning backend development and creating
                  clean, scalable solutions to real-world
                  problems.
                </p>

                <p>
                  I'm continuously improving my skills through
                  practical projects, coding practice and
                  learning new technologies.
                </p>

                <a href="#contact" className="about-btn">
                  Let's Work Together
                  <span>↗</span>
                </a>

              </div>


              {/* Right */}
              <div className="about-card">

                <div className="about-card-top">
                  <span className="about-dot"></span>

                  <span>PROFILE</span>
                </div>


                <div className="profile-info">

                  <div className="profile-row">
                    <span>Name</span>
                    <strong>Tejas Patil</strong>
                  </div>

                  <div className="profile-row">
                    <span>Role</span>
                    <strong>Full Stack Developer</strong>
                  </div>

                  <div className="profile-row">
                    <span>Focus</span>
                    <strong>Web Development</strong>
                  </div>

                  <div className="profile-row">
                    <span>Experience</span>
                    <strong>Internship + Projects</strong>
                  </div>

                  <div className="profile-row">
                    <span>Availability</span>
                    <strong className="available">
                      Available
                    </strong>
                  </div>

                </div>


                {/* Small Stats */}
                <div className="about-stats">

                  <div className="about-stat">
                    <strong>01+</strong>
                    <span>Internship</span>
                  </div>

                  <div className="about-stat">
                    <strong>10+</strong>
                    <span>Technologies</span>
                  </div>

                  <div className="about-stat">
                    <strong>∞</strong>
                    <span>Learning</span>
                  </div>

                </div>

              </div>

            </div>

          </div>
        </section>

        {/* ================================
    SKILLS SECTION
================================ */}

        <section id="skills" className="skills-section">
          <div className="skills-container">

            {/* Heading */}
            <div className="section-heading">
              <p className="section-label">MY SKILLS</p>

              <h2>
                Tools I <span>build with.</span>
              </h2>

              <p className="section-subtitle">
                Technologies and tools I use to design, develop and
                deploy modern web applications.
              </p>
            </div>


            {/* Skills Grid */}
            <div className="skills-grid">

              {/* MongoDB */}
              <div className="skill-card">
                <div className="skill-icon mongodb-icon">
                  M
                </div>

                <div className="skill-info">
                  <h3>MongoDB</h3>
                  <p>NoSQL Database</p>
                </div>

                <span className="skill-number">01</span>
              </div>


              {/* Express */}
              <div className="skill-card">
                <div className="skill-icon express-icon">
                  EX
                </div>

                <div className="skill-info">
                  <h3>Express.js</h3>
                  <p>Backend Framework</p>
                </div>

                <span className="skill-number">02</span>
              </div>


              {/* React */}
              <div className="skill-card">
                <div className="skill-icon react-icon">
                  ⚛
                </div>

                <div className="skill-info">
                  <h3>React.js</h3>
                  <p>Frontend Library</p>
                </div>

                <span className="skill-number">03</span>
              </div>


              {/* Node */}
              <div className="skill-card">
                <div className="skill-icon node-icon">
                  N
                </div>

                <div className="skill-info">
                  <h3>Node.js</h3>
                  <p>JavaScript Runtime</p>
                </div>

                <span className="skill-number">04</span>
              </div>


              {/* JavaScript */}
              <div className="skill-card">
                <div className="skill-icon javascript-icon">
                  JS
                </div>

                <div className="skill-info">
                  <h3>JavaScript</h3>
                  <p>Programming Language</p>
                </div>

                <span className="skill-number">05</span>
              </div>


              {/* HTML */}
              <div className="skill-card">
                <div className="skill-icon html-icon">
                  5
                </div>

                <div className="skill-info">
                  <h3>HTML5</h3>
                  <p>Web Structure</p>
                </div>

                <span className="skill-number">06</span>
              </div>


              {/* CSS */}
              <div className="skill-card">
                <div className="skill-icon css-icon">
                  #
                </div>

                <div className="skill-info">
                  <h3>CSS3</h3>
                  <p>Web Styling</p>
                </div>

                <span className="skill-number">07</span>
              </div>


              {/* Tailwind */}
              <div className="skill-card">
                <div className="skill-icon tailwind-icon">
                  ~
                </div>

                <div className="skill-info">
                  <h3>Tailwind CSS</h3>
                  <p>CSS Framework</p>
                </div>

                <span className="skill-number">08</span>
              </div>

              {/* Next.js */}
              <div className="skill-card">
                <div className="skill-icon nextjs-icon">
                  N
                </div>

                <div className="skill-info">
                  <h3>Next.js</h3>
                  <p>React Framework</p>
                </div>

                <span className="skill-number">09</span>
              </div>

              {/* Git */}
              <div className="skill-card">
                <div className="skill-icon git-icon">
                  Git
                </div>

                <div className="skill-info">
                  <h3>Git</h3>
                  <p>Version Control</p>
                </div>

                <span className="skill-number">10</span>
              </div>


              {/* GitHub */}
              <div className="skill-card">
                <div className="skill-icon github-icon">
                  GH
                </div>

                <div className="skill-info">
                  <h3>GitHub</h3>
                  <p>Code Hosting</p>
                </div>

                <span className="skill-number">11</span>
              </div>


              {/* REST API */}
              <div className="skill-card">
                <div className="skill-icon api-icon">
                  API
                </div>

                <div className="skill-info">
                  <h3>REST APIs</h3>
                  <p>API Development</p>
                </div>

                <span className="skill-number">12</span>
              </div>


              {/* Responsive Design */}
              <div className="skill-card">
                <div className="skill-icon responsive-icon">
                  ↗
                </div>

                <div className="skill-info">
                  <h3>Responsive Design</h3>
                  <p>Mobile First</p>
                </div>

                <span className="skill-number">13</span>
              </div>

            </div>

          </div>
        </section>

        {/* ================= PROJECTS ================= */}

        {/* ================= PROJECTS ================= */}

        <section id="projects" className="projects-section">
          <div className="projects-container">

            {/* Section Heading */}
            <div className="section-heading projects-heading">
              <p className="section-label">03 — PROJECTS</p>

              <h2>
                Things I've <span>built.</span>
              </h2>

              <p className="section-subtitle">
                A selection of projects I've worked on and continue to improve.
              </p>
            </div>


            {/* Featured Project */}
            <div className="featured-project">

              {/* Project Visual */}
              <div className="project-visual">

                <div className="project-browser">

                  <div className="browser-top">
                    <div className="browser-dots">
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>

                    <div className="browser-address">
                      tejas-portfolio
                    </div>
                  </div>


                  <div className="browser-content">

                    <div className="browser-nav">
                      <strong>TEJAS<span>.</span></strong>

                      <div className="browser-nav-links">
                        <span>Home</span>
                        <span>About</span>
                        <span>Skills</span>
                        <span>Projects</span>
                      </div>
                    </div>


                    <div className="browser-hero">

                      <div className="browser-hero-text">
                        <small>HELLO, I'M</small>

                        <h3>
                          Tejas<br />
                          Patil<span>.</span>
                        </h3>

                        <p>Full Stack Developer</p>

                        <div className="browser-button">
                          View Projects
                        </div>
                      </div>


                      <div className="browser-orbit">
                        <div className="browser-orbit-ring ring-one"></div>
                        <div className="browser-orbit-ring ring-two"></div>

                        <div className="browser-center">
                          TP
                        </div>
                      </div>

                    </div>

                  </div>

                </div>

              </div>


              {/* Project Information */}
              <div className="project-details">

                <div className="project-number">
                  01
                </div>

                <p className="project-type">
                  PERSONAL PROJECT
                </p>

                <h3>
                  Developer
                  <span> Portfolio.</span>
                </h3>

                <p className="project-description">
                  A modern, responsive personal portfolio website designed
                  and developed to showcase my skills, experience and
                  development journey as a Full Stack Developer.
                </p>


                {/* Technologies */}
                <div className="project-tech-stack">

                  <span>React.js</span>
                  <span>JavaScript</span>
                  <span>HTML5</span>
                  <span>CSS3</span>
                  <span>Next.js</span>
                  <span>Git</span>

                </div>


                {/* Project Actions */}
                <div className="project-actions">

                  <a
                    href="#home"
                    className="project-primary-btn"
                  >
                    View Live
                    <span>↗</span>
                  </a>

                  <a
                    href="https://github.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-secondary-btn"
                  >
                    GitHub
                    <span>↗</span>
                  </a>

                </div>

              </div>

            </div>

          </div>
        </section>


        {/* ================= EXPERIENCE ================= */}

        <section id="experience" className="experience-section">
          <div className="experience-container">

            {/* Heading */}
            <div className="section-heading">
              <p className="section-label">EXPERIENCE</p>

              <h2>
                Learning through
                <span> experience.</span>
              </h2>

              <p className="section-subtitle">
                My practical learning journey in web development.
              </p>
            </div>


            {/* Single Internship */}
            <div className="experience-card">

              {/* Left Side */}
              <div className="experience-main">

                <div className="experience-top">
                  <span className="experience-status">
                    ONLINE INTERNSHIP
                  </span>

                  <span className="experience-duration">
                    03 MONTHS
                  </span>
                </div>


                <h3>
                  Web Development Internship
                </h3>

                <p className="experience-type">
                  Frontend Web Development
                </p>


                <p className="experience-description">
                  Completed a 3-month online Web Development Internship
                  focused on learning and practicing frontend development.
                  Gained hands-on experience with HTML, CSS, JavaScript
                  and React.js while developing responsive and user-friendly
                  web interfaces.
                </p>


                {/* Technologies */}
                <div className="experience-tech">
                  <span>HTML</span>
                  <span>CSS</span>
                  <span>JavaScript</span>
                  <span>React.js</span>
                </div>


                {/* Certificate Button */}
                <a
                  href="https://drive.google.com/file/d/1teBiyJy7tPt1il-_-lcbBz3UogRGJwxK/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="certificate-btn"
                >
                  View Certificate
                  <span>↗</span>
                </a>

              </div>


              {/* Right Side */}
              <div className="experience-number">
                <strong>01</strong>
                <span>INTERNSHIP</span>
              </div>

            </div>

          </div>
        </section>

        {/* ================= BLOG ================= */}

        <section id="blog" className="blog-section">
          <div className="blog-container">

            {/* Section Heading */}
            <div className="section-heading">
              <p className="section-label">MY JOURNEY</p>

              <h2>
                From learning the web
                <span> to building with MERN.</span>
              </h2>

              <p className="section-subtitle">
                A short story about my journey into web development
                and where I'm heading next.
              </p>
            </div>


            {/* Journey Content */}
            <div className="blog-content">

              <div className="blog-story">

                <p>
                  My journey into web development started with curiosity
                  and a 3-month online internship, where I built my
                  foundation in HTML, CSS, JavaScript and React.js.
                  That experience helped me understand how modern
                  websites are designed and developed.
                </p>

                <p>
                  I then continued my learning through online resources
                  and expanded my skills into MERN Stack Development —
                  working with MongoDB, Express.js, React.js and Node.js.
                  Along the way, I focused on understanding how frontend
                  and backend technologies work together to create
                  complete web applications.
                </p>

                <p>
                  But learning doesn't stop with a stack or a certificate.
                  Technology keeps evolving, and so do I. I'm continuing
                  to explore modern tools, frameworks and better ways of
                  building clean, responsive and meaningful digital
                  experiences.
                </p>

                <div className="blog-highlight">
                  The goal isn't to know everything. It's to keep building,
                  keep learning, and keep getting better.
                </div>

              </div>


              {/* Journey Timeline */}
              <div className="journey-timeline">

                {/* 01 */}
                <div className="journey-item">

                  <div className="journey-number">
                    01
                  </div>

                  <div className="journey-line"></div>

                  <div className="journey-info">
                    <span className="journey-stage">
                      FOUNDATION
                    </span>

                    <h3>
                      Web Development Internship
                    </h3>

                    <p>
                      Built my foundation in modern web development
                      through a 3-month online internship.
                    </p>

                    <div className="journey-tech">
                      <span>HTML</span>
                      <span>CSS</span>
                      <span>JavaScript</span>
                      <span>React.js</span>
                    </div>
                  </div>

                </div>


                {/* 02 */}
                <div className="journey-item">

                  <div className="journey-number">
                    02
                  </div>

                  <div className="journey-line"></div>

                  <div className="journey-info">
                    <span className="journey-stage">
                      EXPANSION
                    </span>

                    <h3>
                      MERN Stack Development
                    </h3>

                    <p>
                      Expanded my development skills through online
                      resources and learned how frontend and backend
                      technologies work together.
                    </p>

                    <div className="journey-tech">
                      <span>MongoDB</span>
                      <span>Express.js</span>
                      <span>React.js</span>
                      <span>Node.js</span>
                    </div>
                  </div>

                </div>


                {/* 03 */}
                <div className="journey-item last">

                  <div className="journey-number">
                    03
                  </div>

                  <div className="journey-info">
                    <span className="journey-stage">
                      CONTINUING
                    </span>

                    <h3>
                      Growing toward becoming an SDE
                    </h3>

                    <p>
                      Continuing to improve my problem-solving and
                      software development skills while exploring
                      modern web technologies and building better
                      digital experiences.
                    </p>

                    <div className="journey-tech">
                      <span>Problem Solving</span>
                      <span>Software Development</span>
                      <span>Continuous Learning</span>
                    </div>
                  </div>

                </div>

              </div>

            </div>

          </div>
        </section>

        {/* ================= CONTACT ================= */}

        <section id="contact" className="contact-section-wrapper">

          <div className="contact-container">

            {/* Section Heading */}
            <div className="contact-heading">

              <p className="section-label">
                06 — CONTACT
              </p>

              <h2>
                Let's build something
                <span> great together.</span>
              </h2>

              <p className="contact-intro">
                I'm open to opportunities, internships, collaborations
                and interesting projects. If you'd like to connect,
                feel free to reach out.
              </p>

              <div className="contact-availability">
                <span className="availability-dot"></span>
                AVAILABLE FOR OPPORTUNITIES
              </div>

            </div>


            {/* Contact Form */}
            <div className="contact-form-card">

              <div className="contact-form-header">
                <div>
                  <p className="form-label">
                    GET IN TOUCH
                  </p>

                  <h3>
                    Send me a message.
                  </h3>
                </div>
              </div>

              <form onSubmit={async (e) => {
                e.preventDefault();

                const formData = new FormData(e.target);

                const data = {
                  name: formData.get("name"),
                  email: formData.get("email"),
                  subject: formData.get("subject"),
                  message: formData.get("message"),
                };

                try {
                  const response = await fetch("http://localhost:5000/api/contact", {
                    method: "POST",
                    headers: {
                      "Content-Type": "application/json",
                    },
                    body: JSON.stringify(data),
                  });

                  const result = await response.json();

                  if (response.ok) {
                    setMessageSent(true);
                    e.target.reset();

                    setTimeout(() => {
                      setMessageSent(false);
                    }, 5000);
                  } else {
                    alert(result.message || "Something went wrong.");
                  }
                } catch (error) {
                  console.error("Error:", error);
                  alert("Unable to connect to the server.");
                }
              }}>


              {/* Name + Email */}
              <div className="form-row">

                <div className="form-group">

                  <label htmlFor="name">
                    Name
                  </label>

                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Your name"
                    required
                  />

                </div>


                <div className="form-group">

                  <label htmlFor="email">
                    Email
                  </label>

                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="your@email.com"
                    required
                  />

                </div>

              </div>


              {/* Subject */}
              <div className="form-group">

                <label htmlFor="subject">
                  Subject
                </label>

                <input
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder="What would you like to discuss?"
                  required
                />

              </div>


              {/* Message */}
              <div className="form-group">

                <label htmlFor="message">
                  Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows="6"
                  placeholder="Tell me about your project, opportunity or idea..."
                  required
                ></textarea>

              </div>


              {/* Submit */}
              <button
                type="submit"
                className="contact-submit-btn"
              >
                Send Message
                <span>↗</span>
              </button>

              {messageSent && (
                <div className="form-success">
                  <span className="success-icon">✓</span>

                  <div>
                    <strong>Message sent successfully!</strong>
                    <p>
                      Thanks for reaching out. I'll get back to you soon.
                    </p>
                  </div>
                </div>
              )}

            </form>

          </div>


          {/* Contact Details */}
          <div className="contact-details">

            <div className="contact-detail">

              <span className="detail-label">
                EMAIL
              </span>

              <a href="mailto:tejaspatil02092005@gmail.com">
                tejaspatil02092005@gmail.com
              </a>

            </div>


            <div className="contact-detail">

              <span className="detail-label">
                LOCATION
              </span>

              <span>
                Mumbai, India
              </span>

            </div>


            <div className="contact-detail">

              <span className="detail-label">
                STATUS
              </span>

              <span className="status-text">
                Open to opportunities
              </span>


            </div>

          </div>

        </div>

      </section>

      {/* ================= FOOTER ================= */}

      <footer className="site-footer">

        <div className="footer-bottom">

          <p>
            © {new Date().getFullYear()} Tejas Patil. All rights reserved.
          </p>

          <p className="footer-made">
            Designed & Built with <span>♥</span> by Tejas Patil
          </p>

        </div>

      </footer>

    </main >
    </>
  );
}

export default App;