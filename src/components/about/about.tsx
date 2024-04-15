import "./about.scss";
import helloText from "../../assets/homepage/hello-site.png";

export const AboutMe = () => {
  return (
    <section id="about">
      <div className="textContainer">
        <fieldset>
          <legend>
            <h1>
              <img src={helloText} />
            </h1>
          </legend>
          <p>
            My name is Zoe, and I'm a passionate web developer based in
            Stockholm. I'm quickly approaching my graduation as a full-stack
            developer from Medieinstitutet, specializing in web development
            within e-commerce.
            <br />
            <br />
            Throughout my education, I've worked with a variety of programming
            languages and technologies, including HTML, CSS/SCSS, JavaScript,
            TypeScript, APIs, databases, PHP, Node.js, Express, React, and
            Wordpress. My diverse experience prepares me to tackle new
            challenges and continue developing my skills in web development.
            <br />
            <br />
            I'm a creative problem-solver who loves taking on new challenges.
            Building and designing websites is something I'm passionate about,
            with a particular focus on frontend development.
            <br />
            <br />
            To see examples of my projects click <a href="#projects">here.</a>
          </p>
        </fieldset>
      </div>
    </section>
  );
};
