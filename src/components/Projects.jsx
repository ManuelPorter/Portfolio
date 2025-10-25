import PropTypes from 'prop-types';
import { PROJECTS } from '../constants';

const Projects = ({ theme }) => {
  return (
  <section id="projectsSection" className="mt-24 md:mt-60 pt-6 pb-12 px-4 sm:px-6 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <h2 className={`${theme === 'dark' ? 'text-neutral-200' : 'text-gray-700'} text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-10`}>
          Projects
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((p, idx) => (
            <article key={idx} className={`rounded overflow-hidden shadow-md ${theme === 'dark' ? 'bg-neutral-800' : 'bg-white'}`}>
              <img loading="lazy" src={p.image} alt={`${p.title} thumbnail`} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className={`${theme === 'dark' ? 'text-white' : 'text-gray-900'} text-xl font-semibold mb-2`}>{p.title}</h3>
                <p className={`${theme === 'dark' ? 'text-neutral-300' : 'text-gray-600'} text-sm mb-3`}>{p.description}</p>
                <div className="flex flex-wrap gap-2">
                  {p.technologies.map((t, i) => (
                    <span key={i} className={`px-2 py-1 text-xs rounded ${theme === 'dark' ? 'bg-neutral-700 text-neutral-200' : 'bg-gray-100 text-gray-800'}`}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

Projects.propTypes = {
  theme: PropTypes.string,
};

export default Projects;
