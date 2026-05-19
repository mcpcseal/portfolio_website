import { projects } from '../data/projects';
import ProjectRow from './ProjectRow';

export default function ProjectsSection() {
  return (
    <section id="projects" className="max-w-5xl mx-auto px-6 py-20">
      <div className="mb-12">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-2">Credits</h2>
        <p className="text-gray-400 text-sm">Projects & collaborations</p>
      </div>
      <div className="bg-white rounded-2xl border border-gray-100 px-6">
        {projects.map((project) => (
          <ProjectRow key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
