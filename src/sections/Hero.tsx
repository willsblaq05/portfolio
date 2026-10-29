import portraitImage from '../assets/portrait.jpg'

function Hero() {
  return (
    <section
      aria-labelledby="hero-title"
      className="relative isolate grid min-h-[60vh] items-center gap-12 border-b border-muted/20 py-20 md:grid-cols-2"
      id="home"
    >
      <div
        aria-hidden="true"
        className="hero-dot-grid pointer-events-none absolute inset-0 z-0"
      />
      <div className="relative z-10">
        <p className="mb-4 text-sm font-medium text-accent uppercase tracking-[0.2em]">
          Available for opportunities
        </p>
        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl" id="hero-title">
          Hi, I’m <span className="text-accent">Will</span>.
          <br />
          I build for the web.
        </h1>
        <p className="mt-6 max-w-xl leading-7 text-muted">
          I build modern web applications, business dashboards, backend systems,
          and AI-powered solutions that solve real-world problems. Focused on
          clean architecture, system design, and building reliable, scalable
          software.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <a
            className="rounded-lg bg-accent px-5 py-3 font-medium text-accent-foreground transition-colors hover:bg-accent/90"
            href="#projects"
          >
            View My Projects
          </a>
          <a
            className="rounded-lg border border-muted/30 px-5 py-3 font-medium text-heading transition-colors hover:border-accent hover:text-accent"
            href="#contact"
          >
            Get in Touch
          </a>
        </div>
      </div>
      <div className="relative z-10 mx-auto flex w-full max-w-md flex-col gap-4">
        <figure className="w-full overflow-hidden rounded-2xl border border-muted/20 bg-surface shadow-xl shadow-black/5">
          <img
            alt="Illustrated portrait of Will with DevWill branding"
            className="mx-auto block h-auto w-full max-w-md object-contain"
            decoding="async"
            fetchPriority="high"
            height={800}
            src={portraitImage}
            width={800}
          />
          <figcaption className="px-6 pb-5 text-center text-sm text-muted">
            Full-stack developer
          </figcaption>
        </figure>
      </div>
    </section>
  )
}

export default Hero
