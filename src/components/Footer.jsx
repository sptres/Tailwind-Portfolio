import { FaGithubSquare, FaLinkedin, FaTwitterSquare } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-orange-100 py-8">
      <div className="align-element flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div className="text-center sm:text-left">
          <h2 className="text-3xl font-bold">
            SP<span className="text-orange-600">Code</span>
          </h2>
          <p className="text-slate-700 mt-2">
            © {new Date().getFullYear()} Shawn Park. All rights reserved.
          </p>
        </div>
        <div className="flex justify-center sm:justify-start mt-4 sm:mt-0 gap-x-4">
          <a href="https://github.com/sptres" aria-label="GitHub">
            <FaGithubSquare className="h-8 w-8 text-orange-400 hover:text-black duration-300" />
          </a>
          <a
            href="https://www.linkedin.com/in/seunghyukpark/"
            aria-label="LinkedIn"
          >
            <FaLinkedin className="h-8 w-8 text-orange-400 hover:text-black duration-300" />
          </a>
          <a href="https://x.com/SPBuildThings" aria-label="Twitter">
            <FaTwitterSquare className="h-8 w-8 text-orange-400 hover:text-black duration-300" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
