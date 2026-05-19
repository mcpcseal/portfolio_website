import type { Project } from '../types';

interface Props {
  project: Project;
}

export default function ProjectRow({ project }: Props) {
  return (
    <article id={`project-${project.id}`} className="group flex flex-col sm:flex-row sm:items-center gap-3 py-5 border-b border-gray-100 last:border-0">
      <div className="flex-1 min-w-0">
        <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-1">
          <h3 className="text-base font-semibold text-gray-900">{project.title}</h3>
          {project.artist && (
            <span className="text-sm text-gray-400">— {project.artist}</span>
          )}
        </div>
        {project.description && (
          <p className="text-sm text-gray-500 leading-relaxed mb-2">
            {project.description}
          </p>
        )}
        <div className="flex flex-wrap gap-1.5 items-center">
          <span className="text-xs px-2 py-0.5 bg-gray-900 text-white rounded-full">
            {project.role}
          </span>
          {project.tags?.map((tag) => (
            <span
              key={tag}
              className="text-xs px-2 py-0.5 bg-gray-100 text-gray-500 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
      <div className="flex items-center gap-3 shrink-0">
        <span className="text-sm text-gray-400">{project.year}</span>
        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-gray-900 underline underline-offset-2 hover:text-gray-500 transition-colors"
          >
            Link ↗
          </a>
        )}
      </div>
    </article>
  );
}
