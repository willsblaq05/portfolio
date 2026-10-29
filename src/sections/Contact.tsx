import { FiArrowUpRight, FiGithub, FiMail, FiPhone } from 'react-icons/fi'
import ScrollReveal from '../components/ScrollReveal'

const contactLinks = [
  {
    label: 'Email',
    value: 'willsblaq@gmail.com',
    href: 'mailto:willsblaq@gmail.com',
    Icon: FiMail,
  },
  {
    label: 'Phone',
    value: '+234 901 915 1974',
    href: 'tel:+2349019151974',
    Icon: FiPhone,
  },
]

function Contact() {
  return (
    <section
      aria-labelledby="contact-title"
      className="border-b border-muted/20 py-20"
      id="contact"
    >
      <div className="grid gap-10 md:grid-cols-[1fr_auto] md:items-end">
        <div>
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-accent">
            Let&apos;s work together
          </p>
          <h2 className="text-3xl font-semibold tracking-tight" id="contact-title">
            Have a project in mind?
          </h2>
          <p className="mt-4 max-w-2xl leading-7 text-muted">
            I&apos;m open to opportunities and collaborations. Get in touch and
            let&apos;s talk about what we can build.
          </p>
        </div>
        <a
          className="inline-flex w-fit items-center gap-2 rounded-lg bg-accent px-5 py-3 font-medium text-accent-foreground transition-colors hover:bg-accent/90"
          href="mailto:willsblaq@gmail.com"
        >
          Email me
          <FiArrowUpRight aria-hidden="true" size={18} />
        </a>
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {contactLinks.map(({ label, value, href, Icon }) => (
          <ScrollReveal
            className="h-full"
            delayMs={80}
            key={label}
          >
            <a
              className="flex h-full items-center gap-4 rounded-xl border border-muted/20 bg-surface p-5 text-heading shadow-sm shadow-black/5 transition-colors hover:border-accent/50"
              href={href}
            >
              <Icon aria-hidden="true" className="size-5 shrink-0 text-accent" />
              <span className="min-w-0">
                <span className="block text-sm text-muted">{label}</span>
                <span className="block truncate font-medium">{value}</span>
              </span>
            </a>
          </ScrollReveal>
        ))}
        <ScrollReveal className="h-full" delayMs={160}>
          <a
            className="flex h-full items-center gap-4 rounded-xl border border-muted/20 bg-surface p-5 text-heading shadow-sm shadow-black/5 transition-colors hover:border-accent/50"
            href="https://github.com/willsblaq"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FiGithub aria-hidden="true" className="size-5 shrink-0 text-accent" />
            <span className="min-w-0">
              <span className="block text-sm text-muted">GitHub</span>
              <span className="block truncate font-medium">github.com/willsblaq</span>
            </span>
            <FiArrowUpRight aria-hidden="true" className="ml-auto size-4 shrink-0 text-muted" />
          </a>
        </ScrollReveal>
        <ScrollReveal className="h-full" delayMs={240}>
          <a
            className="flex h-full items-center gap-4 rounded-xl border border-muted/20 bg-surface p-5 text-heading shadow-sm shadow-black/5 transition-colors hover:border-accent/50"
            href="https://x.com/DevWill_"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span aria-hidden="true" className="size-5 shrink-0 text-center font-semibold text-accent">
              X
            </span>
            <span className="min-w-0">
              <span className="block text-sm text-muted">X</span>
              <span className="block truncate font-medium">x.com/DevWill_</span>
            </span>
            <FiArrowUpRight aria-hidden="true" className="ml-auto size-4 shrink-0 text-muted" />
          </a>
        </ScrollReveal>
      </div>
    </section>
  )
}

export default Contact
