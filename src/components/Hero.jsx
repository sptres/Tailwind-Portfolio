import heroImg from '../assets/hero.svg';
import { FaGithubSquare, FaLinkedin, FaTwitterSquare } from 'react-icons/fa';

const Hero = () => {
  return (
    <div className="bg-orange-100 py-24">
      <div className="align-element grid md:grid-cols-2 items-center gap-8">
        <article>
          <h1 className="text-7xl font-bold tracking-wider">
            Shawn <span className="text-orange-500">Park</span>
          </h1>
          <p className="mt-4 text-3xl text-slate-700 capitalize tracking-wide">
            Full-Stack Developer
          </p>
          <p className="mt-2 text-lg text-slate-700 capitalize tracking-wide">
            making life easier one step at a time
          </p>
          <div className="flex gap-x-4 mt-4">
            <a href="https://github.com/sptres">
              <FaGithubSquare className="h-8 w-8 text-orange-400 hover:text-black duration-300" />
            </a>
            <a href="https://www.linkedin.com/in/seunghyukpark/">
              <FaLinkedin className="h-8 w-8 text-orange-400 hover:text-black duration-300" />
            </a>
            <a href="https://x.com/SPBuildThings">
              <FaTwitterSquare className="h-8 w-8 text-orange-400 hover:text-black duration-300" />
            </a>
          </div>
        </article>
        <article className="hidden md:block">
          <img src={heroImg} className="h-80 lg:h-96" />
        </article>
      </div>
    </div>
  );
};

export default Hero;
