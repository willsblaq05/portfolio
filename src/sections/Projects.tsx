import { projects } from '../data/Projects'
import ScrollReveal from '../components/ScrollReveal'

function Projects() {
  return (
    <section
      aria-labelledby="projects-title"
      className="border-b border-muted/20 py-20"
      id="projects"
    >
      <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-accent">
        Selected work
      </p>
      <h2 className="text-3xl font-semibold tracking-tight" id="projects-title">
        Featured Projects
      </h2>
      <p className="mt-4 max-w-2xl leading-7 text-muted">
        A few examples of what I’ve built.
      </p>
      <div className="mt-8 grid items-stretch gap-5 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ScrollReveal
            className="h-full"
            key={project.githubUrl}
            delayMs={80}
          >
            <article className="flex h-full min-h-48 flex-col rounded-2xl border border-muted/20 bg-surface p-6 shadow-sm shadow-black/5 transition-colors duration-200 hover:border-accent/50">
              <h3 className="font-semibold text-heading">{project.title}</h3>
              <p className="mt-3 text-sm leading-6 text-muted">
                {project.description}
              </p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <li
                    className="rounded-md bg-accent/10 px-3 py-1 text-xs font-medium text-accent"
                    key={tech}
                  >
                    {tech}
                  </li>
                ))}
              </ul>
              <a
                className="mt-auto pt-6 text-sm font-medium text-accent transition-colors hover:text-accent/70"
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                View on GitHub
              </a>
            </article>
          </ScrollReveal>
        ))}
      </div>
    </section>
  )
}

export default Projects
