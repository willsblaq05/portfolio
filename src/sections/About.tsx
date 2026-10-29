import {
  SiFastapi,
  SiGithub,
  SiPostgresql,
  SiPython,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from 'react-icons/si'
import ScrollReveal from '../components/ScrollReveal'

const technologyGroups = [
  {
    category: 'Frontend',
    technologies: [
      { name: 'React', Icon: SiReact },
      { name: 'TypeScript', Icon: SiTypescript },
      { name: 'Tailwind CSS', Icon: SiTailwindcss },
    ],
  },
  {
    category: 'Backend',
    technologies: [
      { name: 'FastAPI', Icon: SiFastapi },
      { name: 'Python', Icon: SiPython },
      { name: 'PostgreSQL', Icon: SiPostgresql },
    ],
  },
  {
    category: 'Tools',
    technologies: [{ name: 'GitHub', Icon: SiGithub }],
  },
]

function About() {
  return (
    <section
      aria-labelledby="about-title"
      className="border-b border-muted/20 py-20"
      id="about"
    >
      <div className="mb-10">
        <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-accent">
          A little about me
        </p>
        <h2 className="text-3xl font-semibold tracking-tight" id="about-title">
          About Me
        </h2>
      </div>

      <div className="mt-8 grid items-stretch gap-5 md:grid-cols-2 lg:grid-cols-3">
        <ScrollReveal className="h-full">
          <article className="h-full rounded-2xl border border-muted/20 bg-surface p-6 shadow-sm shadow-black/5">
            <h3 className="text-lg font-semibold text-heading">Introduction</h3>
            <p className="mt-4 leading-7 text-muted">
              I&apos;m a software developer focused on building scalable web
              applications and AI-powered products. I work with Python, FastAPI,
              React, and PostgreSQL, with a growing focus on AI engineering,
              system design, and intelligent workflows. I enjoy turning ideas
              into practical software and engineering reliable solutions to
              real-world problems.
            </p>
          </article>
        </ScrollReveal>

        <ScrollReveal className="h-full" delayMs={80}>
          <article className="h-full rounded-2xl border border-muted/20 bg-surface p-6 shadow-sm shadow-black/5">
            <h3 className="text-lg font-semibold text-heading">Personal Info</h3>
            <dl className="mt-5 space-y-4 text-sm">
            <div className="flex flex-wrap justify-between gap-x-4 gap-y-1 border-b border-muted/20 pb-3">
              <dt className="text-muted">Location</dt>
              <dd className="text-right text-heading">Enugu, Nigeria</dd>
            </div>
            <div className="flex flex-wrap justify-between gap-x-4 gap-y-1 border-b border-muted/20 pb-3">
              <dt className="text-muted">Email</dt>
              <dd className="text-right text-heading">willsblaq@gmail.com</dd>
            </div>
            <div className="flex flex-wrap justify-between gap-x-4 gap-y-1 border-b border-muted/20 pb-3">
              <dt className="text-muted">GitHub</dt>
              <dd className="text-right text-accent">
                <a
                  className="transition-colors hover:text-accent/70"
                  href="https://github.com/willsblaq"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  github.com/willsblaq
                </a>
              </dd>
            </div>
            <div className="flex flex-wrap justify-between gap-x-4 gap-y-1 border-b border-muted/20 pb-3">
              <dt className="text-muted">X</dt>
              <dd className="text-right text-accent">
                <a
                  className="transition-colors hover:text-accent/70"
                  href="https://x.com/DevWill_"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  x.com/DevWill_
                </a>
              </dd>
            </div>
            <div className="flex flex-wrap justify-between gap-x-4 gap-y-1 border-b border-muted/20 pb-3">
              <dt className="text-muted">Phone</dt>
              <dd className="text-right text-heading">+234 901 915 1974</dd>
            </div>
            <div className="flex flex-wrap justify-between gap-x-4 gap-y-1">
              <dt className="text-muted">Freelance</dt>
              <dd className="text-right text-accent">Available</dd>
            </div>
            </dl>
          </article>
        </ScrollReveal>

        <ScrollReveal className="h-full" delayMs={160}>
          <section
            aria-labelledby="about-skills-title"
            className="h-full rounded-2xl border border-muted/20 bg-surface p-6 shadow-sm shadow-black/5"
            id="skills"
          >
            <h3
              className="text-lg font-semibold text-heading"
              id="about-skills-title"
            >
              Tech Stack
            </h3>
            <div className="mt-5 space-y-5">
            {technologyGroups.map(({ category, technologies }) => (
              <div key={category}>
                <h4 className="mb-2 text-xs font-medium uppercase tracking-wider text-muted">
                  {category}
                </h4>
                <ul className="flex flex-wrap gap-2">
                  {technologies.map(({ name, Icon }) => (
                    <li
                      className="flex items-center gap-2 rounded-full border border-muted/20 bg-background px-3 py-2 text-sm text-muted"
                      key={name}
                    >
                      <Icon aria-hidden="true" className="size-4 text-accent" />
                      <span>{name}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            </div>
          </section>
        </ScrollReveal>
      </div>
    </section>
  )
}

export default About
