import ContactForm from "./components/ContactForm";
const services = [
  {
    title: "SQL & Database Solutions",
    description:
      "Queries, stored procedures, troubleshooting, performance improvements, and database solutions built around the way your business actually works.",
  },
  {
    title: "Data Cleanup & Reconciliation",
    description:
      "Find duplicates, inconsistent records, missing information, and mismatched data—and turn it into something you can trust.",
  },
  {
    title: "Reporting & Automation",
    description:
      "Replace repetitive manual reporting with reliable processes that save time and deliver useful information faster.",
  },
  {
    title: "ETL & Data Integration",
    description:
      "Bring information together from databases, spreadsheets, exports, and other systems into a usable, consistent data flow.",
  },
  {
    title: "Excel & Access Modernization",
    description:
      "Improve business-critical spreadsheets and Access databases, automate repetitive work, and create a path toward more scalable solutions.",
  },
  {
    title: "Data Problem Solving",
    description:
      "Not sure what the technical solution is? Start with the business problem. We'll work backward from what you need to accomplish.",
  },
];

const problems = [
  "Reports take hours of manual work every week.",
  "Customer or account records contain duplicates.",
  "Important information lives in multiple systems.",
  "A database or query has become painfully slow.",
  "Excel or Access has outgrown the job it was built for.",
  "You have plenty of data but can't easily answer business questions.",
];

const examples = [
  {
    label: "PERFORMANCE",
    title: "Slow Data Processing",
    description:
      "Reworked data-processing workflows by moving heavy transformations closer to the database, reducing unnecessary processing and improving efficiency.",
  },
  {
    label: "DATA QUALITY",
    title: "Duplicate Records",
    description:
      "Designed multi-step matching logic using names, addresses, and other identifying attributes to consolidate records while accounting for match confidence.",
  },
  {
    label: "AUTOMATION",
    title: "Repetitive Manual Work",
    description:
      "Built database and reporting solutions that transformed repetitive business processes into faster, more consistent workflows.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      {/* Navigation */}
      <header className="border-b border-white/10">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">
          <a href="#" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-400 font-black text-slate-950">
              C2U
            </div>
            <div>
              <div className="font-bold tracking-wide">CONNECT2U</div>
              <div className="text-xs tracking-[0.22em] text-cyan-300">
                DATA SOLUTIONS
              </div>
            </div>
          </a>

          <nav className="hidden items-center gap-8 text-sm text-slate-300 md:flex">
            <a href="#services" className="transition hover:text-white">
              Services
            </a>
            <a href="#solutions" className="transition hover:text-white">
              Solutions
            </a>
            <a href="#about" className="transition hover:text-white">
              About
            </a>
            <a
              href="mailto:hello@connect2u.xyz"
              className="rounded-full bg-cyan-400 px-5 py-2.5 font-semibold text-slate-950 transition hover:bg-cyan-300"
            >
              Let's Talk
            </a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute left-1/2 top-0 -z-0 h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-3xl" />

        <div className="relative z-10 mx-auto grid max-w-7xl gap-14 px-6 py-24 lg:grid-cols-[1.2fr_.8fr] lg:px-8 lg:py-32">
          <div>
            <div className="mb-6 inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-300">
              SQL • Data • Reporting • Automation
            </div>

            <h1 className="max-w-4xl text-5xl font-black leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
              Your business has the data.
              <span className="block text-cyan-300">
                Let's turn it into answers.
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
              Connect2U helps businesses solve database, reporting, data
              quality, integration, and automation problems without turning
              every project into an enormous technology initiative.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="mailto:hello@connect2u.xyz?subject=I%20have%20a%20data%20problem"
                className="rounded-xl bg-cyan-400 px-7 py-4 text-center font-bold text-slate-950 transition hover:bg-cyan-300"
              >
                Tell Me About Your Data Problem
              </a>

              <a
                href="#services"
                className="rounded-xl border border-white/20 px-7 py-4 text-center font-semibold transition hover:border-white/40 hover:bg-white/5"
              >
                See What I Can Help With
              </a>
            </div>

            <p className="mt-6 text-sm text-slate-500">
              No complicated sales process. Start with the problem you're
              trying to solve.
            </p>
          </div>

          {/* Hero side panel */}
          <div className="flex items-center">
            <div className="w-full rounded-3xl border border-white/10 bg-white/[0.04] p-7 shadow-2xl backdrop-blur">
              <div className="mb-6 flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-red-400" />
                <span className="h-3 w-3 rounded-full bg-amber-300" />
                <span className="h-3 w-3 rounded-full bg-emerald-400" />
                <span className="ml-3 font-mono text-xs text-slate-500">
                  business_problem.sql
                </span>
              </div>

              <div className="space-y-4 font-mono text-sm leading-7">
                <p>
                  <span className="text-purple-300">SELECT</span>{" "}
                  <span className="text-cyan-300">answers</span>
                </p>
                <p>
                  <span className="text-purple-300">FROM</span>{" "}
                  <span className="text-emerald-300">your_business_data</span>
                </p>
                <p>
                  <span className="text-purple-300">WHERE</span>{" "}
                  problem ={" "}
                  <span className="text-amber-200">'needs solving'</span>;
                </p>

                <div className="my-5 border-t border-white/10" />

                <p className="text-slate-500">-- Result</p>
                <p>
                  <span className="text-emerald-300">✓</span> Cleaner data
                </p>
                <p>
                  <span className="text-emerald-300">✓</span> Faster reporting
                </p>
                <p>
                  <span className="text-emerald-300">✓</span> Less manual work
                </p>
                <p>
                  <span className="text-emerald-300">✓</span> Better answers
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problems */}
      <section className="border-y border-white/10 bg-slate-900/60 py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <p className="font-semibold uppercase tracking-[0.25em] text-cyan-300">
                Sound familiar?
              </p>
              <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
                Data problems usually start as business problems.
              </h2>
              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-400">
                You don't need to know whether you need SQL, ETL, automation,
                or something else. That's part of figuring out the solution.
              </p>
            </div>

            <div className="grid gap-3">
              {problems.map((problem) => (
                <div
                  key={problem}
                  className="flex gap-4 rounded-xl border border-white/10 bg-slate-950/60 p-4"
                >
                  <span className="font-bold text-cyan-300">→</span>
                  <span className="text-slate-300">{problem}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="font-semibold uppercase tracking-[0.25em] text-cyan-300">
              Services
            </p>
            <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
              Practical data help without unnecessary complexity.
            </h2>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <article
                key={service.title}
                className="group rounded-2xl border border-white/10 bg-white/[0.03] p-7 transition hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-white/[0.05]"
              >
                <div className="mb-7 font-mono text-sm text-cyan-300">
                  0{index + 1}
                </div>
                <h3 className="text-xl font-bold">{service.title}</h3>
                <p className="mt-4 leading-7 text-slate-400">
                  {service.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Experience / Solutions */}
      <section
        id="solutions"
        className="border-y border-white/10 bg-slate-900/60 py-24"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="font-semibold uppercase tracking-[0.25em] text-cyan-300">
              Real-World Problem Solving
            </p>
            <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
              The technology matters. The outcome matters more.
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-400">
              Examples of the kinds of business data challenges I've worked
              through during my career.
            </p>
          </div>

          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {examples.map((example) => (
              <article
                key={example.title}
                className="rounded-2xl border border-white/10 bg-slate-950 p-7"
              >
                <p className="font-mono text-xs font-bold tracking-[0.2em] text-cyan-300">
                  {example.label}
                </p>
                <h3 className="mt-5 text-2xl font-bold">{example.title}</h3>
                <p className="mt-4 leading-7 text-slate-400">
                  {example.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[.8fr_1.2fr] lg:px-8">
          <div>
            <p className="font-semibold uppercase tracking-[0.25em] text-cyan-300">
              Why Connect2U?
            </p>
            <h2 className="mt-4 text-4xl font-bold tracking-tight">
              Start with the business question.
            </h2>
          </div>

          <div className="space-y-6 text-lg leading-8 text-slate-300">
            <p>
              I'm Raymond Resurreccion, the person behind Connect2U Data
              Solutions. I've spent years working with business data,
              databases, reporting processes, ETL workflows, and the messy
              real-world problems that happen between systems.
            </p>

            <p>
              My approach is straightforward: understand what you're trying to
              accomplish first, then determine the simplest reliable technical
              solution.
            </p>

            <p>
              Connect2U is especially suited for businesses that have a data
              problem but don't necessarily need—or want—a large consulting
              engagement.
            </p>
          </div>
        </div>
      </section>

      {/* Contact */}
<section id="contact" className="border-t border-white/10 bg-slate-900/60 py-24">
  <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
    <div>
      <p className="font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Let's Talk
      </p>

      <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">
        Tell me about your data problem.
      </h2>

      <p className="mt-6 text-lg leading-8 text-slate-400">
        You don't need to know the technical solution. Tell me what's
        happening, what you've tried, and what you'd like the end result to
        look like.
      </p>

      <div className="mt-8 rounded-2xl border border-white/10 bg-slate-950 p-6">
        <p className="text-sm text-slate-500">Prefer email?</p>
        <a
          href="mailto:hello@connect2u.xyz"
          className="mt-2 inline-block font-semibold text-cyan-300 hover:text-cyan-200"
        >
          hello@connect2u.xyz
        </a>
      </div>
    </div>

    <ContactForm />
  </div>
</section>

      {/* Footer */}
      <footer className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-8 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <p>© 2026 Connect2U Data Solutions</p>
          <a
            href="mailto:hello@connect2u.xyz"
            className="transition hover:text-cyan-300"
          >
            hello@connect2u.xyz
          </a>
        </div>
      </footer>
    </main>
  );
}