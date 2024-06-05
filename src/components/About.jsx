import aboutSvg from '../assets/about.svg';
import SectionTitle from './SectionTitle';

const About = () => {
  return (
    <section className="bg-white py-20" id="about">
      <div className="align-element grid md:grid-cols-2 items-center gap-16">
        <img src={aboutSvg} className="w-full h-64" />
        <article>
          <SectionTitle text="design and build" />
          <p className="text-slate-600 mt-8 leading-loose">
            With a strong foundation in HTML, CSS, and JavaScript, I create
            engaging and responsive web designs. My expertise in TypeScript and
            React allows me to build dynamic, component-based front-end
            applications, while my skills in Node.js ensure robust back-end
            solutions. I leverage Python for efficient data manipulation and
            algorithms, and manage databases effectively with MongoDB and
            PostgreSQL to deliver comprehensive web solutions.
          </p>
        </article>
      </div>
    </section>
  );
};

export default About;
